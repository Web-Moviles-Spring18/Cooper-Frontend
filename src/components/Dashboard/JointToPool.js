import React from "react";

import Menu from "../Menu";
import SideMenu from "./SideMenu";
import CoopCard from "./CoopCard";

import axios from "axios";
import url from "../../url";

export default class JoinToPool extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            coopsToJoin : [],
            coopsSearch : [],
            searchPoolName : ""
        }
    }
    componentWillMount() {
        axios.get(url.url + "/profile/pools/invites")
            .then(res => {
                this.setState({coopsToJoin:res.data});
            })
            
    }

    searchCoops() {
        axios.get(url.url + "/pool/search/"+this.state.searchPoolName)
            .then(res => {
                this.setState({coopsSearch:res.data})
            })
    }

    listCoopsToJoin() {
        const arrCoops = [{"name":"PartyPizza", "imageUrl":"https://placehold.it/1280x720", "total":1549.50, "members":6},
                          {"name":"Coming Tonights", "imageUrl":"https://placehold.it/1280x720" , "total":2560.30, "members":5},
                          {"name":"Clean Code", "imageUrl":"https://placehold.it/1280x720", "total":680, "members":12}];
        return this.state.coopsToJoin.map(coop => 
            <div className="column is-6">
                <CoopCard type="join" name={coop.node.name} imageURL={coop.node.image} total={coop.node.total} />
            </div>
            
        );
    }
    
    listCoopsSearch() {
        const arrCoops = [{"name":"PartyPizza", "imageUrl":"https://placehold.it/1280x720", "total":1549.50, "members":6},
                          {"name":"Coming Tonights", "imageUrl":"https://placehold.it/1280x720" , "total":2560.30, "members":5},
                          {"name":"Clean Code", "imageUrl":"https://placehold.it/1280x720", "total":680, "members":12}];
        return this.state.coopsSearch.map(coop => 
            <div className="column is-6">
                <CoopCard type="join" name={coop.node.name} imageURL={coop.node.image} total={coop.node.total} />
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
                                        {this.listCoopsToJoin()}
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
                                    <div className="field has-addons">
                                        <div className="control is-expanded">
                                            <input className="input" type="text" placeholder="Find a Coop" onChange={evt => this.setState({searchPoolName:evt.target.value})} value={this.state.searchPoolName}/>
                                        </div>
                                        <div className="control">
                                            <a className="button is-info" onClick={evt => this.searchCoops(evt)}>
                                            Search
                                            </a>
                                        </div>
                                        <div className="columns is-multiline">
                                            { this.listCoopsSearch() }
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