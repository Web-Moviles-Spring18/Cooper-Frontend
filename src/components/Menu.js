
import React, {Component} from 'react';
import {Nav, Navbar, NavItem} from 'react-bootstrap';

export default class App extends Component {
    render () {
        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                    <a href="#brand">Cooper</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                    <NavItem eventKey={1} href="#">
                        Sign In
                    </NavItem>
                    <NavItem eventKey={2} href="#">
                        Sign Out
                    </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}