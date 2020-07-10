import React from "react";

import {
  MDBContainer, 
  MDBRow, 
  MDBCol
} from 'mdbreact';

function IconHeadingText({info}) {
  let itemList = info.cards.map((item) => {
    return(
      <MDBCol key={item.id} sm="12" md="4" className="p-4">
        <img src={item.img} alt={item.heading} height="100" className="m-3" />
        <h5 className={"font-weight-bold my-1 "+info.headingColor}>{item.heading}</h5>
        <p className={"mb-md-1 mb-sm-0 p-4 "+info.shortDetailColor}>
          {item.info}
        </p>
      </MDBCol>
    );
  })
  return(
    <section className={'spad-2 iconHeadingText '+info.backgroud}>
      <MDBContainer>
        <MDBRow>
          <MDBCol sm="12" md="12" lg="12">
            <div className="section-title">
              <h2 className={info.headingColor}>{info.heading}</h2>
              <p className={info.shortDetailColor}>{info.shortDetail}</p>
            </div>
          </MDBCol>
        </MDBRow>
        <MDBContainer className="mt-md-5 mt-sm-3">
          <MDBRow className="text-center">
            <MDBCol sm="12" md="12" lg="12">
              <MDBRow>
                { itemList }
              </MDBRow>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        
      </MDBContainer>
    </section>
  );
  
}

export default IconHeadingText;