
import React, {Component} from 'react';
import { Router } from 'react-router-dom';
import Menu from "./Menu";
import axios from "axios";
import url from "../url";

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username : "",
            password : ""
        }
    }

    login() {
        let data = {
            "email" : this.state.username,
            "password" : this.state.password
        }
        let config = {
            "Content-Type" : "application/json",
            withCredentials: true,
            /*headers: {
                'Access-Control-Allow-Credentials' : true,
                "Access-Control-Allow-Origin" : '*'
            }*/
        }
        console.log(url.url);
        axios.post(url.url + "/login", data, config)
            .then(res => {
                alert(res.data);
                this.props.history.push("/Coop/List");
            })
            .catch(error => {
                alert(error.response.data);
            })
    }

    updateLoginUsername(evt) {
        this.setState({
            username : evt.target.value
        })
    }
    updateLoginPassword(evt) {
        this.setState({
            password : evt.target.value
        })
    }
    render () {
        return (
            <div>
                <Menu optionSelected="signin" types="home"/>
                <section className="hero is-fullheight">
                    <div className="hero-body">
                    <div className="container has-text-centered">
                        <h3 className="title has-text-grey">Sign In</h3>
                        <p className="subtitle has-text-grey">Please login to proceed.</p>
                        <div className="columns">
                            <div className="column is-one-third">
                            </div>
                            <div className="column is-one-third">
                                <div className="box">
                                    <div className="field">
                                        <div className="control">
                                        <input className="input is-medium" onChange={evt => this.updateLoginUsername(evt)} value={this.state.username} type="email" placeholder="Your Email" />
                                        </div>
                                    </div>

                                    <div className="field">
                                        <div className="control">
                                        <input className="input is-medium" onChange={evt => this.updateLoginPassword(evt)} value={this.state.password} type="password" placeholder="Your Password" />
                                        </div>
                                    </div>
                                    <div className="field">
                                        <label className="checkbox">
                                        <input type="checkbox" />
                                        &nbsp;Remember me
                                        </label>
                                    </div>
                                    <button className="button is-block is-info is-large is-fullwidth" onClick={evt => this.login(evt)}>Login</button>
                                </div>
                            </div>
                            </div>

                                <p className="has-text-grey">
                                    <a href="../">Sign Up</a> &nbsp;·&nbsp;
                                    <a href="../">Forgot Password</a> &nbsp;·&nbsp;
                                    <a href="../">Need Help?</a>
                                </p>
                        </div>
                        
                    </div>
                </section>
            </div>
        );
    }
}