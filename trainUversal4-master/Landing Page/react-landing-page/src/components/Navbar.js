import React from "react";
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
import "./Navbar.css";
import Typewriter from "typewriter-effect";
import img2 from "assets/img/img2.jpg";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  render() {
    return (
      <div>
        <header>
          <MDBView src="https://i.ibb.co/Yj9hJRc/medtech.jpg">
            <MDBNavbar
              style={{ backgroundColor: "#000000b3" }}
              dark
              expand="md"
            >
              <MDBContainer>
                <MDBNavbarBrand href="/">
                  <div class="flex items-center flex-shrink-0 text-white mr-6">
                  <span class="font-semibold text-xl tracking-tight">
                      Trainuversal
                    </span>
                  <img
                      alt="..."
                      src={require("assets/img/white-transparent.png")}
                      className="shadow-lg rounded-full mx-auto slogan logoimg"
                      style={{ maxWidth: "100px" }}
                    />      
                    
                  </div>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={this.onClick} />
                <MDBCollapse isOpen={this.state.collapse} navbar>
                  <MDBNavbarNav right>
                    <MDBNavItem >
                      <MDBNavLink to="!#">
                        <MDBBtn size="sm" outline>
                          Home
                        </MDBBtn>
                      </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="/modules">
                        <MDBBtn a href='modules.jsx' size="sm" outline>
                          Modules
                        </MDBBtn>
                      </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                        <MDBBtn className = 'loginbutton' href = "https://tus.articulate-online.com/Login.aspx">
                          Login
                        </MDBBtn>
                    </MDBNavItem>
                  </MDBNavbarNav>
                </MDBCollapse>
              </MDBContainer>
            </MDBNavbar>

            <MDBMask
              overlay="black-strong"
              className="flex-center flex-column text-white text-center"
            >
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center pb-5">
                <h1 className="text-white font-semibold text-5xl">
                  Your E-learning journey starts with us.
                </h1>
                <p className="mt-4 text-lg text-gray-300">
                  <span>
                    {" "}
                   {" "}
                    <Typewriter className="typewriter"
                      options={{
                        strings: [ 
                          "Nurturing Cultural Humility",
                          "Cultivating Patient Safety",
                          "Promoting Sensitivty",
                          "Supporting a Culture of Health Equity "
                        ],
                        autoStart: true,
                        loop: true,
                        
                      }}
                    />{" "}
                    through training and awareness
                  </span>
                </p>
              </div>
            </MDBMask>
          </MDBView>
        </header>
      </div>
    );
  }
}

export default Navbar;
