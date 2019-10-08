import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import SideBar from "./components/sidebar";
import About from "./components/about";
import Projects from "./components/projects"
import Contact from "./components/Contact"
import Pictures from "./components/photos"
import skills from "./components/skills"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SideBar/>
      </header>
      <BrowserRouter>
        <div className="body">
        <br/>
        <Switch>
          {/*for when clicked on dropdown it will go to the page */}
        <Route path="/" component={Home} exact />
        <Route path="/About" component={About}/>
        <Route path="/skills" component={skills}/>
        <Route path="/Projects" component={Projects}/>
        <Route path="/Contact" component={Contact}/>
        <Route path="/photography" component={Pictures}/>
        </Switch>
        </div>
        </BrowserRouter>
    </div>
  );
}

export default App;
