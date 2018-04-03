import React, {Component} from 'react';

export default class SideMenu extends Component {

    render() {
        return (
            <nav className="menu">
                <p className="menu-label">General</p>
                <ul className="menu-list">
                    <li>
                        <a className="is-active">Coops</a>
                        <ul>
                        <li><a>Create</a></li>
                        <li><a>List</a></li>
                        <li><a>Join</a></li>
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