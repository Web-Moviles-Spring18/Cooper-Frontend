
import React, { Component } from 'react';
import Menu from "../Menu";
import { Link } from 'react-router-dom';
import url from "../../url";
import axios from "axios";


export default class AccountPassword extends Component {

  constructor(props) {
    super(props);
    this.state = {
      coopId: this.props.match.params.coopId,
      userData: {},
      user: ""
    }
  }

  sendNewData(data) {
    console.log("this.state.coopId: ", this.data)

    const newData = {
      email: data.email,
      name: data.name,
      gender: data.gender,
      location: data.location
    }

    axios.post(url.url + "/account/profile", { withCredentials: true })
      .then(res => {
        this.setState({ user: res.data })
      })
    console.log("response: ", this.state.user)
  }

  render() {
    // this.sendNewData("data");
    return (
      <div>
        <Menu types="app" />
        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column is-2">
                <div className="box dashboard-menu-box">
                  <aside className="menu">
                    <ul className="menu-list">
                      <li className="router-link-exact-active router-link-active">
                        <Link to="/AccountProfile">
                          <span >Account &amp; Profile</span>
                        </Link>
                      </li>
                      <li className="router-link-exact-active router-link-active">
                        <Link to="/AccountPassword">
                          <span >Password</span>
                        </Link>
                      </li>
                    </ul>
                  </aside>
                </div>
              </div>
              <div className="column is-10">
                <div className="box">
                  <div className="container is-light">
                    <div className="columns">
                      <div className="column is-6">
                        <p className="subtitle">Account &amp; Profile Settings</p>
                        <form role="form">
                          <div className="field">
                            <label className="label bigger-font-label">
                              New Password
                            </label>
                            <p className="control">
                              <input name="name" placeholder="Your new password ..." className="input" type="text"></input>
                            </p>
                          </div>
                          <div className="field">
                            <div className="control">
                              <p className="control">
                                <button type="submit" className="button is-primary update-button">
                                  CHANGE PASSWORD
                                </button>
                              </p>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className="footer">
          <div className="container">
            <div className="content has-text-centered">
              <p>
                <strong>Cooper</strong> by Cooper S.A. de C.V.
              </p>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}