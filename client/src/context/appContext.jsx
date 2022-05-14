import React,{useContext, useReducer,useState} from 'react'
const initaState = {
    isLoading:false,
    showAlert: false,
    alertText:"",
    alertType:"",

}
/*  */

/* Creating a context object. */
 const AppContext = React.createContext(initaState);

const AppProvider = ({children}) => {
 const [state,setState] =  useState(initaState);
   return ( 
        <AppContext.Provider value={{...state}}>
            {children}
        </AppContext.Provider>
    )
   }

    const useAppContext = () => {
        return useContext(AppContext);
    }

export  {AppProvider,initaState,useAppContext}