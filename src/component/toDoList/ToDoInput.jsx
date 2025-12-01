import { useState } from "react";
import { useDispatch } from "react-redux";
const ToDoInput = () =>{
     const [formData, setFormData] = useState({
            username: '',
            email: '',
          });
    const dispatch = useDispatch();

    function handelInputEvent(e) {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    }

    function getFormData(e){
        e.preventDefault()
        addToDo();          
        console.log(formData.username,formData.email)
    }

    function addToDo(){
        return dispatch({
            type: "todo/addedTodo",
            payload: { id: Math.floor(Math.random() * 20) + 1.1, ...formData},
        })
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
                 
                <br />
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
             
        </>
    )
}

export default ToDoInput;