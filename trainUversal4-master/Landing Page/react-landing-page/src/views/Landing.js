import React from "react";
import Button from "components/Button.js";
import Navbar from "components/Navbar.js";
import Footer from "components/Footer.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Infographic from "components/Infographic";
import { MDBAnimation } from "mdbreact";
import {Carousel} from 'react-bootstrap';
import Typewriter from "typewriter-effect";
import img1 from "assets/img/img1.jpg";
import img2 from "assets/img/img2.jpg";



import "./landing.css";

export default class Landing extends React.Component {
  
  render() {
    return (
      <>
        <Navbar />
        <main>
          <section className="pb-20 bg-gray-300 -mt-24">
            <div className="container mx-auto px-4">

              

              <div className = "w-full px-10 pt-5 pb-15 newarea">

             
              
                <div className=" mx-xl-5 py-4  ">

                <div className ="slogan slogans pt-6 row">
                <MDBAnimation reveal type="fadeIn" duration="4s">
                
                <div className="row slogans slogan">
                <img
                      alt="..."
                      src={require("assets/img/logo1.png")}
                      className="shadow-lg rounded-full mx-auto slogan logoimg"
                      style={{ maxWidth: "120px" }}
                    />        
                    </div>
                  </MDBAnimation>
                  </div>

                  <div className="flex flex-wrap row">

<div className="w-full md:w-6/12   ml-auto lg-col-8 newimage ">
  <MDBAnimation reveal type="fadeInLeft" duration="1s">
  
  
    
  </MDBAnimation>
  <div className="row">
                
                
                <div className="lg-col-4 col-12">
                <MDBAnimation reveal type="fadeInRight" duration="1s">

                <h3 className=" text-muted ml-4 mr-4 mt-4 whyourmodules ">
                      <strong>Mission</strong></h3> 
                      <p className = " newsectionabout text-lg font-light text-gray-900"><strong>To cultivate an organizational culture of safety, empathy, and dignity leading to health equity through training and awareness.</strong></p>

                <h3 className="text-muted ml-4 mr-4 mt-4 whyourmodules ">
                      <strong>Vision</strong></h3> 
                      <p className = " newsectionabout text-lg font-light text-gray-900"><strong>To serve as the preferred provider of online training services globally</strong></p>

                </MDBAnimation>

                </div>
           
                
</div>

</div>

<div className="w-full  md:w-4/12 px-3 mx-4 lg-col-9 mb-0   rounded-lg  ">
  <MDBAnimation reveal type="fadeInRight" duration="1s">
     <img
                      alt="..."
                      src={require("assets/img/medconsult.jpeg")}
                      className="max-w-full rounded-lg shadow-lg imagez "
                      style={{ maxWidth: "370px" }}
                    />
  </MDBAnimation>
</div>
</div>








             


           
            </div>
            </div>

              <section>
                <div>
                <div className="row">
                
                

                <div className="flex flex-wrap row whyourmodules">

<div className=" lg-col-12 newimage whyourmodules">
  <MDBAnimation reveal type="fadeInLeft" duration="1s">
  
  


<div className="row whyourmodules mx-4">
  <h3 className = "text-muted ml-4 mr-4 mt-4 whyourmodules col-12">E-Learning Training Modules at Your Fingertips</h3>
  </div>
  
  </MDBAnimation>
</div>

<MDBAnimation reveal type="fadeIn" duration="2s">
<div className="lg-col-9   rounded-lg  ">
  <p className="newsectionabout text-lg font-light text-black-900 mx-5"><strong>TrainUversal is a fully-independent company that provides customizable e-Learning training modules to organizations seeking to provide large scale training to their employees. We specialize in implicit bias, patient safety, infection control, patient experience and other healthcare-related training content. Our online training modules incorporate best practice methodologies to provide users with an interactive training experience designed for maximized learning outcomes.</strong>   </p>
</div>
</MDBAnimation>
</div>

                <div className="row mx-3">

                  <div className="col-12 col-md-4">
                  <img
                    alt="..."
                    className=" rounded-lg shadow-lg imagez"
                    src={require("assets/img/medhelp.jpeg")}
                  />                  </div>
                  <div className=" d-none d-xl-block col-md-4">
                  <img
                    alt="..."
                    className="max-w-full rounded-lg shadow-lg imagez "
                    src={require("assets/img/shutterstock_1563641263.jpg")}
                  />
                  </div>
                  <div className="d-none d-xl-block col-md-4 ">
                  <img
                    alt="..."
                    className="max-w-full rounded-lg shadow-lg imagez"
                    src={require("assets/img/shutterstock_317573531.jpg")}
                  />
                  </div>

                </div>

                <div className="row pt-3 mx-2">
                  <p className=" newsectionabout text-lg font-light text-gray-900"><strong>Our team is comprised of healthcare administrators, clinicians, subject matter experts and training developers, who are uniquely diverse and highly qualified to meet your organization’s training needs. Additionally, we use flexible information and technology systems to deliver online training content that is client-specific and client-driven.</strong> </p>
                </div>

                </div>
               

                

                
                
               

                

                </div>
              </section>

              <div className="flex flex-wrap pt-6 ">
                <div className="w-full md:w-5/12 px-2 mr-auto ml-auto ">
                  <MDBAnimation reveal type="fadeInLeft" duration="1s">
                    <h3 className="text-3xl mb-2 font-semibold leading-normal ">
                      <strong>Professional Design</strong>, <span className = "text-muted">Exceptional Results</span>
                    </h3>
                    <p className="newsectionabout text-lg font-light text-gray-900">
                     <strong> Want to improve the overall experience of your patients?
                      How about universally embedding safety, respect and
                      dignity as part of your organizational identity? In some
                      cases, you may even be interested in a customized
                      training, very specific your organization.</strong>
                    </p>
                    <p className="newsectionabout text-lg font-light text-gray-900">
                      Regardless of your needs, our team of extremely qualified
                      experts at TrainUversal will meet them.
                    </p>
                  </MDBAnimation>
                </div>

                <div className="carouselimg ">
                <Carousel className=" w-full align-middle rounded-t-lg ">
                 <Carousel.Item>
                  <img src={img1} />
                 </Carousel.Item>

                 <Carousel.Item>
                  <img src={img2}/>
                 </Carousel.Item>
                </Carousel>   
                </div>

              </div>

               
            </div>
          </section>

          <section className="relative py-20 ">
            <div
              className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
              style={{ height: "80px", transform: "translateZ(0)" }}
            >
              <svg
                className="absolute bottom-0 overflow-hidden"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="text-white fill-current"
                  points="2560 0 2560 100 0 100"
                ></polygon>
              </svg>
            </div>

            <div className="container mx-auto px-4 commitment">
              <div className="items-center flex flex-wrap commitment">
                <div className="w-full md:w-4/12 ml-auto mr-auto px-4 ">
                  <img
                    alt="..."
                    className="max-w-full rounded-lg shadow-lg  carouselimg"
                    src={require("assets/img/diverse.jpeg")}
                  />
                  
                </div>
                <div className="w-full md:w-6/12 ml-auto mr-auto px-4  ">
                  <div className="md:pr-1">
                    
                    <h3 className="text-3xl font-semibold pt-5 ">
                    <strong>Commitment</strong> <span className = "text-muted">to growth and education</span>
                    </h3>
                    <p className="newsectionabout text-lg font-light text-gray-900">
                     <strong>Our services are meant to positively influence the
                      cultural fabric of your organization thus creating a safe
                      environment for all employees to grow.</strong> 
                    </p>
                    
                    <ul className="list-none mt-6">
                    
                    <div className="ourgoals">
                    <MDBAnimation reveal type="fadeInLeft" duration="1s" >
                      <li className="py-2">
                        <div className="flex items-center pl-5">
                          <div>
                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full  bg-gray-200 mr-3">
                              <i className="fas fa-heartbeat"></i>
                            </span>
                          </div>
                          <div>
                        
                           
                            <h4 className="text-gray-600 ">Transform Lives</h4>
                            
                          </div>
                        </div>
                      </li>
                      </MDBAnimation>
                      
                      <MDBAnimation reveal type="fadeInLeft" duration="1s">
                      <li className="py-2">
                        <div className="flex items-center pl-5">
                          <div>
                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-gray-200 mr-3">
                              <i className="fab fas fa-building"></i>
                            </span>
                          </div>
                          <div>
                            <h4 className="text-gray-600">
                              Impact Organizations
                            </h4>
                          </div>
                        </div>
                      </li>
                      </MDBAnimation>

                      <MDBAnimation reveal type="fadeInLeft" duration="1s">
                      <li className="py-2">
                        <div className="flex items-center pl-5">
                          <div>
                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-gray-200 mr-3">
                              <i className="far fas fa-globe-americas"></i>
                            </span>
                          </div>
                          <div>
                            <h4 className="text-gray-600">Change the World</h4>
                          </div>
                        </div>
                      </li>
                      </MDBAnimation>
                      </div>

                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="w-full md:w-6/12 ml-auto mr-auto px-4 pb-5  ">
                  <div className="md:pr-1">
            <h3 className='whyourmodules'>
            Why our Modules? 
            </h3>
            <p className="newsectionabout text-lg font-light text-gray-900">
           <strong> Our e-Learning modules can be accessed anywhere and anytime on various mobile devices and enable at pace learning, accessibility, and increased productivity. For specification, the modules can be customized to ensure employee optimization and organizational effectiveness through training.
           </strong>
            </p>
            <p className="newsectionabout text-lg font-light text-gray-900">
              <strong>
            Providing e-Learning is an immediate, cost-effective way of delivering training.  Our dynamic modules provide best practice models for interactive learning, improving participants' overall knowledge of the respective topic.  We welcome you to view our various topics below. 
            </strong>
            </p>
          </div>
       </div>


          <Infographic />
          
          

          
          

          <section className="pb-20 relative block bg-gray-900">
            <div
              className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
              style={{ height: "80px", transform: "translateZ(0)" }}
            >
              <svg
                className="absolute bottom-0 overflow-hidden"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="text-gray-900 fill-current"
                  points="2560 0 2560 100 0 100"
                ></polygon>
              </svg>
            </div>

            <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
              <div className="flex flex-wrap text-center justify-center">
                <div className="w-full lg:w-6/12 px-4">
                  <h2 className="text-4xl font-semibold text-white">
                    Build Greatness
                  </h2>
                  <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
                    Your Organization + Our Expertise = Unstoppable Success
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap mt-12 justify-center">
                <div className="w-full lg:w-3/12 px-4 text-center">
                  <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                    <i className="fas fa-medal text-xl"></i>
                  </div>
                  <h6 className="text-xl mt-5 font-semibold text-white">
                    Excellent Services
                  </h6>
                  <p className="mt-2 mb-4 text-gray-500">
                    Our courses are created by industry titans
                  </p>
                </div>
                <div className="w-full lg:w-3/12 px-4 text-center">
                  <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                    <i className="fas fa-poll text-xl"></i>
                  </div>
                  <h5 className="text-xl mt-5 font-semibold text-white">
                    Grow your market
                  </h5>
                  <p className="mt-2 mb-4 text-gray-500">
                    Building a 21st century company culture puts you way ahead
                    of all competition
                  </p>
                </div>
                <div className="w-full lg:w-3/12 px-4 text-center">
                  <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                    <i className="fas fa-lightbulb text-xl"></i>
                  </div>
                  <h5 className="text-xl mt-5 font-semibold text-white">
                    Quick Learn
                  </h5>
                  <p className="mt-2 mb-4 text-gray-500">
                    Our modules are designed to fit around you organization's
                    busy schedules
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="relative block py-24 lg:pt-0 bg-gray-900">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300">
                    <div className="flex-auto p-5 lg:p-10">
                      <h4 className="text-2xl font-semibold">
                        Want to work with us?
                      </h4>
                      <p className="leading-relaxed mt-1 mb-4 text-gray-600">
                        Complete this form and we will get back to you in 24
                        hours. We look forward to serving you!
                      </p>

                      <form action="mailto:giraudelc@gmail.com" method="post" enctype="text/plain">
                      <div className="relative w-full mb-3 mt-8">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="full-name"
                        >
                          Full Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                          placeholder="Full Name"
                          style={{ transition: "all .15s ease" }}
                        />
                      </div>

                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="email"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                          placeholder="Email"
                          style={{ transition: "all .15s ease" }}
                        />
                      </div>

                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="subject"
                        >
                          Subject
                        </label>
                        <input
                          type="text"
                          name="subject"
                          className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                          placeholder="Subject"
                          style={{ transition: "all .15s ease" }}
                        />
                      </div>

                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="message"
                        >
                          Message
                        </label>
                        <textarea
                          rows="4"
                          cols="80"
                          className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                          placeholder="Type a message..."
                          name="message"
                        />
                      </div>
                      <div className="text-center mt-6">
                        <button
                          className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                          type="submit"
                          style={{ transition: "all .15s ease" }}
                        >
                          Send Message
                        </button>
                      </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Button />
        <Footer />
      </>
    );
  }
}
