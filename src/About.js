import React, { Component } from "react";

export default class About extends Component {

    render() {
        
        return (
            <section className="section" id="about">
                <div className="container">
                    <div className="section_header">
                        <h3 className="section_subtitle">What we do</h3>
                        <h2 className="section_title">About us</h2>
                        <div className="section_text">
                            <p>
                                Sed ut perspiciatis unde omnis iste natus error
                                sit voluptatem accusantium doloremque
                                laudantium, totam rem aperiam, eaque ipsa quae
                                ab illo inventore veritatis et quasi architecto
                                beatae vitae dicta sunt explicabo. Nemo enim
                                ipsam voluptatem quia voluptas sit aspernatur
                                aut odit aut fugit, sed quia consequuntur magni
                                dolores eos qui ratione voluptatem sequi
                                nesciunt. Neque porro quisquam est, qui dolorem
                                ipsum quia dolor sit amet
                            </p>
                        </div>
                    </div>

                    <div className="about">
                        <div className="about_item">
                            <div className="about_img">
                                <img
                                    src="images/about/1.jpg"
                                    alt="about"
                                />
                            </div>
                        </div>
                        <div className="about_item">
                            <div className="about_img">
                                <img
                                    src="images/about/2.jpg"
                                    alt="about"
                                />
                            </div>
                        </div>
                        <div className="about_item">
                            <div className="about_img">
                                <img
                                    src="images/about/3.jpg"
                                    alt="about"
                                />
                            </div>
                        </div>
                        <div className="about_item">
                            <div className="about_img">
                                <img
                                    src="images/about/4.jpg"
                                    alt="about"
                                />
                            </div>
                        </div>
                        <div className="about_item">
                            <div className="about_img">
                                <img
                                    src="images/about/6.jpg"
                                    alt="about"
                                />
                            </div>
                        </div>
                        <div className="about_item">
                            <div className="about_img">
                                <img
                                    src="images/about/8.jpg"
                                    alt="about"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
