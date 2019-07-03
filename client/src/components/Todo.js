import React, {useState, useContext} from 'react';
import AppContext from "../AppContext";

function Todo({todo}) {
  return (<tr>
      {Object.keys(todo).map((objKey, i) => {
          return <td key={i}>{todo[objKey]}</td>
      })}
  </tr>)
}

export default Todo;
