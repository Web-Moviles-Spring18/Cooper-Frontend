import React, { Component } from "react";

import Menu from "../Menu";
import SideMenu from "./SideMenu";
import url from "../../url";
import axios from "axios";
import { Link } from "react-router-dom";
import Message from "./Message";

class Member extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //coopId : this.props.match.params.coopId,
            // userName: this.props.userName,
            // coopId: this.props.coopId,
            messages: [],
            currentText: "",
            coopName : ""
        }
        this.eachMessage = this.eachMessage.bind(this);
        this.add = this.add.bind(this);
    }

    componentWillMount() {
        axios.get(url.url+"/pool/"+this.props.coopId, {withCredentials:true})
            .then(res => {
                console.log(res.data)
                this.setState({coopName:res.data.pool.name})
            })
    }

    componentDidMount() {
        firebase.database().ref(`${this.props.coopId}/`).on('value', snap => {
            const currentMessages = snap.val();
            if(currentMessages !== null) {
                this.setState ({
                    messages: currentMessages
                })
            }
        })
    }

    add(text, author) {
        let timeStamp = new Date().toLocaleString();
        const newMessage = {
            id: this.state.messages.length,
            message: text,
            authorName: author,
            authorEmail: this.props.userEmail,
            userid: this.props.userId,
            time: timeStamp
        };
        window.firebase.database().ref(`${this.props.coopId}/${newMessage.id}`)
            .set(newMessage);
        /*this.setState(prevState => ({
            messages: [
                ...prevState.messages,
                {
                    id: this.state.messages.length,
                    message: text,
                    author: author,
                    time: timeStamp
                }
            ]
        }))*/
        this._newMessage.value = "";
    }

    update(e) {
        this.setState({ currentText: this._newMessage.value});
    }

    eachMessage(message, i) {
        return (
            <Message key={i} index={i} author={message.author} time={message.time}>
                {message.message}
            </Message>
        );
    }

    render() {
        return (
            <div className="column is-10">
                <section id="chat-title" className="hero is-primary is-outlined">
                    <div className="hero-body">
                        <div className="container">
                            <h1 className="title">{this.state.coopName}</h1>
                            <h1 className="title">Chat Room</h1>
                            <h2 className="subtitle">This is the Coop chat to talk to all members!</h2>
                        </div>
                    </div>
                </section>
                
                <br/>
                <div className="level">
                    <div id="chat-messages" className="container">
                        {this.state.messages.map(this.eachMessage)}
                    </div>
                </div>

                <br />
                <div className="level">
                    <div id="chat-input" className="container">
                        <div className="field is-grouped">
                            <p className="control is-expanded">
                                <input className="input" type="text" ref={(input) => {this._newMessage = input}} 
                                    placeholder="Type your message." onChange={this.update.bind(this)}/>
                            </p>
                            <p className="control">
                                <a className="button is-info" onClick={this.add.bind(this, this.state.currentText, this.props.userName)}>
                                    <span className="icon"><i className="fas fa-paper-plane"></i></span>
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
                <br/>
                <br/>
                <div className="level">
                    <div className="level-item">
                        <Link className="button is-link EditButton" to={"/Coop/List/" + this.props.coopId}>Return to Coop Details</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            coopId: this.props.match.params.coopId,
            userName: ""
        }
    }

    componentWillMount() {

        axios.get(url.url + "/pool/" + this.state.coopId, { withCredentials: true })
            .then(res => {
                this.setState({ coopData: res.data.pool, coopMembers: res.data.participants })
            })
        axios.get(url.url + "/account/", { withCredentials: true })
            .then(res => {
                let resultName = res.data.name == undefined ? res.data.email : res.data.name;
                this.setState({ userName: resultName, userEmail: res.data.email, userId: res.data._id });
            })
    }

    render() {
        return (
            <div>
                <Menu types="app" /><br />
                <div className="section">
                    <div className="columns">
                        <aside className="column is-2">
                            <SideMenu option="invite" />
                        </aside>
                        <main className="column">
                            <Member coopId={this.state.coopId} userName={this.state.userName} userEmail={this.state.userEmail} userId={this.state.userId}/>
                        </main>
                    </div>
                </div>
            </div>
        );
    }
}