/* eslint-disable react/jsx-no-undef */
import React, { useState } from 'react';
import ChildAPIcomponent from './ChildAPIcomponent';



function ParentAPI() {
    const url = {
        POSTS:'https://jsonplaceholder.typicode.com/posts',
        COMMENTS:'https://jsonplaceholder.typicode.com/comments',
        USERS:'https://jsonplaceholder.typicode.com/users'
    }
    const[user,setUser] = useState(url.POSTS)
  return (
    <div> 
        <div className='form-group'>
            <label htmlFor="">POSTS</label>
            <input type="radio" name ='isChecked' checked={user == url.POSTS} onChange={(e) => setUser(url.POSTS)}/>
        </div>
        <div className='form-group'>
            <label htmlFor="">comments</label>
            <input type="radio" name ='isChecked' checked={user == url.COMMENTS} onChange={(e) => setUser(url.COMMENTS)}/>
        </div>
        <div className='form-group'>
            <label htmlFor="">USERS</label>
            <input type="radio" name ='isChecked' checked={user == url.USERS}  onChange={(e) => setUser(url.USERS)}/>
        </div>
        <ChildAPIcomponent url={user}/>
    </div>
    
  )
}

export default ParentAPI