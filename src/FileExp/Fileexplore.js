import React from 'react'


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
  
function Fileexplore() {
  const level = 1
  return (
    <div>
        {data.map((arr, index)=> (
        <FileManagement files={arr} key={arr.id+" "+arr.name} level={level}/>
        ))}
    </div>
  )
}

const FileManagement = ({files, level})=> {

  const localFiles = [files]
  localFiles.sort((a,b)=> {
    const first = !!a.children
    const second = !!b.children
    if(first!== second) return first ? -1 : 1
    return a.name.localeCompare(b.name)
  })
  let originalFiles = localFiles[0]
const [clicked, setClicked] = React.useState(false)

const closehandler = ()=> {
  setClicked(false)
}

const openhander = ()=> {
  setClicked(true);
}

const isDirctory = Array.isArray(originalFiles.children);
return (
  isDirctory ?  <>
  <div >{originalFiles.name} {clicked? <button onClick={closehandler}>[-]</button>: <button onClick={openhander}>[+]</button>}  </div> 
  {clicked && originalFiles.children.map((file, ind)=> <FileManagement  files={file} level={level+1} key={file.id+" "+file.name}/> )}
  </> 
  : <div>{(originalFiles.name).padStart( originalFiles.name.length + level, "*")}</div>
)
   
}

export default Fileexplore
