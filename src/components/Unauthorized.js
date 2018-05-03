
import React, {Component} from 'react';
import { Router, Link } from 'react-router-dom';
import Menu from "./Menu";
import axios from "axios";
import url from "../url";

export default class Unauthorized extends Component {
    constructor(props) {
        super(props);

    }

    signup() {
        let config = {
            "Content-Type" : "application/json",
            withCredentials: true,
            /*headers: {
                'Access-Control-Allow-Credentials' : true,
                "Access-Control-Allow-Origin" : '*'
            }*/
        }

        /*axios.post(url.url+"/signup", data, config)
            .then(res => {
                alert(res.data);
                this.props.history.push("/Coop/List");
            })
            .catch(error => {
                alert(error.response.data);
            })*/
    }


    render () {
        return (
            <div>
                <Menu optionSelected="signin" types="home"/>
                <section className="hero is-fullheight">
                    <div className="hero-body">
                        <div className="container has-text-centered">
                            <h3 className="title has-text-danger">Unauthorized</h3>
                            <p className="subtitle has-text-grey">Please create your <Link to="/SignUp">account</Link> or <Link to="/SignIn">signin</Link></p>
                        </div>    
                    </div>
                </section>
            </div>
        );
    }
}