import React, { Component } from "react";
import Card from "../Card/Card";
import Slider from "react-slick";
import "./Carousel.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

class Carousel extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 4000,
      autoplaySpeed: 3000,
      pauseOnHover: true,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="carousel">
        <h3>Top Classes</h3>
        <Slider {...settings}>
          <Card color={"yellow"}/>
          <Card color={"green"}/>
          <Card color={"blue"}/>
          <Card color={"yellow"}/>
          <Card color={"yellow"}/>
          <Card color={"blue"}/>
        </Slider>
      </div>
    );
  }
}

export default Carousel;