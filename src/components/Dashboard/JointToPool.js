import React from "react";

import Menu from "../Menu";
import SideMenu from "./SideMenu";
import CoopCard from "./CoopCard";

export default class JoinToPool extends React.Component {

    multipleCoops() {
        const arrCoops = [{"name":"PartyPizza", "imageUrl":"https://placehold.it/1280x720", "total":1549.50, "members":6},
                          {"name":"Coming Tonights", "imageUrl":"https://placehold.it/1280x720" , "total":2560.30, "members":5},
                          {"name":"Clean Code", "imageUrl":"https://placehold.it/1280x720", "total":680, "members":12}];
        return arrCoops.map(coop => 
            <div className="column is-6">
                <CoopCard type="join" name={coop.name} imageURL={coop.imageUrl} total={coop.total} members={coop.members}/>
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
                            <SideMenu option="join"/>
                        </aside>
                        <main className="column">
                            <div className="columns">
                                <div className="column is-half">
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
                                </div>
                                <div className="column is-half">
                                    <div className="level">
                                        <div className="level-left">
                                            <div className="level-item">
                                                <div className="title">Search a Coop</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="field has-addons">
                                        <div class="control is-expanded">
                                            <input class="input" type="text" placeholder="Find a Coop" />
                                        </div>
                                        <div class="control">
                                            <a class="button is-info">
                                            Search
                                            </a>
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