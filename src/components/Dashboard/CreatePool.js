import React from "react";

import Menu from "../Menu";
import SideMenu from "./SideMenu";
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import url from "../../url";
import axios from "axios";

export default class CreatePool extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            name: "",
            total: 0,
            private: false,
            paymentMethod: "",
            currency: "",
            starts: moment(),
            ends: moment(),
            pictureBase64: "",
            imageFile: "",
            uploaded: false,
            urlUpload: false,
            pictureURL: "",
            imgUpload: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleStartDateChange = this.handleStartDateChange.bind(this);
        this.handleEndDateChange = this.handleEndDateChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleImageChange = this.handleImageChange.bind(this);
        this.handleImageUploadOption = this.handleImageUploadOption.bind(this);
    }

    handleSubmit(evt) {
        evt.preventDefault();
        let data = {
            name: this.state.name,
            total: this.state.total,
            private: this.state.private,
            paymentMethod: this.state.paymentMethod,
            currency: this.state.currency,
            starts: this.state.starts.toDate(),
            ends: this.state.ends.toDate(),
        }
        if(this.state.imgUpload && this.state.uploaded)
            data.picture = this.state.pictureBase64.split(",")[1];
        else if(this.state.urlUpload && this.state.pictureURL != "")
            data.pictureURL = this.state.pictureURL;
        console.log(data);
        var config = { withCredentials: true };
        axios.post(url.url + "/pool", data, config)
            .then(res => {
                alert(res.data);
                this.props.history.push("/Coop/List");
            })
            .catch(error => {
                console.log(error);
            });
    }
     
    handleChange(evt) {
        const target = evt.target;
        const name = target.name;
        let value = null;
        switch(target.type) {
            case "radio":
                if(target.value == "true")
                    value = true;
                else if(target.value == "false")
                    value = false;
                else
                    value = target.value;
                break;
            case "text":
                value = target.value;
                break;
            case "number":
                value = Number(target.value);
                break;
        }
        this.setState({
            [name]: value
        });
    }

    handleStartDateChange(date) {
        this.setState({
            starts: date
        });
    }

    handleEndDateChange(date) {
        this.setState({
            ends: date
        });
    }

    handleImageUploadOption(evt) {
        const target = evt.target;
        const value = target.value;
        if (value == "urlUpload") {
            this.setState({
                urlUpload: true,
                imgUpload: false
            });
        } else {
            this.setState({
                urlUpload: false,
                imgUpload: true
            });
        }
    }

    handleImageChange(evt) {
        evt.preventDefault();

        console.log("Uploading");
        let reader = new FileReader();
        let file = evt.target.files[0];

        reader.onloadend = () => {
            this.setState({
                imageFile: file,
                pictureBase64: reader.result,
                uploaded: true
            }, () => {
                //console.log(this.state.pictureBase64);
                console.log("Uploaded");
            });
        };
        
        reader.readAsDataURL(file);
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
                                        <form onSubmit={this.handleSubmit}>
                                            <div className="field">
                                                <label className="label">Coop Name</label>
                                                <div className="control">
                                                    <input className="input" type="text" name="name" placeholder="Name" onChange={this.handleChange}/>
                                                </div>
                                            </div>
                                            <div className="field">
                                                <label className="label">Coop Amount</label>
                                                <div className="control">
                                                    <input className="input" type="number" name="total" placeholder="Amount" onChange={this.handleChange}/>
                                                </div>
                                            </div>
                                            <div className="columns">
                                                <div className="column is-4">
                                                    <div className="field">
                                                        <label className="label">Coop Privacy</label>
                                                        <div className="control">
                                                            <label className="radio">
                                                                <input type="radio" name="private" value="true" onChange={this.handleChange}/> Private
                                                            </label>
                                                            <label className="radio">
                                                                <input type="radio" name="private" value="false" onChange={this.handleChange}/> Public
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="column is-4">
                                                    <div className="field">
                                                        <label className="label">Coop Payment</label>
                                                        <div className="control">
                                                            <label className="radio">
                                                                <input type="radio" name="paymentMethod" value="cash" onChange={this.handleChange}/> Cash
                                                            </label>
                                                            <label className="radio">
                                                                <input type="radio" name="paymentMethod" value="credit" onChange={this.handleChange}/> Credit Card
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="column is-4">
                                                    <div className="field">
                                                        <label className="label">Coop Currency</label>
                                                        <div className="control">
                                                            <label className="radio">
                                                                <input type="radio" name="currency" value="usd" onChange={this.handleChange}/> USD
                                                            </label>
                                                            <label className="radio">
                                                                <input type="radio" name="currency" value="mxn" onChange={this.handleChange}/> MX
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="columns">
                                                <div className="column is-6">                                                
                                                    <div className="field">
                                                        <label className="label">Start Date</label>
                                                        <div className="control">
                                                            <DatePicker
                                                                className="input"
                                                                selected={this.state.starts}
                                                                onChange={this.handleStartDateChange}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="column is-6">                                                
                                                    <div className="field">
                                                        <label className="label">End Date</label>
                                                        <div className="control">
                                                            <DatePicker
                                                                className="input"
                                                                selected={this.state.ends}
                                                                onChange={this.handleEndDateChange}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="field">
                                                <label className="label">Image Upload</label>
                                                <div className="control">
                                                    <label className="radio">
                                                        <input type="radio" name="imgOption" value="imgUpload" onChange={this.handleImageUploadOption} /> Image Upload
                                                            </label>
                                                    <label className="radio">
                                                        <input type="radio" name="imgOption" value="urlUpload" onChange={this.handleImageUploadOption} /> Image URL
                                                            </label>
                                                </div>
                                            </div>
                                            <div className={this.state.urlUpload ? "" : "is-hidden"}>
                                                <div className="field">
                                                    <label className="label">Img URL</label>
                                                    <div className="control">
                                                        <input className="input" type="text" name="pictureURL" placeholder="URL of the image" onChange={this.handleChange} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={this.state.imgUpload ? "" : "is-hidden"}>
                                                <div className="field">
                                                    <label className="label">Coop Image</label>
                                                    <div className="control">
                                                        <div className="file">
                                                            <label className="file-label">
                                                                <input
                                                                    className="file-input"
                                                                    type="file"
                                                                    name="file"
                                                                    onChange={this.handleImageChange} />
                                                                <span className="file-cta">
                                                                    <span className="file-icon">
                                                                        <i className="fas fa-upload"></i>
                                                                    </span>
                                                                    <span className="file-label">
                                                                        Choose a file…
                                                                    </span>
                                                                </span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="field">
                                                    <img src={this.state.pictureBase64} className={this.state.uploaded ? "" : "is-hidden"} />
                                                </div>
                                            </div>
                                            <div className="field">
                                                <div className="control has-text-centered">
                                                    <button type="submit" value="Submit" className="button is-medium is-primary">
                                                        <i className="fas fa-plus"></i>&nbsp;Create
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
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