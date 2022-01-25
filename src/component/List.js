import React , {useContext} from 'react';
import Listitem from './Listitem';
import { DataContext } from './Dataprovider';


const List = () => {

const [todos, setTodos]= useContext(DataContext);

const switchComplete = id =>{
  const newTodos = [...todos] 
   newTodos.forEach((todo, index)=>{
    if(index === id){
      todo.complete = !todo.complete
    }
   })
   setTodos(newTodos)
  
}

const handleUpdateTodos = (updateValue, id)=>{
  const newTodos = [...todos]
  newTodos.forEach((todo, index)=>{
    if(index === id){
      todo.name = updateValue
    }
  })
  setTodos(newTodos)
}






  return (
  
  <>
      <ul>
      {
        todos.map((todo, index) => (
          <Listitem todo={todo} key={index} id={index}
            checkComplete={switchComplete}
            handleUpdateTodos={handleUpdateTodos}
          />
        ))
      }
      </ul>
  </>


  )
};

export default List;
