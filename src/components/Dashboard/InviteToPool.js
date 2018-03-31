import React, {Component} from "react";

import Menu from "../Menu";
import SideMenu from "./SideMenu";

export default class Main extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
               <Menu types="app"/><br/>
                <div className="section">
                <div className="columns">
                    <aside className="column is-2">
                        <SideMenu />
                    </aside>
                    <main className="column">
                        <div className="level">
                            <div className="level-left">
                            <div className="level-item">
                                <div className="title">Invite to pool</div>
                            </div>
                            </div>
                        </div>
                        <div className="columns is-multiline">
                            <div className="column is-6">
                            <div className="panel">
                                <p className="panel-heading">
                                  Party Pizza
                                </p>
                                <div className="panel-block">
                                <figure className="image is-16x9">
                                    <img src="https://placehold.it/1280x720" />
                                </figure>
                                </div>
                            </div>
                            <div>
                              <form >
                                <button class="SubmitButton">Invite</button>
                              </form>
                            </div>
                            </div>
                            <div className="column is-6">
                              <div className="box">
                                <div className="level">
                                  <div className="level-item">
                                    <div class = "SearchBar">
                                      <form >
                                        <input type = "text" class = "SearchBar" placeholder = "Search..." />
                                      </form>
                                    </div>
                                    <form >
                                      <button>Click</button>
                                    </form>
                                  </div>
                                </div>
                                <div className="level">
                                <div className="level-item">
                                  <p>Get link to invite</p>
                                </div>
                                </div>
                              </div>
                              <div className="box">
                                  <div className="heading">User #1</div>
                                  <div className="level">
                                    <div className="title">Miguel Sanchez</div>
                                      <form >
                                        <input type = "checkbox" class = "Checkbox"/>
                                      </form>
                                  </div>
                              </div>
                              <div className="box">
                                  <div className="heading">User #2</div>
                                  <div className="level">
                                    <div className="title">Marco Robles</div>
                                      <form >
                                        <input type = "checkbox" class = "Checkbox"/>
                                      </form>
                                  </div>


                              </div>
                              <div className="box">
                                  <div className="heading">User #3</div>
                                  <div className="level">
                                    <div className="title">Daniel Jiménez</div>
                                      <form >
                                        <input type = "checkbox" class = "Checkbox"/>
                                      </form>
                                  </div>
                              </div>
                              <div className="box">
                                  <div className="heading">User #4</div>
                                  <div className="level">
                                    <div className="title">Luis Díaz</div>
                                      <form >
                                        <input type = "checkbox" class = "Checkbox"/>
                                      </form>
                                  </div>
                              </div>
                            </div>
                          </div>
                    </main>
                </div>
                </div>
            </div>
        );
    }
}
