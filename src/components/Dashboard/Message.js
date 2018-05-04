import React, { Component } from 'react';

class Message extends Component {
    render() {
        return (
            <div className="box">
                <article className="media">
                    <div className="media-left">
                        <figure className="image is-96x96">
                            <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image" />
                        </figure>
                    </div>

                    <div className="media-content">
                        <div className="content">
                            <p>
                                <strong>{this.props.author}</strong> <small>{this.props.time}</small>
                                <br/>
                                    {this.props.children}
                            </p>
                        </div>
                    </div>
                </article>
            </div>
        );
    }
}

export default Message;