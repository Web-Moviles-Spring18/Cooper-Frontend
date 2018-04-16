import React from "react";

import Menu from "../Menu";
import SideMenu from "./SideMenu";
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

export default class CreatePool extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
          startDate: moment()
        };
        this.handleChange = this.handleChange.bind(this);
    }
     
    handleChange(date) {
        this.setState({
            startDate: date
        });
    }
    render() {
        return (
            <div>
                <Menu types="app"/><br/>
                <div className="section">
                    <div className="columns">
                        <aside className="column is-2">
                            <SideMenu option="create"/>
                        </aside>
                        <main className="column">
                            <div className="level">
                                <div className="level-left">
                                <div className="level-item">
                                    <div className="title">Create Coop</div>
                                </div>
                                </div>
                            </div>
                            <div className="columns is-multiline">
                                <div className="column is-12">
                                    <div className="box">
                                        <div class="field">
                                            <label class="label">Coop Name</label>
                                            <div class="control">
                                                <input class="input" type="text" placeholder="Name" />
                                            </div>
                                        </div>
                                        <div class="field">
                                            <label class="label">Coop Amount</label>
                                            <div class="control">
                                                <input class="input" type="text" placeholder="Amount" />
                                            </div>
                                        </div>
                                        <div className="columns">
                                            <div className="column is-4">
                                                <div class="field">
                                                    <label class="label">Coop Privacy</label>
                                                    <div class="control">
                                                        <label class="radio">
                                                            <input type="radio" name="question" /> Private
                                                        </label>
                                                        <label class="radio">
                                                            <input type="radio" name="question" /> Public
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="column is-4">
                                                <div class="field">
                                                    <label class="label">Coop Payment</label>
                                                    <div class="control">
                                                        <label class="radio">
                                                            <input type="radio" name="question" /> Cash
                                                        </label>
                                                        <label class="radio">
                                                            <input type="radio" name="question" /> Credit Card
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="column is-4">
                                                <div class="field">
                                                    <label class="label">Coop Currency</label>
                                                    <div class="control">
                                                        <label class="radio">
                                                            <input type="radio" name="question" /> USD
                                                        </label>
                                                        <label class="radio">
                                                            <input type="radio" name="question" /> MX
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="columns">
                                            <div className="column is-6">                                                
                                                <div class="field">
                                                    <label class="label">Start Date</label>
                                                    <div class="control">
                                                        <DatePicker
                                                            className="input"
                                                            selected={this.state.startDate}
                                                            onChange={this.handleChange}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="column is-6">                                                
                                                <div class="field">
                                                    <label class="label">End Date</label>
                                                    <div class="control">
                                                        <DatePicker
                                                            className="input"
                                                            selected={this.state.startDate}
                                                            onChange={this.handleChange}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="field">
                                            <div class="control has-text-centered">
                                                <button class="button is-medium is-primary">
                                                    <i class="fas fa-plus"></i>&nbsp;Create
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        );
    }
}