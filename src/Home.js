import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Gallery, GalleryImage } from "react-gesture-gallery";

const images = [
    "images/slide/slide1.jpg",
    "images/slide/slide2.jpg",
    "images/slide/slide3.jpg"
];

export default class Home extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            slideIndex: 0
        };
    }

    render() {
        return (
            <div>
                <div className="slider" id="home">
                    <Gallery
                        index={this.state.slideIndex}
                        onRequestChange={i => {
                            this.setState({ slideIndex: i });
                        }}
                        enableKeyboard={true}
                    >
                        {images.map(image => (
                            <GalleryImage
                                objectFit="cover"
                                key={image}
                                src={image}
                            />
                        ))}
                    </Gallery>
                </div>
                <section className="section_intro" id="intro">
                    <div className="container">
                        <div className="intro">
                            <h2 className="intro-title">Keeper</h2>
                            <div className="intro-content">
                                Quickly note your thoughts and get reminders in
                                the right place and at the right time!
                            </div>
                            <Link className="intro-btn" to="/notes">
                                Get started !
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
