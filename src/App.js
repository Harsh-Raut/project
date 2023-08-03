import React from "react";
import {Switch,Route} from "@material-ui/core";
import './App.css';
import Login from "./Login";
import Signup from "./Signup";


function App() {
  return (
    <Switch>
      <Route path="/Login" component={Login}/>
      <Route path="/Signup" component={Signup}/>
    </Switch>
         
  );
}

export default App;
