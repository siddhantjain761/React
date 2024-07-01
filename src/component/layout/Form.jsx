//rfce
import React, { useState } from 'react'

function Form() {
    
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        isChecked: '' ,
      });

    function handelInputEvent(e){
        const { name, value ,type , checked} = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
    }

    function getFormData(e){
        e.preventDefault()

        console.log(formData.username,formData.email,formData.password,formData.isChecked)
    }


    return (
        <>             
            <form onSubmit={getFormData}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Name</label>
                    <input type="text" className="form-control" placeholder="Enter name" value={formData.username} name='username' onChange={handelInputEvent} />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" name='email' value={formData.email}   placeholder="Enter email" onChange={handelInputEvent}/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1" >Password</label>
                    <input type="password" className="form-control" name='password' value={formData.password} placeholder="Password" onChange={handelInputEvent} />
                </div>

                {/* handle check box  */}
                <div className='form-group'>
                    <label htmlFor="">Check me :</label>
                    <input type="checkbox" name ='isChecked' checked={formData.isChecked} onChange={handelInputEvent}/>
                </div>
                <br />
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
             
        </>
    )
}

export default Form