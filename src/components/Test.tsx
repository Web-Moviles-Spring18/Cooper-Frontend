import * as React from "react";
import { Button } from 'react-bootstrap'
import { ButtonToolbar } from 'react-bootstrap';


export default class Test extends React.Component<any,any>{

    public render() {
        return (
            <ButtonToolbar>
                <Button>Default</Button>
                <Button bsStyle="primary">Primary</Button>
                <Button bsStyle="success">Success</Button>
                <Button bsStyle="info">Info</Button>
                <Button bsStyle="warning">Warning</Button>
                <Button bsStyle="danger">Danger</Button>
                <Button bsStyle="link">Link</Button>
            </ButtonToolbar>
        );
    }
}