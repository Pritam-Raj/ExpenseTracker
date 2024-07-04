import React from 'react';
import './History.css';

const History = () => {
    return (
        <div className="dashboard">
            <div className="main-content">
                <div className="header">
                    <div className="title">Dashboard</div>
                    <div className="search-bar">
                        <input type="text" placeholder="Search"/>
                        <i className="icon-search"></i>
                    </div>
                </div>
                <div className="content">
                    <div className="card balance-card">
                        <div className="balance">
                            <h2>Current Balance</h2>
                            <p className="balance-amount">$48,300.00</p>
                            <p className="card-number">**** **** **** 2112</p>
                            <p className="card-holder">Oliver Bennett</p>
                            <p className="expiry-date">03/29</p>
                        </div>
                        <div className="toggle">
                            <input type="checkbox" id="balance-toggle"/>
                            <label htmlFor="balance-toggle" className="slider"></label>
                        </div>
                    </div>
                    <div className="expenses">
                        <div className="expense-card food-drink">
                            <p>Food & drink</p>
                            <p className="amount">$800</p>
                            <div className="progress-bar">
                                <div className="progress" style={{width: '18%'}}></div>
                            </div>
                        </div>
                        <div className="expense-card travel">
                            <p>Travel</p>
                            <p className="amount">$1500</p>
                            <div className="progress-bar">
                                <div className="progress" style={{width: '50%'}}></div>
                            </div>
                        </div>
                        <div className="expense-card workspace">
                            <p>Workspace</p>
                            <p className="amount">$600</p>
                            <div className="progress-bar">
                                <div className="progress" style={{width: '10%'}}></div>
                            </div>
                        </div>
                        <div className="add-expense">
                            <p>+ Add</p>
                        </div>
                    </div>
                    <div className="transactions">
                        <div className="transactions-header">
                            <h3>Last transactions</h3>
                            <a href="#">See all</a>
                        </div>
                        <div className="transaction">
                            <p className="transaction-title">Education</p>
                            <p className="transaction-amount">-$145.00</p>
                            <p className="transaction-time">4 hours ago</p>
                        </div>
                        <div className="transaction">
                            <p className="transaction-title">Gas station</p>
                            <p className="transaction-amount">-$100.00</p>
                            <p className="transaction-time">6 hours ago</p>
                        </div>
                        <div className="transaction">
                            <p className="transaction-title">Shopping</p>
                            <p className="transaction-amount">-$122.00</p>
                            <p className="transaction-time">4:00 p.m.</p>
                        </div>
                        <div className="transaction">
                            <p className="transaction-title">Tickets</p>
                            <p className="transaction-amount">-$80.00</p>
                            <p className="transaction-time">2:00 p.m.</p>
                        </div>
                    </div>
                    <div className="finances">
                        <h3>Finances</h3>
                        <div className="chart">
                            {/* Implement the chart with your preferred charting library */}
                        </div>
                        <div className="chart-controls">
                            <button className="active">1w</button>
                            <button>1m</button>
                            <button>3m</button>
                            <button>1y</button>
                            <button>all</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default History;
