
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Todo from "./Pages/Todo";


function App(){
  return(
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element = {<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/todo" element={<Todo/>}/>
      </Routes>
    </div>
  )
}

export default App;
