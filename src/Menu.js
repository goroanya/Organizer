import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Menu extends Component {
    
    render() {
        return (
            <header className="header">
                <div className="container">
                    <div className="header__inner">
                        <Link className="header__logo" to="/">
                            Keeper
                        </Link>
                        <nav className="nav">
                            <Link className="nav__link" to="/">
                                Home
                            </Link>
                            <div className="dropdown">
                                <Link className="nav__link" to="/notes">
                                    Notes
                                </Link>
                                <div className="dropdown-content">
                                    <Link className="dropdown-item" to="/notes">
                                        Past
                                    </Link>
                                    <Link className="dropdown-item" to="/notes">
                                        Future
                                    </Link>
                                </div>
                            </div>

                            <Link className="nav__link" to="/about">
                                About
                            </Link>
                            <Link className="nav__link" to="/contacts">
                                Contacts
                            </Link>
                        </nav>
                    </div>
                </div>
            </header>
        );
    }
}
