import React, { useState } from "react";
import "./AdminDashboard.css"
import { Link } from 'react-router-dom';

function AdminDashboard() {
    const [isActive, setActive] = useState(false);
    const toggleClass = () => {
        setActive(!isActive);
    };
    return (
        <div className="App">

            <section id="sidebar" className={isActive ? 'hide' : null} >
                <h1 class="brand">
                    <i class='bx bxs-cart'></i>
                    <span class="text">ALL MARKET</span>
                </h1>
                <ul class="side-menu top">
                    <li class="active">
                        <Link to="/">
                            <i class='bx bxs-shopping-bag-alt'></i>
                            <span class="text">Orders</span>
                        </Link>
                    </li>
                    <li >
                        <Link to="/users">
                            <i class='bx bxs-bx bxs-user'></i>
                            <span class="text">Users</span>
                        </Link>
                    </li>
                    {/* <li>
                        <a href="#">
                            <i class='bx bxs-doughnut-chart' ></i>
                            <span class="text">Add a Market</span>
                        </a>
                    </li> */}

                </ul>
                <ul class="side-menu">
                    <li>
                    <Link to="" class="logout">
                            <i class='bx bxs-log-out-circle' ></i>
                            <span class="text">Logout</span>
                        </Link>
                        
                    </li>
                </ul>
            </section>

            <section id="content">

                <nav>
                    <i class='bx bx-menu' onClick={toggleClass}  ></i>
                    <form action="#">
                        <div class="form-input">
                            <input type="search" placeholder="Search..." />
                            <button type="button" class="search-btn"><i class='bx bx-search' ></i></button>
                        </div>
                    </form>

                </nav>

                <main>
                    <div class="head-title">
                        <div class="left">
                            <h1>User Orders</h1>
                            <ul class="breadcrumb">

                            </ul>
                        </div>
                        <Link to = "" class="btn-download">
                            <i class='bx bxs-cloud-download' ></i>
                            <span class="text">Download PDF</span>
                        </Link>
                    </div>
                    <div class="table-data">
                        <div class="order">
                            <div class="head">
                                <h3>Recent Orders</h3>
                                <i class='bx bx-search' ></i>
                                <i class='bx bx-filter' ></i>
                            </div>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Items</th>
                                        <th>Payment</th>
                                        <th>Total Price</th>
                                        <th>Date Order</th>
                                        <th>Phone Number</th>
                                        <th>status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <p>John Doe</p>
                                        </td>
                                        <td></td>
                                        <td></td>
                                        <td></td>

                                        <td>01-10-2023</td>
                                        <td>222223333</td>
                                        <td><span class="status completed">Completed</span></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>John Doe</p>
                                        </td>
                                        <td></td>
                                        <td></td>
                                        <td></td>

                                        <td>01-10-2023</td>
                                        <td>11111111122</td>
                                        <td><span class="status pending">Pending</span></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>John Doe</p>
                                        </td>
                                        <td></td>
                                        <td></td>
                                        <td></td>

                                        <td>01-10-2023</td>
                                        <td>111111111</td>
                                        <td><span class="status process">Process</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>
                </main>

            </section>

        </div>
    );
}

export default AdminDashboard;