import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter, browserHistory} from 'react-router-dom';
//import {Provider} from 'react-redux';
//import store from './store/index';

import Home from './components/Home';
import Login from './components/Signin';
import Dashboard from "./components/Dashboard/Main";
import InviteToPool from "./components/Dashboard/InviteToPool";
import ListPools from "./components/Dashboard/ListPools";
import JoinToPool from "./components/Dashboard/JointToPool";
import CreatePool from "./components/Dashboard/CreatePool";
import EditPoolDetail from "./components/Dashboard/EditPoolDetail.js";
import ChatRoomPage from "./components/Dashboard/ChatRoomPage.js";
import CoopDetail from './components/Dashboard/CoopDetail';

class App extends Component {
    //<!--<Route exact path="/ChatRoom" component={ ChatRoomPage } />--> <Provider store={store} >
    render() {
        return (
            
                <Switch>
                    <Route exact path="/" component={ Home } />
                    <Route exact path="/SignIn" component={ Login } />
                    <Route exact path="/App" component={ Dashboard } />
                    <Route exact path="/Coop/Create" component={ CreatePool } />
                    <Route exact path="/Coop/List" component={ ListPools } />
                    <Route exact path="/Coop/List/:coopId" component={ CoopDetail } />
                    <Route exact path="/Coop/Join" component={ JoinToPool } />
                    <Route exact path="/Coop/Edit" component={ EditPoolDetail } />
                    <Route exact path="/Coop/Invite/:coopId" component={ InviteToPool } />
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