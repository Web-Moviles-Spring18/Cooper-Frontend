import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class SideMenu extends Component {
    constructor (props) {
        super(props);
    }
    render() {
        return (
            <nav className="menu">
                <p className="menu-label">General</p>
                <ul className="menu-list">
                    <li>
                        <Link to="/app" className={this.props.option == 'coops' ? "is-active" : ""}>Coops</Link>
                        <ul>
                            <li>
                                <Link to="/Coop/Create" className={this.props.option == 'create' ? "is-active" : ""}>
                                    <i className="fas fa-plus"></i>
                                    &nbsp;Create
                                </Link>
                            </li>
                            <li>
                                <Link to="/Coop/List" className={this.props.option == 'list' ? "is-active" : ""}>
                                    <i className="fas fa-list-ul"></i>
                                    &nbsp;List
                                </Link>
                            </li>
                            <li>
                                <Link to="/Coop/Join" className={this.props.option == 'join' ? "is-active" : ""}>
                                <i className="fas fa-link"></i>
                                    &nbsp;Join
                                </Link>
                            </li>
                        </ul>
                    </li>
                </ul>
                <p className="menu-label">Account</p>
                <ul className="menu-list">
                <li>
                    <a className="">Profile</a>
                    <ul>
                        <li>
                            <a><i className="fas fa-edit"></i>
                                &nbsp;Edit
                            </a>
                        </li>
                        <li>
                            <a><i className="fas fa-sign-in-alt"></i>
                                &nbsp;Sign Out
                            </a>
                        </li>
                    </ul>
                </li>
                </ul>
            </nav>
        );
    }
}