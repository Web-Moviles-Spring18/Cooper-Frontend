import React from "react";

import Menu from "../Menu";
import SideMenu from "./SideMenu";

export default class JoinToPool extends React.Component {

    multipleCoops() {
        const arrCoops = [{"name":"PartyPizza", "imageUrl":"https://placehold.it/1280x720"},
                          {"name":"Coming Tonights", "imageUrl":"https://placehold.it/1280x720"},
                          {"name":"Clean Code", "imageUrl":"https://placehold.it/1280x720"}];
        return arrCoops.map(coop => 
            <div className="column is-3">
                <div className="panel">
                    <p className="panel-heading">
                        <b>{coop.name}</b>
                    </p>
                    <div className="panel-block">
                        <figure className="image is-16x9">
                            <img src={coop.imageUrl} />
                        </figure>
                    </div>
                    <div className="panel-block">
                        <button className="button is-success is-fullwidth">
                            Join
                        </button>
                    </div>
                </div>
            </div>
        );
    }
    render() {
        return (
            <div>
               <Menu types="app"/><br/>
                <div className="section">
                    <div className="columns">
                        <aside className="column is-2">
                            <SideMenu option="invite"/>
                        </aside>
                        <main className="column">
                            <div className="level">
                                <div className="level-left">
                                <div className="level-item">
                                    <div className="title">Coops to Join</div>
                                </div>
                                </div>
                            </div>
                            <div className="columns is-multiline">
                                {this.multipleCoops()}
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        );
    }
}