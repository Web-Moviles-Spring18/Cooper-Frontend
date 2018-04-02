import React, { Component } from 'react';
import Message from './Message';

class ChatRoom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [
                /*{
                    id: 0,
                    message: "Hello John!",
                    author: "Lisa Ren",
                    time: "March 31st, 18:27"
                },
                {
                    id: 1,
                    message: "What's up Lisa, just doing some homework",
                    author: "John Cook",
                    time: "March 31st, 18:29"
                }*/
            ],
            currentText: ""
        }
        this.eachMessage = this.eachMessage.bind(this);
        this.add = this.add.bind(this);
    }

    componentDidMount() {
        firebase.database().ref('messages/').on('value', snap => {
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
            author: author,
            time: timeStamp
        };
        window.firebase.database().ref(`messages/${newMessage.id}`)
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
            <div>
                <section id="chat-title" className="hero is-dark">
                    <div className="hero-body">
                        <div className="container">
                            <h1 className="title">ChatRoom</h1>
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
                                <a className="button is-info" onClick={this.add.bind(this, this.state.currentText, "John Cook")}>
                                    <span className="icon"><i className="fas fa-paper-plane"></i></span>
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ChatRoom;