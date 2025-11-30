import { createContext, useState } from "react";

export const UserContext = createContext();

export const  UserContextProvider = (({children}) => {

    const [user,setUser] = useState(null);
    const login = () =>{
        setUser({name : "jhon" , email : "jhon@gmail.com"});
    }

    const logout = () =>{
        setUser(null);
    }

    const contextValue = {
        user,
        login,
        logout
    }
  return ( 
  <UserContext.Provider value={ contextValue }>
    {children}
  </UserContext.Provider>
  ); 
})
