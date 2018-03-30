
import React, { Component } from 'react';
import Menu from "./Menu";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Menu types="home" />

        <section className="section">
          {/* About */}
          <section className="hero is-bold">
            <div className="hero-body">
              <div className="container is-fluid">
                <div className="columns">
                  {/* Hero Body */}
                  <div className="column is-6">
                    <div className="content">
                      <h1 className="title">
                        What is Cooper?
                  </h1>
                      <h4 className="subtitle">
                        Cooper is the best way to <strong> share and collect </strong> money from friends and family!
                  </h4>
                      <p>
                        Wether you're spliting the check for a pizza, the the movies or even a weekend trip,
                          with Cooper you can send out a request for any amount and get rid of all the hassles
                </p>
                    </div>
                  </div>
                  {/* Hero Image */}
                  <div className="column is-6">
                    <figure className="image is-2by1">
                      <img src="https://bulma.io/images/placeholders/640x320.png"></img>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* How-To */}
          <section className="hero is-medium is-bold">
            <div className="hero-body">
              <div className="container is-fluid">
                <div className="columns">
                  {/* Hero Image */}
                  <div className="column is-6">
                    <figure className="image is-2by1">
                      <img src="https://bulma.io/images/placeholders/640x320.png"></img>
                    </figure>
                  </div>
                  {/* Hero Body */}
                  <div className="column is-6">
                    <div className="content">
                      <h1 className="title">
                        How does it work?
                  </h1>
                      <h4 className="">
                        Step 1:
                      </h4>
                      <p> Create a request.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </div >
    );
  }
}