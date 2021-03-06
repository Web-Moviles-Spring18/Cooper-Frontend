import React from "react";

import Menu from "../Menu";
import SideMenu from "./SideMenu";
import CoopCard from "./CoopCard";
import axios from "axios";
import url from "../../url";

export default class ListCoop extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            coops : [],
            ownerCoops : []
        };
    }

    componentWillMount() {
        
        var config = {  withCredentials: true };
        axios.get(url.url+"/profile/pools", config)
            .then(res => {
                this.setState({coops : res.data});
                console.log(JSON.stringify(res.data));
            })
            .catch(err => {
                if(err.response.status == 401) {
                    window.location.replace("/Unauthorized");
                }
            })

        axios.get(url.url+"/profile/own/pools", config)
            .then(res => {
                let ownPools = res.data;
                let ownership = [];
                for(var i=0; i<ownPools.length; i++) {
                    var poolid = ownPools[i].node._id;
                    ownership.push(poolid);
                }

                this.setState({ownerCoops:ownership});

                /*this.setState({coops : res.data});
                console.log(JSON.stringify(res.data));*/
            })
            .catch(error => {
                console.log(error);
            })
    }
    isOwner(poolId) {
        return (this.state.ownerCoops.indexOf(poolId) != -1)
    }
    multipleCoops() {
        const arrCoops = [{"name":"PartyPizza", "imageUrl":"https://placehold.it/1280x720", "total":1549.50, "members":6},
                          {"name":"Coming Tonights", "imageUrl":"https://placehold.it/1280x720" , "total":2560.30, "members":5},
                          {"name":"Clean Code", "imageUrl":"https://placehold.it/1280x720", "total":680, "members":12}];
        return this.state.coops.map((coop, index) => 
            <div className="column is-3" key={index}>
                <CoopCard owner={this.isOwner(coop.node._id)} coopId={coop.node._id} name={coop.node.name} imageURL={coop.node.picture} total={coop.node.total} members={coop.members} payment={coop.node.paymentMethod}/>
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
                            <SideMenu option="list"/>
                        </aside>
                        <main className="column">
                            <div className="level">
                                <div className="level-left">
                                <div className="level-item">
                                    <div className="title">Coops</div>
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