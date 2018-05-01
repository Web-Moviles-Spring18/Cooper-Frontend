import React, {Component} from "react";

import Menu from "../Menu";
import SideMenu from "./SideMenu";
import url from "../../url";
import axios from "axios";

class Member extends React.Component {
    constructor(props) {
      super(props);
      /*
        props {
          memberName,
          memberEmail,
          coopId,
          index //index member from list
        }
      */
    }

    sendInvitation() {
      axios.post(url.url+"/pool/"+this.props.coopId+"/invite", {"email":this.props.memberEmail}, {withCredentials: true})
        .then(res => {
            alert(res.data);
        })
        .catch(error => {
          alert(error);
        })
    }

    render() {
      return(
            <div className="box">
                <div className="heading">User #{this.props.index}</div>
                <div className="level">
                  <div className="title">{this.props.memberName}</div>
                  <button className="button is-primary" onClick={evt => this.sendInvitation()}>Invite</button>
                </div>
            </div>
      );
    }
}

export default class Main extends Component{
    constructor(props) {
        super(props);
        this.state = {
          coopId : this.props.match.params.coopId,
          coopData : {},
          membersSearched : [],
          user: ""
        }
    }

    componentWillMount() {

        axios.get(url.url+"/pool/"+this.state.coopId, {withCredentials:true})
            .then(res => {
                this.setState({coopData:res.data.pool, coopMembers:res.data.participants})
            })
    }

    searchForSomeone() {
        axios.get(url.url+"/user/search/"+this.state.user, {withCredentials:true})
            .then(res => {
              console.log(res.data)
                this.setState({membersSearched:res.data})
            })
    }

    

    membersSearchedInfo() {
      return this.state.membersSearched.map((member, index) => 
          <Member coopId={this.state.coopId} memberEmail={member.email} memberName={member.name} memberId={member._id} index={index+1}/>
        )
      
    }

    render() {
        return (
            <div>
               <Menu types="app"/><br/>
                <div className="section">
                <div className="columns">
                    <aside className="column is-2">
                        <SideMenu option="invite"/>
                    </aside>
                    <main className="column">
                        <div className="level">
                            <div className="level-left">
                            <div className="level-item">
                                <div className="title">Invite to Coop</div>
                            </div>
                            </div>
                        </div>
                        <div className="columns is-multiline">
                            <div className="column is-6">
                            <div className="panel">
                                <p className="panel-heading"><b>
                                  {this.state.coopData.name}
                                </b></p>
                                <div className="panel-block">
                                <figure className="image is-16x9">
                                    <img src={this.state.coopData.picture || "https://placehold.it/1280x720"} />
                                </figure>
                                </div>
                            </div>
                            </div>
                            <div className="column is-6">
                              <div className="box">
                                <div className="level">
                                  <div className="level-item">
                                    <div className="SearchBar field">
                                        <input type="text" class="input" placeholder= "Search for User" value={this.state.user} onChange={evt => this.setState({user:evt.target.value})} />
                                    </div>
                                    <div >
                                      <button className="button is-info" onClick={evt => this.searchForSomeone()}>Search</button>
                                    </div>
                                  </div>
                                </div>
                                <div className="level">
                                <div className="level-item">
                                  <p>Search for someone and send their invitations</p>
                                </div>
                                </div>
                              </div>
                              
                              {this.membersSearchedInfo()}
                              
                            </div>
                          </div>
                    </main>
                </div>
                </div>
            </div>
        );
    }
}
