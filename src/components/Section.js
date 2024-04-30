import React, { useContext } from 'react'
import { TodoContext } from '../context/TodoProvider'
import { MemoContext } from '../context/MemoProvider';

export const Section = () => {
  const { dispatch, todos, editFlag } = useContext(TodoContext);

  const {
    filterType,
    itemCount,
    showAllTodos,
    showOnlyCompleted,
    showOnlyUndone
  } = useContext(MemoContext);

  const clearAll = () => {
    dispatch({ type: "DELETE_ALL" })
    dispatch({type: "REBOOT"}); 

  }
  return (
    <section>
      <p className="counter"><span>{itemCount}</span> items left</p>
      {(todos.length > 0 && !editFlag) && (
        <>
          <div className="filterBox">
            <button className={`btn ${filterType === "all" && "active"}`}
              onClick={showAllTodos}>All</button>
            <button className={`btn ${filterType === "undone" && "active"}`}
              onClick={showOnlyUndone}>Undone</button>
            <button className={`btn ${filterType === "completed" && "active"}`}
              onClick={showOnlyCompleted}>Completed</button>
          </div>
          <div className="corner">
            <button className="btn" onClick={clearAll}>Clear All Items</button>
          </div> 
        </>
      )}


    </section>
  )
}
