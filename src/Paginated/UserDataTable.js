import { useState } from "react";
import users from "./user.json"
import "./userstyle.css"

export default function DataTable() {
  const [userPerPage, setUserPerPage] = useState(5);
  const [pageNumber, setPageNumber] = useState(0);


  const totalPage = Math.ceil(users.length/userPerPage)

  const userHandler = (e) => {
    setUserPerPage(Number(e.target.value))
    setPageNumber(0)
  }

  const start = pageNumber*userPerPage;
  const end = pageNumber*userPerPage + userPerPage
  const filteredUsers = users.slice(start,end )

  return (
    <div>
      <select onChange={userHandler} value={userPerPage}>
        <option value={5}>
          5
        </option>
        <option value={10}>10</option>
        <option value={20}>20</option>
        <option value={40}>40</option>
      </select>
      <table>
        <thead>
          <tr>
            {[
              { label: "ID", key: "id" },
              { label: "Name", key: "name" },
              { label: "Age", key: "age" },
              { label: "Occupation", key: "occupation" },
            ].map(({ label, key }) => (
              <th key={key}>{label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map(({ id, name, age, occupation }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{name}</td>
              <td>{age}</td>
              <td>{occupation}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pageContainer">
      {[...Array(totalPage).keys()].map((page,index)=> <div className={`pagenumber ${index===pageNumber && "active"}`}
       onClick={()=> setPageNumber(index)}>{index+1}</div>)}
      </div>
    </div>
  );
}
