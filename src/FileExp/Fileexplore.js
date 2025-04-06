import React from 'react'
import "./style.css"

const data = [
    {
      id: 1,
      name: 'README.md',
    },
    {
      id: 2,
      name: 'Documents',
      children: [
        {
          id: 3,
          name: 'Word.doc',
        },
        {
          id: 4,
          name: 'Powerpoint.ppt',
        },
      ],
    },
    {
      id: 5,
      name: 'Downloads',
      children: [
        {
          id: 6,
          name: 'unnamed.txt',
        },
        {
          id: 7,
          name: 'Misc',
          children: [
            {
              id: 8,
              name: 'foo.txt',
            },
            {
              id: 9,
              name: 'bar.txt',
            },
          ],
        },
      ],
    },
  ];

const updateState = (prev, file) => {
  return {...prev,[file.name]:!prev[file.name]}
}
  const FileManagementComponent = ({files, deleteFile, addNewFile}) => {
    const [isexpanded, setIsExpanded] = React.useState({})
    return (
      <>
        {files.map((file,index)=> (
          <div className="folder" key={file.id}>
            {file.children && <button
             onClick={()=> setIsExpanded(prev=> updateState(prev, file))}>
              {isexpanded[file.name] ? "-":"+"}</button>}
          <span key={index}>{file.name}</span>
          {file.children && <button onClick={()=> addNewFile(file.id)}>Add</button>}
          <button onClick={()=> deleteFile(file.id)}>De</button>
           {file.children && isexpanded[file.name] &&
             <FileManagementComponent files={file.children} addNewFile={addNewFile} deleteFile={deleteFile}/>}
          </div>
        ))}
    </>
    )

  }
  
function Fileexplore() {
  const level = 1
  const [jsonData, setJsonData] = React.useState(data);
  const addNewFile = (parentID)=> {
    const name = prompt("please add name")

    const updateFolderTree = (list)=> {
    let List =  list.map((file, index)=> {
      let flag = true
      if(file.id === parentID){
        return {
          ...file,
          children: [...file.children, {id:Date.now().toString(), name:name}]
        }
      } else if(file.children){
        return {...file, children: updateFolderTree(file.children)}
      }
       return file;
    })
    return List
    }

    setJsonData(prev=> updateFolderTree(prev))

  }
  const deleteFile = (parentID)=> {
     
    const updateFolderTree = (list)=> {
      let List =  list.filter((file, index)=> file.id!==parentID).map((file)=> {
        if(file.children){
          return {...file, children: updateFolderTree(file.children)}
        }
        return file
      })
      return List
      }
  
      setJsonData(prev=> updateFolderTree(prev))
  }

  return (
    <div>
        <FileManagementComponent files = {jsonData} addNewFile={addNewFile} deleteFile={deleteFile}/>
    </div>
  )
}

// const FileManagement = ({files, level})=> {

//       const localFiles = [files]
//       localFiles.sort((a,b)=> {
//         const first = !!a.children
//         const second = !!b.children
//         if(first!== second) return first ? -1 : 1
//         return a.name.localeCompare(b.name)
//       })
//       let originalFiles = localFiles[0]
//     const [clicked, setClicked] = React.useState(false)

//     const closehandler = ()=> {
//       setClicked(false)
//     }

//     const openhander = ()=> {
//       setClicked(true);
//     }

//   const isDirctory = Array.isArray(originalFiles.children);
//   return (
//     isDirctory ?  <>
//     <div >{originalFiles.name}
//       {clicked? <button onClick={closehandler}>[-]</button>
//       : <button onClick={openhander}>[+]</button>}
//     </div> 
//     {clicked && originalFiles.children.map((file, ind)=> <FileManagement  files={file} level={level+1} key={file.id+" "+file.name}/> )}
//     </> 
//     : <div>{(originalFiles.name).padStart( originalFiles.name.length + level, "*")}</div>
//   )
   
// }

export default Fileexplore
