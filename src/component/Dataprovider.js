import React, {useState, useEffect, createContext} from 'react';

export const DataContext = createContext();


const Dataprovider = (props) => {

const [todos, setTodos] = useState([])

useEffect(()=>{
  const todoStore = JSON.parse(localStorage.getItem('todoStore'))
  if(todoStore) 
  setTodos(todoStore)
},[])


useEffect(()=>{
  localStorage.setItem('todoStore', JSON.stringify(todos))
}, [todos])

  return (
<>
<DataContext.Provider value={[todos, setTodos]}>
    {props.children}
</DataContext.Provider>

</>
    


  )
};

export default Dataprovider;
