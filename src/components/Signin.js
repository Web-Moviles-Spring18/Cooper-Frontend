
import React, {Component} from 'react';
import Menu from "./Menu";

import Icon_awesome from "react-fontawesome";

export default class Login extends Component {
    /*<i classNameNameName="fa fa-facebook visible-xs"></i>-->*/
    render () {
        return (
            <div>
                <Menu optionSelected="signin" />
                <section className="hero is-fullheight">
                    <div className="hero-body">
                    <div className="container has-text-centered">
                        <div className="column is-half">
                            <h3 className="title has-text-grey">Sign In</h3>
                            <p className="subtitle has-text-grey">Please login to proceed.</p>
                            <div className="box">
                                <div className="field">
                                    <div className="control">
                                    <input className="input is-medium" type="email" placeholder="Your Email" autofocus="" />
                                    </div>
                                </div>

                                <div className="field">
                                    <div className="control">
                                    <input className="input is-medium" type="password" placeholder="Your Password" />
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="checkbox">
                                    <input type="checkbox" />
                                    &nbsp;Remember me
                                    </label>
                                </div>
                                <button className="button is-block is-info is-large is-fullwidth">Login</button>
                            </div>
                            <p className="has-text-grey">
                                <a href="../">Sign Up</a> &nbsp;·&nbsp;
                                <a href="../">Forgot Password</a> &nbsp;·&nbsp;
                                <a href="../">Need Help?</a>
                            </p>
                            </div>
                        </div>
                        <div className="column is-one-quarter">
                            <button className="button is-success">Test</button>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}