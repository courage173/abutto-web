import React, { Component } from "react";
import Slider from "react-slick";
import './slider.css'
import femaleImage from '../../../assets/testimoy_female.svg';
import maleImage from '../../../assets/testimoy_male.svg'

export default class TestimonySlider extends Component {

    handleDisplay() {
        return this.props.data.map((item, i) => (
            <div key={item.name + i} >
                <div className='testimony_container'>
                    <div>
                        <img src={item.image ? item.image : item.sex === 'male' ? maleImage : femaleImage} alt='user' style={{ height: '100px' }} />
                    </div>
                    <div className='testimony_card_text_section'>
                        <h5> {item.name} </h5>
                        <p> {item.message} </p>
                    </div>
                </div>
            </div>
        ))
    }
    render() {
        const settings = {
            dots: false,
            infinite: true,
            arrows: false,
            slidesToShow: 2,
            slidesToScroll: 0.5,
            centerPadding: "60px",
            className: "center",
            autoplay: false,
            speed: 5000,
            autoplaySpeed: 1000,
            cssEase: "linear",
            centerMode: true,
            // variableWidth: true,
            variableHeight: true
        };
        return (
            <div>
                <Slider {...settings}>
                    {this.handleDisplay()}
                </Slider>
            </div>
        );
    }
}