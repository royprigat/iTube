import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Hero from '../Hero/Hero';
import Carousel from '../Carousel/Carousel';
import './Home.css';

class Home extends Component {

  render() {
      const { firebase } = this.props;
    return (
      <div>
        <Navbar firebase={firebase}/>
        <Hero firebase={firebase}/>
        <Carousel />
      </div>
    );
  }
}

export default Home;