import * as React from 'react';
import "./checkbox.css"

const Checkboxes = ({checboxData, checkBoxhandler, checkboxState}) => {
    return (
        <>
        {checboxData.map((data,index)=> (
                  <div className="checbox" key={data.id}>
                  <div>
                      <input type="checkbox"
                      onClick={(e)=> checkBoxhandler(e.target.checked, data)}
                      checked={checkboxState[data.id]}
                      />
                      <span>{data.name}</span>
                      {data.children &&
                      <Checkboxes checboxData={data.children} key={index} checkBoxhandler={checkBoxhandler} checkboxState={checkboxState}/>}
                  </div>
          </div>
        ))}
        </>
        )
        }



const checkboxesData = [
    {
      id: 1,
      name: 'Electronics',
      children: [
        {
          id: 2,
          name: 'Mobile phones',
          children: [
            {
              id: 3,
              name: 'iPhone',

            },
            {
              id: 4,
              name: 'Android',
            },
          ],
        },
        {
          id: 5,
          name: 'Laptops',
          children: [
            {
              id: 6,
              name: 'MacBook',
            },
            {
              id: 7,
              name: 'Surface Pro',

            },
          ],
        },
      ],
    },
    {
      id: 8,
      name: 'Books',
      children: [
        {
          id: 9,
          name: 'Fiction',
        },
        {
          id: 10,
          name: 'Non-fiction',
        },
      ],
    },
    {
      id: 11,
      name: 'Toys',
    },
  ];


export default function NestedCheckBox() {
const[data, setData] = React.useState(checkboxesData);
const [checkboxState, setCheckboxstate] = React.useState({})

const checkBoxhandler = (isChecked, node) => {
   
    setCheckboxstate((prev)=> {
      const newState = {...prev, [node.id]: isChecked}
       
      // UpdateChildren of the selected node

      const updateChildren = (node)=>{
        if(node.children){
          node.children.forEach(child=> {
            newState[child.id] = isChecked;
            child && child.children && updateChildren(child);
          })
        }
      }
      updateChildren(node)

      // updateParent if needed for selected children

      const updateParent = (node) => {
        if(!node.children){
          return newState[node.id] || false
        }
        const isAllChildChecked = node.children.every(child => updateParent(child))
        newState[node.id] = isAllChildChecked;
        return newState[node.id];
      }
      checkboxesData.forEach(node=> updateParent(node))
      return newState
    })

}

console.log(checkboxState)

  return (
    <div>
     <Checkboxes checboxData={data} checkBoxhandler={checkBoxhandler} checkboxState={checkboxState} />
    </div>
  );
}

/**
 * import React, { useState } from "react";

// Sample checkbox data structure
const checkboxData = [
  {
    id: "1",
    label: "Parent 1",
    children: [
      { id: "1-1", label: "Child 1-1" },
      {
        id: "1-2",
        label: "Child 1-2",
        children: [{ id: "1-2-1", label: "Child 1-2-1" }],
      },
    ],
  },
  {
    id: "2",
    label: "Parent 2",
    children: [{ id: "2-1", label: "Child 2-1" }],
  },
];

// Component to render nested checkboxes
const NestedCheckbox = ({ data, checkedState, onCheckChange }) => {
  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>
          <input
            type="checkbox"
            id={item.id}
            checked={checkedState[item.id] || false}
            onChange={() => onCheckChange(item.id)}
          />
          <label htmlFor={item.id}>{item.label}</label>
          {item.children && (
            <NestedCheckbox
              data={item.children}
              checkedState={checkedState}
              onCheckChange={onCheckChange}
            />
          )}
        </li>
      ))}
    </ul>
  );
};

// Main Component
const CheckboxTree = () => {
  const [checkedState, setCheckedState] = useState({});

  // Recursive function to check/uncheck all children
  const updateChildren = (id, isChecked, data) => {
    let newState = { ...checkedState, [id]: isChecked };
    const findChildren = (items) => {
      items.forEach((item) => {
        newState[item.id] = isChecked;
        if (item.children) findChildren(item.children);
      });
    };
    const parentItem = data.find((item) => item.id === id);
    if (parentItem?.children) findChildren(parentItem.children);
    return newState;
  };

  // Recursive function to update parent checkbox state
  const updateParents = (id, data, newState) => {
    const findParent = (items, parent = null) => {
      for (let item of items) {
        if (item.id === id) return parent;
        if (item.children) {
          const found = findParent(item.children, item);
          if (found) return found;
        }
      }
      return null;
    };

    const parent = findParent(data);
    if (parent) {
      const allChecked = parent.children.every((child) => newState[child.id]);
      newState[parent.id] = allChecked;
      updateParents(parent.id, data, newState);
    }
  };

  // Handle checkbox change
  const handleCheckChange = (id) => {
    const isChecked = !checkedState[id];
    let newState = updateChildren(id, isChecked, checkboxData);
    updateParents(id, checkboxData, newState);
    setCheckedState(newState);
  };

  return (
    <div>
      <h2>Nested Checkbox System</h2>
      <NestedCheckbox data={checkboxData} checkedState={checkedState} onCheckChange={handleCheckChange} />
    </div>
  );
};

export default CheckboxTree;

 */


// https://codesandbox.io/p/sandbox/mh8mtk?file=%2Fsrc%2FApp.js%3A32%2C15