import React from "react";
import { Redirect, withRouter } from "react-router-dom";
import Navbar from './Navbar';
import LandingPageImage from './LandingPageImage';
import { Button } from 'semantic-ui-react'

const Home = props => {
  return (
    <div>
    <Navbar/>
        <LandingPageImage/>
        <Button basic color='green'>
          Get Started
        </Button>
        <Button basic color='green'>
          Login
        </Button>
    </div>
  );
};

export default withRouter(Home);
