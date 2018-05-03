import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter, browserHistory} from 'react-router-dom';
//import {Provider} from 'react-redux';
//import store from './store/index';

import Home from './components/Home';
import Login from './components/Signin';
import SignUp from './components/Signup';
import Dashboard from "./components/Dashboard/Main";
import InviteToPool from "./components/Dashboard/InviteToPool";
import ListPools from "./components/Dashboard/ListPools";
import AccountProfile from "./components/Dashboard/AccountProfile";
import AccountPassword from "./components/Dashboard/AccountPassword";
import JoinToPool from "./components/Dashboard/JointToPool";
import CreatePool from "./components/Dashboard/CreatePool";
import EditPoolDetail from "./components/Dashboard/EditPoolDetail.js";
import ChatRoom from "./components/Dashboard/ChatRoom.js";
import CoopDetail from './components/Dashboard/CoopDetail';
import Unauthorized from "./components/Unauthorized";
class App extends Component {
    //<!--<Route exact path="/ChatRoom" component={ ChatRoomPage } />--> <Provider store={store} >
    render() {
        return (
            
                <Switch>
                    <Route exact path="/" component={ Home } />
                    <Route exact path="/SignIn" component={ Login } />
                    <Route exact path="/SignUp" component={SignUp}/>
                    <Route exact path="/App" component={ Dashboard } />
                    <Route exact path="/Coop/Create" component={ CreatePool } />
                    <Route exact path="/Coop/List" component={ ListPools } />
                    <Route exact path="/Coop/List/:coopId" component={ CoopDetail } />
                    <Route exact path="/Coop/Chat/:coopId" component={ ChatRoom } />
                    <Route exact path="/Coop/Join" component={ JoinToPool } />
                    <Route exact path="/Coop/Edit" component={ EditPoolDetail } />
                    <Route exact path="/Coop/Invite/:coopId" component={ InviteToPool } />
                    <Route exact path="/Account/Profile" component={ AccountProfile } />
                    <Route exact path="/Account/Password" component={ AccountPassword } />
                    <Route exact path="/Unauthorized" component={ Unauthorized } />
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