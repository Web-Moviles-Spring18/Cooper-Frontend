import React, { Component } from 'react';
import Menu from "../Menu";
import { Link } from 'react-router-dom';
import url from "../../url";
import axios from "axios";
import SideMenu from "./SideMenu";


export default class AccountPassword extends Component {

  constructor(props) {
    super(props);
    this.state = {
      password :"",
      confirmPassword : ""
    }
  }

  changePassword() {

    const newPass = {
        "password": this.state.password,
        "confirmPassword": this.state.confirmPassword
    }

    console.log(JSON.stringify(newPass));
    axios.post(url.url + "/account/password", newPass, { withCredentials: true })
      .then(res => {
            alert(res.data);
      })
      .catch(error => {
          alert(error.response.data);
      })
  }

  componentWillMount() {
      axios.get(url.url+"/account", { withCredentials: true })
        .then(res => {})
        .catch(err => {
            if(err.response.status == 401) {
                window.location.replace("/Unauthorized");
            }
        })
  }

  render() {
    // this.sendNewData("data");
    return (
      <div>
        <Menu types="app" /><br/>
            <div className="section">
                <div className="columns">
                    <aside className="column is-2">
                        <SideMenu option="editPassword"/>
                    </aside>
                        <main className="column">
                        <section className="section">
                        <div className="container">
                            <div className="columns">
                            <div className="column is-10">
                                <div className="box">
                                <div className="container is-light">
                                    <div className="columns">
                                    <div className="column is-6">
                                        <p className="subtitle">Account &amp; Profile Settings</p>
                                        <div className="field">
                                            <label className="label bigger-font-label">
                                            New Password
                                            </label>
                                            <p className="control">
                                            <input type="password" onChange={evt => this.setState({password:evt.target.value})} value={this.state.password} name="name" placeholder="Your new password ..." className="input" ></input>
                                            </p>
                                        </div>
                                        <div className="field">
                                            <label className="label bigger-font-label">
                                            Confirm Password
                                            </label>
                                            <p className="control">
                                            <input type="password" onChange={evt => this.setState({confirmPassword:evt.target.value})} value={this.state.confirmPassword} name="name" placeholder="Confirm your new password ..." className="input"></input>
                                            </p>
                                        </div>
                                        <div className="field">
                                            <div className="control">
                                            <p className="control">
                                                <button type="submit" className="button is-primary update-button" onClick={evt => this.changePassword()}>
                                                    Change Password
                                                </button>
                                            </p>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </section>
                        </main>
                    </div>
                </div>
      </div>
    );
  }
}