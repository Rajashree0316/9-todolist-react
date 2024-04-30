import { createContext, useContext, useMemo, useState } from "react";
import { TodoContext } from "./TodoProvider";

export const MemoContext = createContext();

export const MemoProvider = ({ children }) => {
    const {todos} = useContext(TodoContext);

    const [filterType, setFilterType] = useState('all');
    
    const filteredTodos = useMemo(() =>{
        if(filterType === 'completed'){
            return todos.filter(todo => todo.isChecked)
        }else if (filterType === 'undone'){
            return todos.filter(todo => !todo.isChecked)
        } else{
            return todos;
        }
    },[todos,filterType])

      // Memoized count of items displayed on the screen
  const itemCount = useMemo(() => filteredTodos.length,[filteredTodos]);

    return (
        <MemoContext.Provider value={{
            filterType,
            filteredTodos,
            itemCount,
            showAllTodos: () => setFilterType('all'),
            showOnlyCompleted: () => setFilterType('completed'),
            showOnlyUndone: () => setFilterType('undone')
            }}>
            {children}
        </MemoContext.Provider>
    )
}

/* thing to know
memo context relies on todo context because depending of the todos how much to those todos 
is going to calculate that its going to filter
useMemo(()=>{},[])--> cache the result of calculation btw re-renders
*/