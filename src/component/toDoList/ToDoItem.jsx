import { useDispatch } from "react-redux";

const ToDoItem = ({ todo }) => {
  const dispatch = useDispatch();

  //delete todo
  const onDelete = (id) => {
    return dispatch({
      type: "todo/deleteTodo",
      payload: id,
    });
  };
  //complete todo
  const onComplete = (id) => {
    return dispatch({
      type: "todo/completeTodo",
      payload: id,
    });
  };

  return (
    <div>
      <h3 className={`todo${todo.completed ? "Completed" : ""}`}>
        {`${todo.name} - ${todo.email}`}
        <pre>{JSON.stringify(todo)}</pre>
      </h3>
      <div>
        <button onClick={() => onComplete(todo.id)}>Completed</button>
        <button onClick={() => onDelete(todo.id)}>Delete</button>
      </div>
    </div>
  );
};

export default ToDoItem;
