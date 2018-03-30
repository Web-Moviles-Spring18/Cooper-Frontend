
import React, { Component } from 'react';
import Menu from "./Menu";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Menu types="home" />

        <section className="section">
          {/* About */}
          <section className="hero is-medium is-bold">
            <div className="section">
              <div className="content">
                <h1 className="title has-text-centered">
                  What is Cooper?
                  </h1>
              </div>
            </div>
            <div className="container is-fluid">
              <div className="columns">
                {/* Hero Body */}
                <div className="column is-6">
                  <div className="content">
                    <h2 className="">
                      Cooper is the best way to <strong>share and collect</strong> money from friends and family!

                      </h2>
                    <p>Wether you're spliting the check for a pizza, the the movies or even a weekend trip,
                    with Cooper you can send out a request for any amount and get rid of all the hassles.</p>
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
          </section>

          {/* How-To */}
          <section className="hero is-medium is-bold">
            <div className="section">
            <div className="content has-text-centered">
                <div className="title">
                  How does it work?
                  </div>
                  <div className="subtitle">3 easy steps</div>
              </div>
            </div>
            <div className="container is-fluid">
              <div className="columns">
                {/* Hero Image */}
                <div className="column is-4">
                  <figure className="image is-2by1">
                    <img src="https://bulma.io/images/placeholders/640x320.png"></img>
                  </figure>
                  <div className="content">
                    <h4 className="">
                      Create a request
                      </h4>
                  </div>
                </div>
                {/* Hero Body */}
                <div className="column is-4">
                  <figure className="image is-2by1">
                    <img src="https://bulma.io/images/placeholders/640x320.png"></img>
                  </figure>
                  <div className="content">
                    <h4 className="">
                      Send request to your friends
                      </h4>
                  </div>
                </div>
                <div className="column is-4">
                  <figure className="image is-2by1">
                    <img src="https://bulma.io/images/placeholders/640x320.png"></img>
                  </figure>
                  <div className="content">
                    <h4 className="">
                      Split it up!
                      </h4>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Partners */}
          <section className="hero is-medium is-bold">
            <div className="section">
              <div className="content has-text-centered">
                <div className="title">
                  Meet our partners
                  </div>
                  <div className="subtitle">Get special offers from our partners!</div>
              </div>
            </div>
            <div className="container is-fluid">
              <div className="columns">
                {/* Partner 1 */}
                <div className="column is-3">

                  <figure className="image is-2by1">
                    <img src="https://bulma.io/images/placeholders/640x320.png"></img>
                  </figure>
                </div>
                {/* Partner 1 */}
                <div className="column is-3">

                  <figure className="image is-2by1">
                    <img src="https://bulma.io/images/placeholders/640x320.png"></img>
                  </figure>
                </div>
                {/* Partner 1 */}
                <div className="column is-3">

                  <figure className="image is-2by1">
                    <img src="https://bulma.io/images/placeholders/640x320.png"></img>
                  </figure>
                </div>
                {/* Partner 1 */}
                <div className="column is-3">
                  <figure className="image is-2by1">
                    <img src="https://bulma.io/images/placeholders/640x320.png"></img>
                  </figure>

                </div>
              </div>
            </div>
          </section>
        </section>
      </div >
    );
  }
}