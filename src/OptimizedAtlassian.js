
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

  const SinglFileComponent = ({fileEle, addFolder,addFile, deleteFile, expanded, onclickHandler })=> {
    const [inputVal, setInputVal] = React.useState("")
    const [isAddButtonClicked, setIsAddButtonClicked] = React.useState(false)
    const addFileHandler = () => {
        addFile(inputVal, fileEle.id)
    }
    const addHandler = () => {
        addFolder(inputVal, fileEle.id)
        setIsAddButtonClicked(false)
    }
    const addFolderHandler = () => {
        setIsAddButtonClicked(true)
    }
    const deleteHandler = () => {
    deleteFile(fileEle.id)
    }
    const onClick = ()=> {
    onclickHandler(fileEle.id)
    }

    const changeHandler = (e)=> {
        setInputVal(e.target.value)
    }
    return (
        <div className="flex">
        <div className="fileFolder">{fileEle.name}</div>
        {(fileEle.children) && <span onClick={onClick}>{expanded[fileEle.id] ? "[-]" : "[+]"}</span>}
        {( fileEle.children) ? isAddButtonClicked ? <>
        <input type="text" value={ inputVal} onChange={changeHandler}/>
        <button className="btn" onClick={addHandler}>Add </button></> 
        : <button className="btn" onClick={addFolderHandler}>Add Folder</button>
        : null
        }
        {(fileEle.children) && <button className="btn" onClick={addFileHandler}>Add File</button>}
        <button className="btn" onClick={deleteHandler}>Delete File</button>
        </div>
    )
  }

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

    const addFolder = (inputvalue, parentId)=> {
    addFileAndFolder(inputvalue, parentId,true)
    }

    const addFile = (inputvalue, parentId) => {
    addFileAndFolder(inputvalue, parentId, false)
    }

    const deleteFile = (id) => {
        deleteFileAndFolder(id)
    }

    return (
        <div className="filecontainer">
        {
         data.map((fileEle, index)=> (
            <>
            <SinglFileComponent fileEle={fileEle} addFolder={addFolder} addFile={addFile} deleteFile={deleteFile} onclickHandler={onclickHandler} expanded={expanded} />
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

export default function OptimizedAtlassianFile() {
    const [fileData, setFileData] = React.useState(data)

    const addFileAndFolder = (filename, parentId, arg) => {
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
    };

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
