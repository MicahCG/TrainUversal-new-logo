import React from "react";
import Navbar from "components/Navbar.js";
import img1 from "../assets/img/infection_control3.jpg";
import img2 from "../assets/img/implicit_bias.svg";
import img3 from "../assets/img/img2.jpg";
import img4 from "../assets/img/patient_safety.jpg";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import "./modules.css";
import {Carousel} from 'react-bootstrap';
import { MDBRow, MDBCol,  } from "mdbreact";
import {
    MDBNavbar,
    MDBBtn,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavbarToggler,
    MDBCollapse,
    MDBNavItem,
    MDBNavLink,
    MDBContainer,
    MDBMask,
    MDBView,
  } from "mdbreact";

const divStyle = {
    color: 'white',
    maxWidth: '100%',
    fontSize: '80%',
    textAlign: 'center',
    
    
    
}

export default class Module extends React.Component {
    render(){
        return(
            
            <div className="modulesbackground">
            
            <div className="secondnav">
            <div className="row secondnav ">
            
            <div className="col-md-6"></div>

                <div className="col-md-6">
                    <div className="row">
                <div className="col-3"></div>
                <div className="col-12 col-md-3">
                    <MDBNavLink to="!#">
                        <MDBBtn size="sm" outline>
                          Home
                        </MDBBtn>
                    </MDBNavLink>
                </div>

              

               
                    </div>
                </div>
                    
                

                

                </div>
                
            </div> 
                
            <section className ="newbackground">
        <Carousel className="pb-5">
            
        <Carousel.Item>
        <div style={divStyle} class="container "><img src={img1}></img><div class="centered mx-5 " style={{fontSize: 30}}>Infection Control<p class="words" style={{fontSize: 15}}>This training highlights the importance of infection control, addressing the various implications and standard precautions related to improving safety and quality outcomes for patients.</p><a href="https://www.trainuversal.com/" >Learn More</a></div></div>
        </Carousel.Item>

        <Carousel.Item>
        <div style={divStyle} class="container"><img src={img2}></img><div class="centered mx-5" style={{fontSize: 30}}>Implicit Bias<p class="words" style={{fontSize: 15}}>This training provides a comprehensive overview of implicit bias, its implications in healthcare and highlights strategies to become consciously aware and inclusive</p><a href="https://www.trainuversal.com/">Learn More</a></div></div>
        </Carousel.Item>
        
        <Carousel.Item>
        <div style={divStyle} class="container"><img src={img3}></img><div class="centered mx-5" style={{fontSize: 30}}>Patient Experience<p class="words" style={{fontSize: 15}}>This training is focused on the optimization of staff to treat others with respect and dignity, improving hospitality, experience and ultimately patient satisfaction for better HCAHPS scores</p><a href="https://www.trainuversal.com/">Learn More</a></div></div>
        </Carousel.Item>

        <Carousel.Item>
        <div style={divStyle} class="container"><img src={img4}></img><div class="centered mx-5" style={{fontSize: 30}}>Patient Safety<p class="words" style={{fontSize: 15}}>This training will address various tools focusing on the prevention, reduction, reporting and analysis of potentially harmful events that may lead to detrimental effects</p><a href="https://www.trainuversal.com/">Learn More</a></div></div>
        </Carousel.Item>
        </Carousel>

        <div className="extraspace pt-3">
            
           
                <h4>TrainUversal Solutions</h4>
                
                <div className="row px-5 sociallinks">

                <i className="fab fa-twitter px-1"></i>

                <i className="fab fa-linkedin px-1"></i>

                </div>

                <p className='px-3'>Trainuversal Solutions is a New Jersey based company that provides E-learning modules to orginzations to provide large scale training to their employees.</p>

        </div>
        </section>
            </div>
        );
    }
}