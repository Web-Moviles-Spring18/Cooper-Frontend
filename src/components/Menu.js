
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Menu extends Component {
    constructor(props) {
        super(props);
    }
    optionActive(option) {
        if (this.props.optionSelected == option) {
            return true;
        } else {
            return false;
        }
    }
    navbarType(type) {
        if (type == 'app') {
            return (
                <div className="navbar-item title is-6" >
                    <Link to="/SignIn" className={"navbar-item control " + (this.optionActive("signin") ? "is-active" : "")}>
                        Options
                        </Link>
                    <Link to="/SignUp" className={"navbar-item control " + (this.optionActive("signup") ? "is-active" : "")}>
                        Sign Out
                        </Link>
                </div>
            );
        } else if (type == 'home') {
            return (
                <div className="navbar-item title is-6">
                    <Link to="/SignIn" className={"navbar-item control " + (this.optionActive("signin") ? "is-active" : "")}>
                        Sign In
                        </Link>
                    <Link to="/SignUp" className={"navbar-item control button is-success " + (this.optionActive("signup") ? "is-active" : "")}>
                        Sign Up
                        </Link>
                </div>
            );
        }
    }
    render() {
        return (
            <nav className="nav navbar is-fixed-top has-shadow" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <Link className="navbar-item" to="/">
                        <img src="/cooper-icon.png" alt="" width="30" height="40" />
                        <div className="title">&nbsp;Cooper</div>
                    </Link>

                    <div className="navbar-burger">
                        <span>SignIn</span>
                        <span>SignUp</span>
                        <span></span>
                    </div>
                </div>
                <div className="navbar-end" >
                    {this.navbarType(this.props.types)}
                </div>
            </nav>
        );
    }
}

