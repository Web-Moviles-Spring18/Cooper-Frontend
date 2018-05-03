import React from "react";
import Menu from "../Menu";
import SideMenu from "./SideMenu";
import url from "../../url";
import axios from "axios"
import {Link} from "react-router-dom";
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

class MemberUser extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userId : this.props.userId,
            isOwner : this.props.isOwner,
            editMode : false,
            memberOwner : this.props.memberOwner,
            debt: "",
            paid: ""
        }
    }

    updatePoolMembersInfo() {
        var paid = this.state.paid || 0;
        var debt = this.state.debt || 0;
        this.setState({paid:paid, debt:debt});
        var data = {"userEmail":this.props.email, "userInfo" : {"paid":this.state.paid, "debt":this.state.debt}};
        axios.post(url.url+"/pool/"+this.props.coopId, data, {withCredentials:true})
            .then(res => {
                alert(res.data)
                this.setState({editMode:false});
            })
            .catch(error => {
                alert(error.response.data);
            })
    }

    editModeUserAmount(debt, paid) {
        if(!this.state.editMode) {
            return (
                <div className="level-item level-left">
                    <div className="level-item">
                        <div className="title is-5 has-text-info">${debt}</div> <br/>
                    </div>
                    <div className="level-item">
                        <div className="title is-5 has-text-success">${paid}</div> 
                    </div>
                </div>
            );

        } else {
            return (
                <div className="level-item level-left">
                    <div className="level-item">
                        <input value={this.state.debt} onChange={evt => this.setState({debt:evt.target.value})} className="input is-info is-small" placeholder={"Pending: " + debt}></input> 
                    </div>
                    <div className="level-item">
                        <input value={this.state.paid} onChange={evt => this.setState({paid:evt.target.value})} className="input is-success is-small" placeholder={"Paid: " + paid}></input> 
                    </div>
                </div>
            );
        }
    }
    editModeAction() {
        if(this.state.editMode) {
            this.setState({editMode:false})
        } else {
            this.setState({editMode:true})
        }
    }

    render() {
        return (
            <div className="box">
                <div className="heading level-left">User #{this.props.index}</div>
                <div className={"heading level-right"}>
                   <a onClick={evt => this.editModeAction()}>{(this.props.isOwner) ? "Edit" : "" }</a>
                </div>
                <div className="level">
                    <div className="level-left title is-4">{this.props.name}</div>
                    <div className="level-right">
                        {this.editModeUserAmount(this.props.debt, this.props.paid)}    
                    </div>
                </div>
                <div className="heading level-left">{this.props.email}</div>
                <div className={"heading level-right"}>
                    <b className={((this.props.memberOwner)) ? "has-text-danger" : ""}>
                        {(this.props.memberOwner) ? "Owner" : "Member"}
                    </b>
                </div>
                <div className={"heading level-left " +(this.state.editMode ? "" : "is-hidden") }>
                    <button className="button is-primary" onClick={evt => this.updatePoolMembersInfo()}>Guardar</button>
                </div>
            </div>
        );
    }
}

export default class CoopDetail extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            coopId : this.props.match.params.coopId,
            coopData : {},
            coopMembers : [],
            userId : "",
            isOwner : false,
            editMode : false,

            starts : "",
            ends : "",
            privacy : ""
        }
        this.handleStartDateChange = this.handleStartDateChange.bind(this);
        this.handleEndDateChange = this.handleEndDateChange.bind(this);
    }

    componentWillMount() {
        axios.get(url.url+"/pool/"+this.state.coopId, {withCredentials:true})
            .then(res => {
                this.setState({coopData:res.data.pool, coopMembers:res.data.participants})
            })

        axios.get(url.url+"/account/", {withCredentials:true})
            .then(res => {
                this.setState({userId:res.data._id})
            })

        axios.get(url.url+"/profile/own/pools", {withCredentials:true})
            .then(res => {
                let ownPools = res.data;
                let ownership = [];
                for(var i=0; i<ownPools.length; i++) {
                    var poolid = ownPools[i].node._id;
                    var isOwner = (poolid == this.props.match.params.coopId);
                    this.setState({isOwner:isOwner});
                }
               
            })
            .catch(error => {
                console.log(error);
            })
    }

    

    /*updateMemberInfo(email, ) {

    }*/

    coopMembersInfo() {
        return this.state.coopMembers.map((member, index) => 
            /*<div className="box">
                <div className="heading level-left">User #{index+1}</div>
                <div className={"heading level-right"}>
                   <a onClick={evt => (!this.state.editMode ? this.setState({editMode:true}) : this.setState({editMode:false}))}>{(this.state.isOwner) ? "Editar" : "" }</a>
                </div>
                <div className="level">
                    <div className="level-left title is-4">{member.node.name}</div>
                    <div className="level-right">
                        {this.editModeUserAmount(member.relation.debt, member.relation.paid)}    
                    </div>
                </div>
                <div className="heading level-left">{member.node.email}</div>
                <div className={"heading level-right"}>
                    <b className={(this.state.isOwner && this.state.userId==member.node._id) ? "has-text-danger" : ""}>
                        {(this.state.isOwner && this.state.userId==member.node._id) ? "Owner" : "Member"}
                    </b>
                </div>
                <div className={"heading level-left " +(this.state.editMode ? "" : "is-hidden") }><button className="button is-primary">Guardar</button></div>
            </div>*/
            <MemberUser name={member.node.name} userId={member.node._id} 
                        memberOwner={(this.state.isOwner && this.state.userId==member.node._id)} 
                        isOwner={this.state.isOwner} email={member.node.email} index={index+1} 
                        debt={member.relation.debt} paid={member.relation.paid} coopId={this.state.coopId}/>
        )
    }

    editModeAction() {
        if(this.state.editMode) {
            this.setState({editMode:false});
        } else {
            this.setState({editMode:true});
        }
    }

    handleChange(evt) {
        const target = evt.target;
        const name = target.name;
        let value = null;
        switch(target.type) {
            case "radio":
                if(target.value == "true")
                    value = true;
                else if(target.value == "false")
                    value = false;
                else
                    value = target.value;
                break;
        }
        this.setState({
            [name]: value
        });
    }

    handleStartDateChange(date) {
        this.setState({
            starts: date
        });
    }

    handleEndDateChange(date) {
        this.setState({
            ends: date
        });
    }

    editModeCoopInfo() {
        if(this.state.editMode) {
            return(<div>
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
                                <div className="field">
                                    <div className="control">
                                        <DatePicker
                                            className="input"
                                            selected={this.state.starts}
                                            onChange={this.handleStartDateChange}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="level">
                        <div className="level-item level-left">
                            <div className="level-item">
                                <div className="title is-5">Ends</div> 
                            </div>
                            <div className="level-item">
                                <div className="field">
                                    <div className="control">
                                        <DatePicker
                                            className="input"
                                            selected={this.state.ends}
                                            onChange={this.handleEndDateChange}
                                        />
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </div>      
                <div className="level">
                    <div className="level-item level-left">
                        <div className="level-item">
                            <div className="title is-5">Coop Privacy</div> 
                        </div>
                        <div className="level-item">
                            <div className="control">
                                <label className="radio">
                                    <input type="radio" name="privacy" value="true" onChange={evt => this.setState({privacy:true})}/> Private
                                </label>
                                <label className="radio">
                                    <input type="radio" name="privacy" value="false" onChange={evt => this.setState({privacy:true})}/> Public
                                </label>
                            </div>  
                        </div>
                    </div>
                </div>     
            </div>)
        } else {
           return (<div>
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
            </div>);
        }
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
                                    <div className="title is-1">{this.state.coopData.name || ""}</div>
                                </div>
                            </div>
                            <div className="level-right">
                                <div className="level-item">
                                    <div className="title is-1"><i className="far fa-money-bill-alt"></i> ${this.state.coopData.total || ""}</div>
                                </div>                                
                            </div>
                        </div>
                        <div className="columns is-multiline">
                            <div className="column is-6">
                                <div className="box">
                                    <div className="level level-item level-right">
                                        <div className="title is-4">Coop Information</div>
                                        <a className="heading" onClick={evt => this.editModeAction()}>&nbsp;&nbsp;&nbsp;Edit</a>
                                    </div>
                                    {this.editModeCoopInfo()} 
                                </div>
                                <div className="column">
                                    <div className="panel">
                                        <div className="panel-block">
                                        <figure className="image is-16x9">
                                            <img src={this.state.coopData.picture || "https://placehold.it/1280x720"} />
                                        </figure>
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
                                    <div className="level">
                                        <div className="level-item">
                                            <Link className="button is-link EditButton" to={"/Coop/Chat/" + this.state.coopId}>ChatRoom</Link>
                                        </div>
                                    </div>
                                <div className="columns is-multiline">
                                    <div className="column is-12">
                                        {this.coopMembersInfo()}
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