import React, { useState } from "react";

const Listitem = ({ todo, id, checkComplete, handleUpdateTodos }) => {
  const [update, setUpdate] = useState(false);
  const [updateValue, setUpdatevalue] = useState(todo.name)

  const handleUpdate = () => {
    setUpdate(true);
  };

  const handleSave = id=>{
    setUpdate(false)
    if(updateValue){
      handleUpdateTodos(updateValue,id)
    }else{
      setUpdatevalue(todo.name)
    }
  }


  if (update) {
    return (
      <>
        <li>
          <input
            type="text"
            id="updateValue"
            value={updateValue}
            name="updateValue"
            onChange={e=>setUpdatevalue(e.target.value.toLowerCase())}
          />

          <button onClick={()=>handleSave(id)}>
            save
          </button>
        </li>
      </>
    );
  } else {
    return (
      <>
        <li>
          <label htmlFor={id} className={todo.complete ? "active" : ""}>
            <input
              type="checkbox"
              id={id}
              checked={todo.complete}
              onChange={() => checkComplete(id)}
            />
            {todo.name}
          </label>
          <button disabled={todo.complete} onClick={handleUpdate}>
            update
          </button>
        </li>
      </>
    );
  }
};

export default Listitem;
