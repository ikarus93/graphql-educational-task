import React, {useState, useContext} from 'react';
import Table from "./components/Table";
import AppContext from "./AppContext";
const todos = [{user: "Farid", task: "Running", due: }]
function App() {
  return (<AppContext.Provider value={""}>
    <Table></Table>
  </AppContext.Provider>)
}

export default App;
