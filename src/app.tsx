
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from "./components/Login";
import Home from "./components/Home";
 

ReactDOM.render(
    <Router>
        <div>            
            <Route exact path="/" component={ Home } />
            <Route path="/login" component={ Login }/>
        </div>
    </Router>
    , document.getElementById("app"));

