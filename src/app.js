import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter, browserHistory} from 'react-router-dom';


import Home from './components/Home';
import Login from './components/Signin';
import Dashboard from "./components/Dashboard/Main";
import InviteToPool from "./components/Dashboard/InviteToPool";
import CreatePool from "./components/Dashboard/CreatePool";
import EditPoolDetail from "./components/Dashboard/EditPoolDetail.js";
import ChatRoomPage from "./components/Dashboard/ChatRoomPage.js";

class App extends Component {
    //<!--<Route exact path="/ChatRoom" component={ ChatRoomPage } />-->
    render() {
        return (
            <Switch>
                <Route exact path="/" component={ Home } />
                <Route exact path="/SignIn" component={ Login } />
                <Route exact path="/App" component={ Dashboard } />
                <Route exact path="/Coop/Create" component={ CreatePool } />
                <Route exact path="/Coop/Invite" component={ InviteToPool } />
                <Route exact path="/Coop/Edit" component={ EditPoolDetail } />
                
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