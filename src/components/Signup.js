
import React, {Component} from 'react';
import { Router } from 'react-router-dom';
import Menu from "./Menu";
import axios from "axios";
import url from "../url";

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email : "",
            name : "",
            password : "",
            confirmPassword: ""
        }
    }

    signup() {
        let data = {
            "email" : this.state.email,
            "name" : this.state.name,
            "password" : this.state.password,
            "confirmPassword" : this.state.confirmPassword

        }
        let config = {
            "Content-Type" : "application/json",
            withCredentials: true,
            /*headers: {
                'Access-Control-Allow-Credentials' : true,
                "Access-Control-Allow-Origin" : '*'
            }*/
        }
        console.log(data);

        axios.post(url.url+"/signup", data, config)
            .then(res => {
                alert(res.data);
                this.props.history.push("/Coop/List");
            })
            .catch(error => {
                alert(error.response.data);
            })
    }

    updateSignUpEmail(evt) {
        this.setState({
            email : evt.target.value
        })
    }

    updateSignUpName(evt) {
        this.setState({
            name : evt.target.value
        })
    }

    updateSignUpPassword(evt) {
        this.setState({
            password : evt.target.value
        })
    }

    updateSignUpConfirmPassword(evt) {
        this.setState({
            confirmPassword : evt.target.value
        })
    }


    render () {
        return (
            <div>
                <Menu optionSelected="signin" types="home"/>
                <section className="hero is-fullheight">
                    <div className="hero-body">
                    <div className="container has-text-centered">
                        <h3 className="title has-text-grey">Sign Up</h3>
                        <p className="subtitle has-text-grey">Please create your account.</p>
                        <div className="columns">
                            <div className="column is-one-third">
                            </div>
                            <div className="column is-one-third">
                                <div className="box">
                                    <div className="field">
                                        <div className="control">
                                        <input className="input is-normal" onChange={evt => this.updateSignUpEmail(evt)} value={this.state.email} type="email" placeholder="Email" />
                                        </div>
                                    </div>
                                    <div className="field">
                                        <div className="control">
                                        <input className="input is-normal" onChange={evt => this.updateSignUpName(evt)} value={this.state.name}  type="text" placeholder="Name" />
                                        </div>
                                    </div>
                                    <div className="field">
                                        <div className="control">
                                        <input className="input is-normal" onChange={evt => this.updateSignUpPassword(evt)} value={this.state.password} type="password" placeholder="Password" />
                                        </div>
                                    </div>
                                    <div className="field">
                                        <div className="control">
                                        <input className="input is-normal" onChange={evt => this.updateSignUpConfirmPassword(evt)} value={this.state.confirmPassword}  type="password" placeholder="Confirm Password" />
                                        </div>
                                    </div>
                                    <div className="field">
                                        <label className="checkbox">
                                        <input type="checkbox" />
                                         &nbsp; I agree with the <a href="https://cooperapp.me/privacypolicy.htm">terms and conditions</a>
                                        </label>
                                    </div>
                                    <button className="button is-block is-info is-large is-fullwidth" onClick={evt => this.signup(evt)}>Signup</button>
                                </div>
                            </div>
                            <div className="column is-one-third">
                            </div>
                        </div>

                                <p className="has-text-grey">
                                    <a href="../">Need Help?</a>
                                </p>
                        </div>
                        
                    </div>
                </section>
            </div>
        );
    }
}