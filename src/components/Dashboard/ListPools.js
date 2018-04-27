import React from "react";

import Menu from "../Menu";
import SideMenu from "./SideMenu";
import CoopCard from "./CoopCard";
import axios from "axios";
import url from "../../config";
export default class ListCoop extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            coops : []
        };
    }

    componentWillMount() {
        console.log("component will mount")
        console.log(url.url+":"+url.port)
        var config = {  
            // Send the client cookies to the server
            /*withCredentials: true,
            headers: {
                'Access-Control-Allow-Credentials' : true,
                "Access-Control-Allow-Origin" : '*'
            } */
        };
        /*var init = { method:"GET", mode: "cors", credentials: 'include', headers : new Headers()};
        fetch("https://raw.githubusercontent.com/MarcoRob/marcorob.github.io/master/friends.json")
            .then(res => {
                console.log("d "+res.body.body);
            })
            .catch(error => {
                console.log("er "+error);
            })*/
        var cookie;
        axios.post("https://cooperapp.me/login", {"email" :"toño@gmail.com","password":"password"})
            .then(res => {
                console.log(res.data);
                console.log("cook" + res.headers.set-cookie);
                //alert(res.data);
                //this.props.history.push("/app");
            })
            .catch(error => {
                console.log(error);
            })
        axios.get("https://cooperapp.me/profile/pools", config)
            .then(res => {
                console.log("d"+res.data);
            })
            .catch(error => {
                console.log(error);
            })
    }
    multipleCoops() {
        const arrCoops = [{"name":"PartyPizza", "imageUrl":"https://placehold.it/1280x720", "total":1549.50, "members":6},
                          {"name":"Coming Tonights", "imageUrl":"https://placehold.it/1280x720" , "total":2560.30, "members":5},
                          {"name":"Clean Code", "imageUrl":"https://placehold.it/1280x720", "total":680, "members":12}];
        return arrCoops.map((coop, index) => 
            <div className="column is-3" key={index}>
                <CoopCard  name={coop.name} imageURL={coop.imageUrl} total={coop.total} members={coop.members}/>
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