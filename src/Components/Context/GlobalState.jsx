import { createContext,useState } from "react";

const GlobalState = createContext();

const LocationProvider = ({children}) =>{
  const[name,setName] = useState('kolkata')

  return(
    <GlobalState.Provider value={{name,setName}}>
      {children}
    </GlobalState.Provider>
  )
}

export {GlobalState, LocationProvider};