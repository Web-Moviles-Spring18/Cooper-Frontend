import React, {Component} from "react";

import Menu from "../Menu";
import SideMenu from "./SideMenu";

export default class Main extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
               <Menu types="app"/><br/>
                <div className="section">
                <div className="columns">
                    <aside className="column is-2">
                        <SideMenu />
                    </aside>                    
                    <main className="column">
                        <div className="level">
                            <div className="level-left">
                            <div className="level-item">
                                <div className="title">Coops</div>
                            </div>
                            </div>
                            <div className="level-right">
                            <div className="level-item">
                                <button type="button" className="button is-small">
                                    {new Date().toLocaleString()}
                                </button>
                            </div>
                            </div>
                        </div>
                    
                        <div className="columns is-multiline">
                            <div className="column">
                            <div className="box">
                                <div className="heading">Top Seller Total</div>
                                <div className="title">56,950</div>
                                <div className="level">
                                <div className="level-item">
                                    <div className="">
                                    <div className="heading">Sales $</div>
                                    <div className="title is-5">250,000</div>
                                    </div>
                                </div>
                                <div className="level-item">
                                    <div className="">
                                    <div className="heading">Overall $</div>
                                    <div className="title is-5">750,000</div>
                                    </div>
                                </div>
                                <div className="level-item">
                                    <div className="">
                                    <div className="heading">Sales %</div>
                                    <div className="title is-5">25%</div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="column">
                            <div className="box">
                                <div className="heading">Revenue / Expenses</div>
                                <div className="title">55% / 45%</div>
                                <div className="level">
                                <div className="level-item">
                                    <div className="">
                                    <div className="heading">Rev Prod $</div>
                                    <div className="title is-5">30%</div>
                                    </div>
                                </div>
                                <div className="level-item">
                                    <div className="">
                                    <div className="heading">Rev Serv $</div>
                                    <div className="title is-5">25%</div>
                                    </div>
                                </div>
                                <div className="level-item">
                                    <div className="">
                                    <div className="heading">Exp %</div>
                                    <div className="title is-5">45%</div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="column">
                            <div className="box">
                                <div className="heading">Feedback Activity</div>
                                <div className="title">78% &uarr;</div>
                                <div className="level">
                                <div className="level-item">
                                    <div className="">
                                    <div className="heading">Positive</div>
                                    <div className="title is-5">1560</div>
                                    </div>
                                </div>
                                <div className="level-item">
                                    <div className="">
                                    <div className="heading">Negative</div>
                                    <div className="title is-5">368</div>
                                    </div>
                                </div>
                                <div className="level-item">
                                    <div className="">
                                    <div className="heading">Pos/Neg %</div>
                                    <div className="title is-5">77% / 23%</div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="column">
                            <div className="box">
                                <div className="heading">Orders / Returns</div>
                                <div className="title">75% / 25%</div>
                                <div className="level">
                                <div className="level-item">
                                    <div className="">
                                    <div className="heading">Orders $</div>
                                    <div className="title is-5">425,000</div>
                                    </div>
                                </div>
                                <div className="level-item">
                                    <div className="">
                                    <div className="heading">Returns $</div>
                                    <div className="title is-5">106,250</div>
                                    </div>
                                </div>
                                <div className="level-item">
                                    <div className="">
                                    <div className="heading">Success %</div>
                                    <div className="title is-5">+ 28,5%</div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        
                        <div className="columns is-multiline">
                            <div className="column is-6">
                            <div className="panel">
                                <p className="panel-heading">
                                Expenses: Daily - $700
                                </p>
                                <div className="panel-block">
                                <figure className="image is-16x9">
                                    <img src="https://placehold.it/1280x720" />
                                </figure>
                                </div>
                            </div>
                            </div>
                            <div className="column is-6">
                            <div className="panel">
                                <p className="panel-heading">
                                Refunds: Daily - $200
                                </p>
                                <div className="panel-block">
                                <figure className="image is-16x9">
                                    <img src="https://placehold.it/1280x720" />
                                </figure>
                                </div>
                            </div>
                            </div>
                            <div className="column is-6">
                            <div className="panel">
                                <p className="panel-heading">
                                Something
                                </p>
                                <div className="panel-block">
                                <figure className="image is-16x9">
                                    <img src="https://placehold.it/1280x720" />
                                </figure>
                                </div>
                            </div>
                            </div>
                            <div className="column is-6">
                            <div className="panel">
                                <p className="panel-heading">
                                Something Else
                                </p>
                                <div className="panel-block">
                                <figure className="image is-16x9">
                                    <img src="https://placehold.it/1280x720" />
                                </figure>
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