import React, { useState,  } from "react";
import "../AdminDashboard/AdminDashboard.css"
import { Link } from 'react-router-dom';

function User() {
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
                    <li>
                        <a href="/">
                            <i class='bx bxs-shopping-bag-alt' ></i>
                            <span class="text">Orders</span>
                        </a>
                    </li>
                    <li class="active">
                        <Link to="/user">
                            <i class='bx bxs-user'></i>
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
                        <Link to = "" class="logout">
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
                            <h1>Logged in User</h1>
                            <ul class="breadcrumb">

                            </ul>
                        </div>
                    </div>
                    <div class="table-data">
                        <div class="order">
                            <div class="head">
                                <h3>Recent Users</h3>
                                <i class='bx bx-search' ></i>
                                <i class='bx bx-filter' ></i>
                            </div>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Phone Number</th>
                                        <th>Email</th>
                                        <th>Password</th>
                                        <th>Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <p>John</p>
                                        </td>
                                        <td>12345678</td>
                                        <td>abc@gmail.com</td>
                                        <td>123cfe</td>
                                        <td>10/01/2023</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>Doe</p>
                                        </td>
                                        <td>12345678</td>
                                        <td>abc@gmail.com</td>
                                        <td>123cfe</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>Peter</p>
                                        </td>
                                        <td>12345678</td>
                                        <td>abc@gmail.com</td>
                                        <td>123cfe</td>
                                        <td></td>
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

export default User;