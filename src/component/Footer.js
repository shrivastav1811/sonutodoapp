import React, {useContext, useState} from "react";
import { DataContext } from "./Dataprovider";

const Footer = () => {

const [checkAll, setCheckall] = useState(false)
const [todos, setTodos] = useContext(DataContext)

const handleCheckall = ()=>{
  const newTodos = [...todos]
  newTodos.forEach(todo =>{
    todo.complete = !checkAll
  })
  setTodos(newTodos)
  setCheckall(!checkAll)
}

const newTodosComplete = ()=>{
  return todos.filter(todo=> todo.complete === false)
}

const deleteTodo=()=>{
  
  setTodos(newTodosComplete())
  setCheckall(false)
}



  return (
    <>
    {
      todos.length === 0 ? <h2>Congratulations ! Nothing to do </h2>
      :
      <div className="row">
        <label htmlFor="all">
          <input type="checkbox"
           name="all" 
            id="all" 
             onChange={handleCheckall}
             checked={checkAll}
           />
          ALL
        </label>
        <p>You Have {newTodosComplete().length} to do</p>
        <button id="delete" onClick={deleteTodo}>Delete</button>
      </div>
    }
    </>
  );
};

export default Footer;
