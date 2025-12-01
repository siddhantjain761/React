//state object
const initialState = {
  todos: [
    {
      id: 1,
      email: "jhon@abc.com",
      name:"jhon",
      completed: false,
    },
    {
      id: 2,
      email: "petter@abc.com",
      name:"petter",
      completed: false,
    },
  ],
};

//define the reducer logic
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
//logic to add a new todo
    case "todo/addedTodo":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
//logic to delete a todo
    case "todo/deleteTodo":
        console.log("/////////////////////");
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
// logic to complete a todo
    case "todo/completeTodo":
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              completed: !todo.completed,
            };
          } else {
            return todo;
          }
        }),
      };
    default:
      return state;
  }
};

export default todoReducer;