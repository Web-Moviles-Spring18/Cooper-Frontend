import React, { Component } from 'react';
import Menu from "../Menu";
import { Link } from 'react-router-dom';
import url from "../../url";
import axios from "axios";
import SideMenu from "./SideMenu";

export default class AccountProfile extends Component {

  constructor(props) {
    super(props);
    this.state = {
        email : "",
        gender : "",
        name : ""
    }
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

   deleteAccount() {
       axios.get(url.url+"/account/delete", {withCredentials:true})
        .then(res => {
            window.location.replace("/");
        })
        .catch(error => {
            alert(error.response.data);
        })
   }

  sendNewData() {

    const newData = {
      //email: this.state.email,
      name: this.state.name,
      gender: this.state.gender
    }
    
    console.log(newData);

    axios.post(url.url + "/account/profile", { withCredentials: true })
        .then(res => {
            alert(res.data);
        })
        .catch(error => {
            alert(error.response.data);
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
                        <SideMenu option="edit"/>
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
                                            Name
                                            </label>
                                            <p className="control">
                                            <input name="name" placeholder="Your name ..." className="input" type="text" onChange={evt => this.setState({name:evt.target.value})} value={this.state.name}></input>
                                            </p>
                                        </div>
                                        <div className="field"><label className="label bigger-font-label">Gender
                                        </label>
                                            <p className="control">
                                            <input  name="gender" placeholder="Your gender ... [Male, Female, Undefined]" className="input" type="text" onChange={evt => this.setState({gender:evt.target.value})} value={this.state.gender}></input>
                                            </p>
                                        </div>
                                        <div className="columns">
                                            <div className="column">
                                                <div className="field">
                                                    <div className="control">
                                                    <p className="control">
                                                        <button type="submit" className="button is-primary update-button" onClick={evt => this.sendNewData()}>
                                                        UPDATE
                                                        </button>
                                                    </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="column">
                                                <div className="field">
                                                    <div className="control">
                                                    <p className="control">
                                                        <button type="submit" className="button is-danger update-button" onClick={evt => this.deleteAccount()}>
                                                        Delete Account
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