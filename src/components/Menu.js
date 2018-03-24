
import React, {Component} from 'react';
import {Nav, Navbar, NavItem} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class App extends Component {
    render () {
        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                    <Link to="/">Cooper</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                    <NavItem eventKey={1} componentClass={Link} href="/Login" to="/Login">
                        Sign In
                    </NavItem>
                    <NavItem eventKey={2}>
                        Sign Up
                    </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}