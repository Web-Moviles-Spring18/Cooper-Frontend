import React from "react";
import Menu from "../Menu";
import SideMenu from "./SideMenu";
import url from "../../url";
import axios from "axios"
import {Link} from "react-router-dom";

export default class CoopDetail extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            coopId : this.props.match.params.coopId,
            coopData : {},
            coopMembers : []
        }
    }

    componentWillMount() {
        console.log("ggggggggggggggggggggggggggg")
        console.log(this.props.match.params)

        axios.get(url.url+"/pool/"+this.state.coopId, {withCredentials:true})
            .then(res => {
                this.setState({coopData:res.data.pool, coopMembers:res.data.participants})
            })
    }

    coopMembersInfo() {
        return this.state.coopMembers.map((member, index) => 
            <div className="box">
                <div className="heading">User #{index+1}</div>
                <div className="level">
                    <div className="level-left title is-4">{member.node.name}</div>
                    <div className="level-right">
                        <div className="level-item level-left">
                            <div className="level-item">
                                <div className="title is-5 has-text-info">${member.relation.debt}</div> <br/>
                            </div>
                            <div className="level-item">
                                <div className="title is-5 has-text-success">${member.relation.paid}</div> 
                            </div>
                        </div>
                    </div>
                </div>
                <div className="heading">{member.node.email}</div>
            </div>
        )
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
                                    <div className="title">{this.state.coopData.name || ""}</div>
                                </div>
                            </div>
                            <div className="level-right">
                                <div className="level-item">
                                    <div className="title"><i className="far fa-money-bill-alt"></i> ${this.state.coopData.total || ""}</div>
                                </div>                                
                            </div>
                        </div>
                        <div className="columns is-multiline">
                            <div className="column is-6">
                              <div className="box">
                                <div className="level level-item level-right">
                                    <div className="title is-4">Coop Information</div>
                                </div>
                                <div className="level">
                                    <div className="level-item level-left">
                                    <div className="level-item">
                                            <div className="title is-5">Payment method</div> 
                                        </div>
                                        <div className="level-item">
                                            <div className="title is-5 is-capitalized has-text-danger">{this.state.coopData.paymentMethod}</div> 
                                        </div>
                                        
                                    </div>
                                </div>
                                <div className="level">
                                    <div className="level-item level-left">
                                        <div className="level-item">
                                            <div className="title is-5">Currency</div> 
                                        </div>
                                        <div className="level-item">
                                            <div className="title is-5 is-uppercase has-text-danger">{this.state.coopData.currency}</div> 
                                        </div>
                                    </div>
                                </div>
                                <div className="level">
                                    <div className="level-item level-left">
                                        <div className="level-item">
                                            <div className="title is-5">Starts</div> 
                                        </div>
                                        <div className="level-item">
                                            <div className="title is-5 is-uppercase has-text-danger">{(this.state.coopData.starts||"").split("T")[0]}</div> 
                                        </div>
                                    </div>
                                </div>
                                <div className="level">
                                    <div className="level-item level-left">
                                        <div className="level-item">
                                            <div className="title is-5">Ends</div> 
                                        </div>
                                        <div className="level-item">
                                            <div className="title is-5 is-uppercase has-text-danger">{(this.state.coopData.ends||"").split("T")[0]}</div> 
                                        </div>
                                    </div>
                                </div>      
                                <div className="level">
                                    <div className="level-item level-left">
                                    <div className="level-item">
                                            <div className="title is-5">Coop Privacy</div> 
                                        </div>
                                        <div className="level-item">
                                            <div className="title is-5 has-text-link">{(this.state.coopData.private) ? "Private" : "Public"}</div>  
                                        </div>
                                        
                                    </div>
                                </div>      
                              </div>
                            </div>
                            <div className="column is-6">
                                <div className="level">
                                    <div className="level-item">
                                        <Link className="button is-link EditButton" to={"/Coop/Invite/"+this.state.coopId}>Invite</Link>
                                    </div>
                                </div>
                                <div className="columns is-multiline">
                                    <div className="column is-12">
                                        {this.coopMembersInfo()}
                                    </div>
                                </div>
                            </div>
                            <div className="column is-6">
                                <div className="panel">
                                    <div className="panel-block">
                                    <figure className="image is-16x9">
                                        <img src={this.state.coopData.picture || "https://placehold.it/1280x720"} />
                                    </figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </main>
                    </div>
                </div>
            </div>
        )
    }

}