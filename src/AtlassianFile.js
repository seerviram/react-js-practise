
import "./Atlassian.css";
import * as React from 'react';

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

const FileExplore = ({data, addFileAndFolder, deleteFileAndFolder})=> {
    const [expanded, setExpaned] = React.useState({})
    const onclickHandler = (fileId)=> {
        setExpaned((prev)=> {
            return ({
                ...prev,
                [fileId]: !prev[fileId]
            })
        })
    }

    const addFolder = (parentId)=> {
    const name = prompt("provide folder name");
    addFileAndFolder(name, parentId,true)
    }

    const addFile = (parentId) => {
    const name = prompt("provide file name")
    addFileAndFolder(name, parentId, false)
    }

    const deleteFile = (id) => {
        deleteFileAndFolder(id)
    }

    return (
        <div className="filecontainer">
        {
         data.map((fileEle, index)=> (
            <>
            <div className="flex">
            <div className="fileFolder">{fileEle.name}</div>
            {(fileEle.children) && <span onClick={()=> onclickHandler(fileEle.id)}>{expanded[fileEle.id] ? "[-]" : "[+]"}</span>}
            {( fileEle.children) && <button className="btn" onClick={()=> addFolder(fileEle.id)}>Add Folder</button>}
            {(fileEle.children) && <button className="btn" onClick={()=> addFile(fileEle.id)}>Add File</button>}
            <button className="btn" onClick={()=> deleteFile(fileEle.id)}>Delete File</button>
            </div>
            {
          expanded[fileEle.id] ?
            (fileEle.children) && <FileExplore data={fileEle.children} addFileAndFolder={addFileAndFolder} deleteFileAndFolder={deleteFileAndFolder}/>
            : null
             }
            </>
         ))
        }
        </div>
    )
}

export default function AtlassianFile() {
    const [fileData, setFileData] = React.useState(data)

    const addFileAndFolder =(filename, parentId, arg) => {
        const updatedDataAfterAdd = (prev)=> {
            const list = prev.map((file, index)=> {
                if(file.id === parentId){
                    return {
                        ...file,
                        children: [...file.children, {id: Date.now().toString(), name:filename, ...(arg && {children:[]})}]
                    }
                } else if(file.children){
                    return {
                        ...file,
                        children: updatedDataAfterAdd(file.children)
                    }
                }
                return file;
            })
            return list;
        }

        setFileData((prev)=> updatedDataAfterAdd(prev))
    }

    const deleteFileAndFolder =(Id) => {
        const updatedDataAfterDeletion = (prev)=> {
            const list = prev.filter((file, index)=>file.id!==Id).map((file)=> {
                if(file.children){
                    return {
                        ...file,
                        children: updatedDataAfterDeletion(file.children)
                    }
                }
                return file;
            })
            return list;
        }

        setFileData((prev)=> updatedDataAfterDeletion(prev))
    }

return <FileExplore data={fileData} addFileAndFolder = {addFileAndFolder} deleteFileAndFolder={deleteFileAndFolder} />
}
