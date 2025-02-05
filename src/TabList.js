import React, { useState } from 'react'
import Tab from './Tab';

export const TabsConext = React.createContext();
export default function TabList({children}) {

    // List of tab
  const  [activeTabIndex, setActiveTabIndex] = useState(0);
   const context = {
    activeTabIndex,
    setActiveTabIndex
   }

return (
<TabsConext.Provider value={context}>
       {children}
    </TabsConext.Provider>
  )
}

