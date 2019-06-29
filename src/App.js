import React, {Component} from 'react';
import "./App.css"
import Users from "./components/Users.js"
import Navbar from "./components/Navbar.js"

import {BrowserRouter, Switch, Route } from "react-router-dom";

const Tasks = () => <section>tareas</section>

class App extends Component {


  render() {
      return (
        <section className="App">

          <BrowserRouter>
          	<Navbar />	
          	<Switch>
          		<Route exact path="/" component={Users} />
              <Route exact path="/tareas" component={Tasks} />
              <Route exact path="/usuarios" component={Users} />
          	</Switch>	

          </BrowserRouter>
        </section>
      );
    }
}

export default App;
