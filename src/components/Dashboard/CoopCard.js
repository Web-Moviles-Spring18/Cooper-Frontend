import React from "react";
import { Route, Link } from "react-router-dom";
import CoopDetail from "./CoopDetail";
import axios from "axios";
import url from "../../url";

export default class CoopCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            coopId : this.props.coopId
        }
    }

    joinPool() {
        axios.get(url.url+"/pool/accept/63", {withCredentials:true})
            .then(res => {
                alert(res.data);
                window.location.replace("/Coop/List/"+this.state.coopId)
                //this.props.history.push("/Coop/List/"+this.state.coopId);
            })
            .catch(err => {
                alert(err.response.data);
            })
    }

    joinPublicPool() {
        axios.get(url.url+"/join/"+this.props.invite, {withCredentials:true})
            .then(res => {
                alert(res.data);
                window.location.replace("/Coop/List");
                //window.location.replace("/Coop/List/"+this.state.coopId)
                //this.props.history.push("/Coop/List/"+this.state.coopId);
            })
            .catch(err => {
                alert(err.response.data);
            })
        
    }

    handleSubmit() {
        if(this.props.type == "join") {
            return (
                <a onClick={evt => this.joinPool()} className="button is-success is-fullwidth">
                    Join
                </a>
            );
        } else if(this.props.type == "joinPublic") {
            return (
                <a onClick={evt => this.joinPublicPool()} className="button is-success is-fullwidth">
                    Join
                </a>
            );
            
        } else {
            return (
                <Link to={"/Coop/List/"+this.state.coopId} className="button is-success is-fullwidth">
                    See
                </Link>
            );
        }
    }

    render() {
        return (
            <div className="panel">
                <p className="panel-heading">
                    <div className="level">
                        <div className="level-left">
                            <b>{this.props.name}</b>
                        </div>
                        <div className="level-right">
                            <b className="right">{this.props.owner ? "Owner" : "Member"}</b>
                        </div>
                    </div>
                </p>
                <div className="panel-block">
                    <figure className="image is-16by15">
                        <img src={(this.props.imageURL || "https://placehold.it/1280x720")} width="100" height="100"/>
                    </figure>
                </div>
                <div className="panel-block">
                    <div className="column is-8">
                        <div className="title is-6"><i className="far fa-money-bill-alt"></i> ${this.props.total}</div>
                    </div>
                    <div className="column is-4">
                        <div className="title is-6">{(this.props.payment || "").toUpperCase()}</div>
                    </div>
                </div>
                <div className="panel-block">
                    {this.handleSubmit()}
                </div>
            </div>
        );
    }
}