
import React, { Component } from 'react';
import Menu from "../Menu";
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Menu types="app" />
        <section className="hero is-primary is-bold">
          <div className="hero-body">
            <div className="container">
              <div className="columns">
                {/* Column 1 */}
                <div className="column">

                </div>

                {/* Column 2 */}
                <div className="column">
                  <div className="level-item">
                    <div className="content">
                      {/* Profile Picture */}
                      <div className="columns">
                        <div className="column">
                          <figure className="image is-128x128 is-rounded-container">
                            <img src="https://i.imgur.com/e8WEmHC.jpgZ"></img>
                          </figure>
                        </div>
                      </div>
                      {/* User Name */}
                      <div className="columns">
                        <div className="column has-text-centered">
                          <h1>
                            John Smith
                      </h1>
                          <p>
                            Location
                      </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Column 3 */}
                <div className="column">

                </div>
              </div>
              <div className="level-right">
                <a class="button is-rounded">Edit Profile</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}