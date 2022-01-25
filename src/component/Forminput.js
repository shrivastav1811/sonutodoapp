import React, {useState, useContext} from 'react';
import { DataContext } from './Dataprovider';


const Forminput = () => {

  const [todos, setTodos] = useContext(DataContext);
  const [todoName, setTodoname] = useState('');


  const addTodo = (e)=>{
    e.preventDefault();
    setTodos([...todos, {name: todoName, complete: false}])
    setTodoname('');
  }

  return (
   <>
       <form autoComplete="off" onSubmit={addTodo}>
        <input 
        type="text" 
        name="todos" 
        value={todoName}
        onChange={e=>setTodoname(e.target.value.toLowerCase())}
        id="todos"
        required placeholder="what need to be done"
         />
         <button type="submit">Add</button>
      </form>

   </>
     
      
  
  )
};

export default Forminput;
