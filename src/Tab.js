import React from 'react'
import { TabsConext}  from "./TabList";

export default function Tab({children, index}) {
const {activeTabIndex, setActiveTabIndex} = React.useContext(TabsConext)
    return (
        <>
        <button onClick={()=> {
            setTimeout(()=> {
                setActiveTabIndex(index)
            }, 2000)
           }
            }>Tab {index+1}</button >
        <Tabpanel index={index}>
            {children}
            </Tabpanel>
        </>
    )
}

export const Tabpanel = ({index, children})=> {
    const {activeTabIndex} = React.useContext(TabsConext);
    return (activeTabIndex === index ? children: null)
}


