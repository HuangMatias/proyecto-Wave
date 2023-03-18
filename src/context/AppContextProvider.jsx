import { useReducer } from 'react'
import { AppContext } from './AppContext'


export const AppContextProvider = ({ children }) => {
    // const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState)
    return (
        
        <AppContext.Provider value={{/*{state, dispatch}*/}}>
            { children }
        </AppContext.Provider>
    )
}
