import React, {Component} from 'react';

export default class SideMenu extends Component {

    render() {
        return (
            <nav className="menu">
                <p className="menu-label">
                    General
                </p>
                <ul className="menu-list">
                <li><a className="is-active">Pools</a></li>
                <li><a>Customers</a></li>
                </ul>
                <p className="menu-label">
                Administration
                </p>
                <ul className="menu-list">
                <li><a>Team Settings</a></li>
                <li>
                    <a className="">Manage Your Team</a>
                    <ul>
                    <li><a>Members</a></li>
                    <li><a>Plugins</a></li>
                    <li><a>Add a member</a></li>
                    </ul>
                </li>
                <li><a>Invitations</a></li>
                <li><a>Cloud Storage Environment Settings</a></li>
                <li><a>Authentication</a></li>
                </ul>
                <p className="menu-label">
                Transactions
                </p>
                <ul className="menu-list">
                <li><a>Payments</a></li>
                <li><a>Transfers</a></li>
                <li><a>Balance</a></li>
                </ul>
            </nav>
        );
    }
}