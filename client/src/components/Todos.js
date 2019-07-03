import React, {useState, useContext} from 'react';
import AppContext from "../AppContext";
import Todo from "./Todo";

function Todos() {
  const todos = useContext(AppContext);

  return (todos.map((todo, i) => {
      return <Todo todo={todo} key={i} />
  }))
}

export default Todos;
