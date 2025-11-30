import { create } from "zustand";

// custome hook
// npm i zustand

const useUserStore = create((Set)={
    user:null,
    login: () => 
        Set({
            user: {name : "jhon" , email : "jhon@gmail.com"}
        }),
    logout: () =>
        Set({user : null})    

})

export default useUserStore