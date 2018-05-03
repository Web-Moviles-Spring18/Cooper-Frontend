import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter, browserHistory} from 'react-router-dom';


import Home from './components/Home';
import Login from './components/Signin';
import AccountProfile from "./components/Dashboard/AccountProfile";
import AccountPassword from "./components/Dashboard/AccountPassword";
import Dashboard from "./components/Dashboard/Main";
import InviteToPool from "./components/Dashboard/InviteToPool";
import EditPoolDetail from "./components/Dashboard/EditPoolDetail.js";
import ChatRoomPage from "./components/Dashboard/ChatRoomPage.js";

class App extends Component {

    render() {
        return (
            <Switch>
                <Route exact path="/" component={ Home } />
                <Route exact path="/SignIn" component={ Login } />
                <Route exact path="/App" component={ Dashboard } />
                <Route exact path="/AccountProfile" component={ AccountProfile } />
                <Route exact path="/AccountPassword" component={ AccountPassword } />
                <Route exact path="/Invite" component={ InviteToPool } />
                <Route exact path="/EditPool" component={ EditPoolDetail } />
                <Route exact path="/ChatRoom" component={ ChatRoomPage } />
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