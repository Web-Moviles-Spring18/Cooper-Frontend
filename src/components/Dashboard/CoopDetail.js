import React from "react";


export default class CoopDetail extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            coopId : this.props.params.coopId
        }
    }

    render() {
        return (
            <div>
                
                <h1>Coop Id {this.state.coopId} s</h1>

            </div>
        )
    }

}