import { useSelector } from "react-redux";
import State from "../layout/State"
import ToDoItem from "./ToDoItem";
import ToDoInput from "./ToDoInput";

const ToDoList = () => {

    //callback function
    const selectToDos = (state) => state.todosObject.todos;

    const returnedToDos = useSelector(selectToDos);

    const displayToDos = returnedToDos.map((todo)=> 
        <ToDoItem key={todo.id} todo={todo}></ToDoItem>
    )

    return(
        <div>
            <ToDoInput></ToDoInput>
            {displayToDos}
        </div>
    )
}

export default ToDoList;