import { useContext } from "react";
// import { TodoContext } from "../context/TodoProvider";
import TodoList from "../components/TodoList";
import AlertMessage from "../components/AlertMessage";
import { MemoContext } from "../context/MemoProvider";

export const Todos = () => {
  // const {todos} = useContext(TodoContext);
  const { filteredTodos } = useContext(MemoContext);
  return (
    <ul className="todos">

      {/* {todos.length > 0 ? 
      (
        todos.map(todo => (<TodoList key={todo.id}{...todo}/> ))
      ):(
      <AlertMessage/>
      )} */}
      {filteredTodos.length > 0 ?
        (
          filteredTodos.map(todo => (<TodoList key={todo.id}{...todo} />))
        ) : (
          <AlertMessage />
        )}
    </ul>
  )
}
