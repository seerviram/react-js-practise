import React from 'react'
import Profile from './Profile'
import Interest from './Interest'

const TabContext = React.createContext()

const TabContextProvider = ({children}) => {
    const [tabState, setTabState] = React.useState({})

    return (
        <TabContext.Provider value={{
            data: tabState,
            onChangeState: setTabState
        }}>
            {children}
        </TabContext.Provider>
    )
}

export const useTabContext = () => React.useContext(TabContext);

const TabConfig = [
    {
        name: "profile",
        component: <Profile/>,
        validate: (data)=> {
              console.log('profile', data)
        }
    },
    {
        name: "interest",
        component: <Interest/>,
        validate: (data)=> {
            console.log('interest', data)
               }
    }
]



function TabContainer() {
  return (
    <TabContextProvider>
      {TabConfig.map((tab, index)=> (
        <div>
            <span>{tab.name}</span>
              {tab.component}
        </div>
      ))}
    </TabContextProvider>
  )
}

export default TabContainer
