import React from "react";
import { Route, Link } from "react-router-dom";
import CoopDetail from "./CoopDetail";

export default class CoopCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            coopId : this.props.coopId
        }
    }

    render() {
        return (
            <div className="panel">
                <p className="panel-heading">
                    <b>{this.props.name}</b>
                </p>
                <div className="panel-block">
                    <figure className="image is-16x9">
                        <img src={(this.props.imageURL || "https://placehold.it/1280x720")} />
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
                    <Link to={`/Coop/List/`+this.props.coopId} component={CoopDetail} className="button is-success is-fullwidth">
                        {this.props.type == "join" ? "Join" : "See"}
                    </Link>
                </div>
            </div>
        );
    }
}