import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter  className="page-footer font-small footer-section">
      <div className="footer-social-band">
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow className="py-4 d-flex align-items-center">
            <MDBCol md="6" lg="5" className="text-center text-md-left mb-4 mb-md-0">
              <p className="mb-0 white-text">
                Get connected with us on social networks!
              </p>
            </MDBCol>
            <MDBCol md="6" lg="7" className="text-center text-md-right">
              <a className="fb-ic ml-0" href="#!">
                <i className="fab fa-facebook-f white-text mr-4"> </i>
              </a>
              <a className="tw-ic" href="#!">
                <i className="fab fa-twitter white-text mr-4"> </i>
              </a>
              <a className="li-ic" href="#!">
                <i className="fab fa-linkedin-in white-text mr-4"> </i>
              </a>
              <a className="ins-ic" href="#!">
                <i className="fab fa-instagram white-text mr-4"> </i>
              </a>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
      <MDBContainer className="mt-5 mb-4 text-center text-md-left">
        <MDBRow className="mt-3">
          <MDBCol md="3" lg="3" xl="3" className="mb-2">
          <div className="footer-logo-item text-center">
            <div className="f-logo">
                <a href="#!">
                  <img src={require("../assets/img/svg/logo-shape-blue.svg")} alt="logo" height="60" /><br />
                  <span className="brand-name">TechnoGeekx</span>
                </a>
            </div>
            <p>Thegikx is a self-initiated project which is powered by our willpower. 
              By exploring us more you will be one step closer to technology.
            </p>
          </div>
          </MDBCol>
          <MDBCol md="2" lg="3" xl="2" className="mb-2">
            <div className="footer-widget text-center text-md-left">
              <h5>Our Blog</h5>
              <div className="footer-blog">
                <a href="blog.html" className="fb-item">
                    <h6>Comming soon </h6>
                    <span className="blog-time"><i className="far fa-clock"></i> May 11, 2020</span>
                </a>
              </div>
            </div>
          </MDBCol>
          <MDBCol md="3" lg="3" xl="2" className="mb-2">
            <div className="footer-widget text-center text-md-left">
              <h5>Other</h5>
              <ul className="other-links">
                <li><a href="/about">About Us</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>
          </MDBCol>
          <MDBCol md="4" lg="3" xl="3" className="mb-2">
            <div className="footer-widget footer-info text-center text-md-left">
              <h5>CONTACT</h5>
              <p className="info-p">
                <i className="fas fa-map-marker-alt mr-3" /> Mumbai, IN
              </p>
              <p className="info-p">
                <i className="fa fa-envelope mr-3" /> info@example.com
              </p>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:  TechnoGeekx.com 
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;