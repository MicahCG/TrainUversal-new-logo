import React from "react";
import { MDBRow, MDBCol, MDBBadge,   MDBNavLink,  MDBContainer } from "mdbreact";
import "./team.css";
import { MDBAnimation } from "mdbreact";
import { MDBBtn } from "mdbreact";


const Infographic = () => {
  return (
    
    <MDBContainer>
           <section className="my-5 px-5 pb-5 text-center pt-2">
              <h4 className="h1-responsive font-weight-bold ">
              <MDBBadge pill color=" infogcolor">Customized E-Learning Modules</MDBBadge>
              
              </h4>
              <p className="grey-text w-responsive mx-auto mb-5">
              Tell us your needs and we will create your training
              </p>
              
              <MDBRow className='elementinfo'>
                
              <MDBCol style={{borderRadius:"1.25rem"}} xs="4"  className="new mb-md-1 mb-5 mx-1 hoverable py-2 px-2  ">
                <MDBAnimation reveal type="fadeIn" duration="2s">
                <i class="fas fa-user-nurse fa-5x"></i>

                  <h5 className="font-weight-bold mt-4 mb-3">Patient Safety</h5>
                
                  <p className="black-text text-center">
                  Develop conscious awareness while focusing on improving patient experience and safety.
                  </p>
                  </MDBAnimation>
                  
                </MDBCol>
    
                <MDBCol style={{borderRadius:"1.25rem"}} xs="4"  className="new mb-md-1 mb-5 mx-1 hoverable py-2 px-2  ">
                <MDBAnimation reveal type="fadeIn" duration="2s">

                <i class="fas fa-globe-americas fa-5x"></i>


                  <h5 className="font-weight-bold mt-4 mb-3">Global Impact</h5>
                
                  <p className="black-text">
                  Specific E-learning modules on various topics from services in behavioral health to acute and long term care
                  </p>
                </MDBAnimation>  
                </MDBCol>
    
                <MDBCol style={{borderRadius:"1.25rem"}} xs="4"  className="new mb-md-1 mb-5 mx-1 hoverable py-2 px-2  ">
                <MDBAnimation reveal type="fadeIn" duration="2s">

                <i class="fas fa-handshake fa-5x"></i>

                  <h5 className="font-weight-bold mt-4 mb-3">Cultural Humility</h5>
                  
                  <p className="black-text">
                  Embark on a journey of inclusion and health equity by addressing the clinical implications of serving diverse populations
                  </p>
                 </MDBAnimation>
                </MDBCol>
              </MDBRow>

              <MDBRow className='elementinfo'>
                <MDBCol style={{borderRadius:"1.25rem"}} xs="4"  className="new mb-md-1 mb-5 mx-1 hoverable py-2 px-2  ">
                  <MDBAnimation reveal type="fadeIn" duration="2s">
                    <div>
                      <MDBNavLink to="/modules">
                      <MDBBtn  a href='modules.js' color="#5d6271" outline rounded>View Modules</MDBBtn>
                      </MDBNavLink>

                                        
                    </div>
                  </MDBAnimation>
                </MDBCol>
              </MDBRow>

         
              </section>
              </MDBContainer>
  );
};

export default Infographic;
