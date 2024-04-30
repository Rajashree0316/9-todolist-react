import { useContext, useEffect, useState } from "react";
import { BiPlusCircle,BiBlock,BiUpArrowCircle } from "react-icons/bi";
import { TodoContext } from "../context/TodoProvider";
import {nanoid} from "nanoid";

export const Form = () => {

  const {dispatch,editFlag,textToEdit} = useContext(TodoContext);

  const[text,setText] = useState('');
  const handleSubmit = (e) =>{
    e.preventDefault();

    if(!editFlag) // creating new item
    {
    const newTodo = {id:nanoid(), text, isChecked:false}
    dispatch({type:"ADD_TODO", payload:newTodo})
    }
    else if (editFlag){
      dispatch({type:"EDIT_TODO",payload:text})
      backToDefault()
    }
    //clear input
    setText('')
  }
  const backToDefault = () =>{dispatch({type:"REBOOT"})}

  useEffect(() => {
   setText(textToEdit)
  }, [textToEdit])
 
  return (
    <form onSubmit={handleSubmit}>
      <div className="input-container">
        <input type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..." 
        required />
      </div>
      <button className="btn" type="submit">{!editFlag ? <BiPlusCircle /> : <BiUpArrowCircle/>}</button>
      {editFlag && <button className="btn" onClick={backToDefault} type="button"><BiBlock /> </button>}
    </form>
  )
}

/* things to know
1)to cause re-render-useEffect
2) if edit flag is true return the button
3) handle submit --> if edit flag is false create a new todo otherwise dispatch and
return from the scratch i.e reboot so we are calling back to default fn
 */
