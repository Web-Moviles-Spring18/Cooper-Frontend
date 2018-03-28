import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter, browserHistory} from 'react-router-dom';


import Home from './components/Home';
import Login from './components/Signin';
import Dashboard from "./components/Dashboard/Main";

class App extends Component {

    render() {
        return (            
            <Switch>
                <Route exact path="/" component={ Home } />
                <Route exact path="/SignIn" component={ Login } />
                <Route exact path="/App" component={ Dashboard } />
            </Switch>
        )
    }
}

ReactDOM.render(
    <BrowserRouter history={ browserHistory }>
       <App />
    </BrowserRouter>
  , document.getElementById('app'));

module.hot.accept();
