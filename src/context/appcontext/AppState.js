import React, {useReducer} from 'react'
import AppContext from './appContext'
import appReducer from './appReducer'
import {ADD_CONTENT} from '../../types'

const AppState = ({children}) => {
    const initialstate = {
        content: [
            {
                id: 1,
                name: 'Gokul'
            },
            {
                id: 2,
                name: 'Codes'
            }
        ]
    }
    const [state, dispatch] = useReducer(appReducer, initialstate)
    //types and dispatcher all functions
    const addContent = content => {
        dispatch({type: ADD_CONTENT, payload: content})
    }
    return (
        <AppContext.Provider value={{
            name: state.content, 
            addContent
        }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppState
