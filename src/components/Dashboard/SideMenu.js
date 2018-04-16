import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class SideMenu extends Component {
    
    render() {
        return (
            <nav className="menu">
                <p className="menu-label">General</p>
                <ul className="menu-list">
                    <li>
                        <Link to="/app" className="is-active">Coops</Link>
                        <ul>
                            <li><Link to="/EditPool">Create</Link></li>
                            <li><a>List</a></li>
                            <li><Link to="/Invite">Join</Link></li>
                        </ul>
                    </li>
                </ul>
                <p className="menu-label">Account</p>
                <ul className="menu-list">
                <li>
                    <a className="">Profile</a>
                    <ul>
                        <li><a>See</a></li>
                        <li><a>Detail</a></li>
                        <li><a>Sign Out</a></li>
                    </ul>
                </li>
                </ul>
            </nav>
        );
    }
}