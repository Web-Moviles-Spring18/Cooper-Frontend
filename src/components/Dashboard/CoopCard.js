import React from "react";

export default class CoopCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="panel">
                <p className="panel-heading">
                    <b>{this.props.name}</b>
                </p>
                <div className="panel-block">
                    <figure className="image is-16x9">
                        <img src={this.props.imageURL} />
                    </figure>
                </div>
                <div className="panel-block">
                    <div className="column is-8">
                        <div className="title is-5"><i class="far fa-money-bill-alt"></i> ${this.props.total}</div>
                    </div>
                    <div className="column is-4">
                        <div className="title is-5"><i class="fas fa-user-circle"></i> x {this.props.members}</div>
                    </div>
                </div>
                <div className="panel-block">
                    <button className="button is-success is-fullwidth">
                        {this.props.type == "join" ? "Join" : "See"}
                    </button>
                </div>
            </div>
        );
    }
}