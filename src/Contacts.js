import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Contacts extends Component {
    render() {
        return (
            <div>
                <footer className="footer">
                    <div className="container">
                        <div className="section_header">
                            <h3 className="section_subtitle">Write to us</h3>
                            <h2 className="section_title">Contacts</h2>
                        </div>
                        <div className="footer_inner">
                            <div className="footer_col footer_col--first">
                                <div className="footer_logo">Keeper</div>
                                <div className="footer_text">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat. Duis aute irure
                                    dolor in reprehenderit in voluptate velit
                                    esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non
                                    proident, sunt in culpa qui officia deserunt
                                    mollit anim id est laborum.
                                </div>

                                <div className="footer_social">
                                    <div className="footer_social-header">
                                        <b>15k</b> followers
                                    </div>
                                    <div className="footer_social-content">
                                        Follow Us:
                                        <a
                                            href="https://uk-ua.facebook.com/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <i className="fab fa-facebook-square" />
                                        </a>
                                        <a
                                            href="https://www.instagram.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <i className="fab fa-instagram" />
                                        </a>
                                        <a
                                            href="https://twitter.com/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <i className="fab fa-twitter" />
                                        </a>
                                        <a
                                            href="https://www.youtube.com/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <i className="fab fa-youtube" />
                                        </a>
                                    </div>
                                </div>

                                <div
                                    className="subscribe"
                                    action="/"
                                    method="get"
                                >
                                    <input
                                        className="subscribe_input"
                                        type="email"
                                        name="email"
                                        placeholder="Your Email..."
                                    />
                                    <button
                                        className="subscribe_button"
                                        type="button"
                                    >
                                        Subscribe
                                    </button>
                                </div>
                            </div>

                            <div className="footer_col footer_col--second">
                                <div className="footer_title">Blogs</div>

                                <div className="blogs">
                                    <div className="blogs_item">
                                        <img
                                            className="blogs_img"
                                            src="images/blog/1.jpg"
                                            alt="blog1"
                                        />
                                        <div className="blogs_content">
                                            <Link
                                                className="blogs_title"
                                                to="/contacts"
                                            >
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit, sed
                                            </Link>
                                            <div className="blogs_date">
                                                June 9, 2019
                                            </div>
                                        </div>
                                    </div>

                                    <div className="blogs_item">
                                        <img
                                            className="blogs_img"
                                            src="images/blog/2.jpg"
                                            alt="blog2"
                                        />
                                        <div className="blogs_content">
                                            <Link
                                                className="blogs_title"
                                                to="/contacts"
                                            >
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit, sed
                                            </Link>
                                            <div className="blogs_date">
                                                Feb 10, 2019
                                            </div>
                                        </div>
                                    </div>

                                    <div className="blogs_item">
                                        <img
                                            className="blogs_img"
                                            src="images/blog/3.jpg"
                                            alt="blog3"
                                        />
                                        <div className="blogs_content">
                                            <Link
                                                className="blogs_title"
                                                to="/contacts"
                                            >
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit, sed
                                            </Link>
                                            <div className="blogs_date">
                                                Dec 22, 2018
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="footer_col footer_col--third">
                                <div className="footer_title">
                                    General Contact
                                </div>
                                <div className="contacts-content">
                                    <div className="contacts_item">
                                        <b>Toll-Free:</b> 888-968-6822
                                    </div>
                                    <div className="contacts_item">
                                        <b>Phone:</b> 044 204 9113
                                    </div>
                                    <div className="contacts_item">
                                        <b>Fax:</b> 732-367-2313
                                    </div>
                                    <div className="contacts_item">
                                        <b>Email:</b> fpm_pzks@gmail.com
                                    </div>
                                    <div className="contacts_item">
                                        <b>Schedule:</b> Monday - Thursday 1:15
                                        AM to 9:00 PM ET | Friday 8:00 AM to
                                        9:00 PM ET
                                    </div>
                                    <div className="contacts_item">
                                        <b>Location:</b> Polytechnic street,
                                        14-A, building. №15, Kyiv, 03056
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                <section className="section">
                    <div className="container">
                        <div className="section_header">
                            <h3 className="section_subtitle">
                                Where to find us
                            </h3>
                            <h2 className="section_title">Our location</h2>
                        </div>
                    </div>
                </section>

                <section className="section section_map">
                    <div className="container">
                        <div className="map">
                            <iframe
                                className="map"
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d635.1647300749141!2d30.4565398!3d50.4474535!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce9d7d09216f%3A0xd4e0abc33e65f9a6!2z0KTQsNC60YPQu9GM0YLQtdGCINC_0YDQuNC60LvQsNC00L3QvtGXINC80LDRgtC10LzQsNGC0LjQutC4INCd0KLQo9CjICLQmtCf0IYi!5e0!3m2!1suk!2sua!4v1561109291734!5m2!1suk!2sua"
                                frameBorder="0"
                                title="google maps"
                            />
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
