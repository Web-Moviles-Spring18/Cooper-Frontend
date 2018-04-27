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
                        <SideMenu option="edit"/>
                    </aside>
                    <main className="column">
                        <div className="level">
                            <div className="level-left">
                            <div className="level-item">
                                <div className="title">Edit pool detail</div>
                            </div>
                            </div>
                        </div>
                        <div className="columns is-multiline">
                            <div className="column is-6">
                              <div className="box">
                                <div className="level">
                                  <div className="level-item">
                                    <div class = "textBox">
                                      <form >
                                        <input type = "text" class = "SearchBar" placeholder = "Pool name" />
                                      </form>
                                    </div>
                                  </div>
                                </div>
                                <div className="level">
                                  <div className="level-item">
                                    <div class = "textBox">
                                      <form >
                                        <input type = "text" class = "textBox" placeholder = "Description" />
                                      </form>
                                    </div>
                                  </div>
                                </div>
                                <div className="level">
                                  <div className="level-item">
                                    <div class = "Box">
                                      <form >
                                        <input type = "text"  placeholder = "Amount" />
                                      </form>
                                    </div>
                                    <div class = "Box">
                                      <form >
                                        <input type = "text"  placeholder = "End Date" />
                                      </form>
                                    </div>
                                  </div>
                                </div>
                                <div className="level">
                                  <div className="level-item">
                                    <div>
                                      <form>
                                        <button className="EditButton">Save</button>
                                      </form>
                                    </div>
                                  </div>
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
