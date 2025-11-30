import React, { useContext } from 'react'
import { UserContext } from './context/ContextAPI/user-context-provider'
import useUserStore from './context/zustand/useUserStor'

function Base() {
  const { user, login, logout } = useContext(UserContext);
  // using custom hook
  // const { user, login, logout } = useUserStore();

  return (
    <> 
      <div>
        {user ? (
          <div>
            <p>Welcome {user.name}</p>
            <p>Email: {user.email}</p>
            <button onClick={logout}>Logout</button>
          </div>
        ) : (
          <div>
            <p>Please login</p>
            <button onClick={login}>Login</button>
          </div>
        )}
      </div>
    </>
  )
}

export default Base
