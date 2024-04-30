import { createContext, useEffect, useReducer } from "react";
import TodoReducer from "../Reducer/TodoReducer";

const initialState = {
    todos: [],
    editFlag: false,
    editID: '',
    textToEdit: ''
}
export const TodoContext = createContext();


export const TodoProvider = ({ children }) => {
    const [state, dispatch] = useReducer(TodoReducer, initialState,()=>{
        const storedTodos = localStorage.getItem('todos')
        return{
            ...initialState,
            todos:storedTodos ? JSON.parse(storedTodos) : initialState.todos
        }
    })
    useEffect(() => {
      localStorage.setItem('todos',JSON.stringify(state.todos))
    }, [state.todos])
    
    return (
        <TodoContext.Provider value={{
            todos: state.todos,
            editFlag: state.editFlag,
            editID:state.editID,
            textToEdit:state.textToEdit,
            dispatch
        }}>
            {children}
        </TodoContext.Provider>
    )
}


/* things to know
1) since we want our data to persist across every render so naturally call for use effect
2)calling local storage by setting item with current todos and stringify state todos
3)everyTime current state changes we will override and update the local storage
4)init()-3rd param-->need to call local storage by writing method and calling todos then return object as 
prev state and override todos by ternary operator

*/