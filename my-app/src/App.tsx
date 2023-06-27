import React from 'react';
import './App.css';
import {FactorySide, Header, Supplier, UserTerminal} from "./Components";

/**
 * FactorySide是工厂端
 * Supplier是供应商
 * UserTerminal是用户端
 * @constructor
 */
function App() {
  return (
    <div className="App">
      <Header title={"供应商"} id={"0x123···323"}/>
      <Supplier/>
      <UserTerminal/>
    </div>
  );
}

export default App;
