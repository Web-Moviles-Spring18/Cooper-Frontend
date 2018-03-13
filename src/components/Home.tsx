import * as React from "react";
import { Button } from 'react-bootstrap'
import { ButtonToolbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Menu from "./Menu"

export default class Home extends React.Component<any,any>{

    public render() {
        return (
            <div>
                <Menu />
                <ButtonToolbar>                
                    <Button>Default</Button>
                    <Button bsStyle="primary">Primary</Button>
                    <Button bsStyle="success">Success</Button>
                    <Button bsStyle="info">Info</Button>
                    <Button bsStyle="warning">Warning</Button>
                    <Button bsStyle="danger">Danger</Button>
                    <Link to="/login">Link</Link>
                </ButtonToolbar>
            </div>
        );
    }
}