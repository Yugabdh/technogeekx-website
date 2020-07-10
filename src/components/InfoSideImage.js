import React from "react";

import {
  MDBContainer, 
  MDBRow, 
  MDBCol,
  MDBBtn
} from 'mdbreact';

function InfoSideImage({info}) {
  return(
    <section className="spad backgroud-dark-2">
      <MDBContainer>
        <MDBRow>
          <MDBCol sm="12" md="12" lg="6">
            <div className="info">
              <h2>{info.heading}</h2>
              <p className="info-short-details">{info.shortDetail}</p>
              <p className="info-long-details">{info.longDetail}</p>
              <MDBBtn className="primary-btn about-btn" href='/about'>Learn More</MDBBtn>
            </div>
          </MDBCol>
          <MDBCol sm="12" md="12" lg="6">
            <div className="info-side-img mt-sm-3">
              <img src={info.imgLink} className="img-fluid" alt={info.imgAlt}/>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  )
}

export default InfoSideImage;