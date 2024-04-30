import { useContext } from "react";
import { BiEdit,BiCheck,BiTrashAlt } from "react-icons/bi";
import { TodoContext } from "../context/TodoProvider";

 const TodoList = ({id,isChecked,text}) => {
  const {dispatch,editFlag} = useContext(TodoContext);
  const checkTodo = () => {dispatch({type:"CHECK_TODO",payload:id})}
  const deleteTodo = () => {dispatch({type:"DELETE_TODO",payload:id})}

  const editFx = () => {dispatch({type:"EDIT_CONFIG",payload:{text,id}})}
  return (
   <li>
      <button className={`checkBtn btn btn-circle ${editFlag && "v-hide"}`}
          onClick={checkTodo}><BiCheck /></button>
      <p className={`text ${isChecked && "liChecked"}`}>{text}</p>
      <button className={`editBtn btn btn-circle ${(isChecked || editFlag) && "v-hide"}`}
          onClick={editFx}><BiEdit /></button>
      <button className={`trashBtn btn btn-circle ${editFlag && "v-hide"}`}
          onClick={deleteTodo}><BiTrashAlt /></button>    
    </li>
  )
}

export default TodoList;


/* things to know
1) {`text ${isChecked && "liChecked"}`}
depending on value of each isChecked we will apply li check class
2) {`editBtn btn btn-circle ${isChecked && "v-hide"}`}
 depending on value of each isChecked we will hide the edit icon


*/