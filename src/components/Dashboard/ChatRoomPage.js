import React, { Component } from "react";

import Menu from "../Menu";
import SideMenu from "./SideMenu";
import ChatRoom from "../ChatRoom";

export default class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Menu types="app" /><br />
                <div className="section">
                    <div className="columns">
                        <aside className="column is-2">
                            <SideMenu />
                        </aside>
                        <main className="column">
                            <div className="column is-10">
                                <ChatRoom />
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        );
    }
}