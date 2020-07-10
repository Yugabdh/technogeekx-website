import React, { Fragment } from "react";

function HeaderBanner() {
  return(
    <Fragment>
      <div className="view">
        <div className="mask rgba-gradient d-flex justify-content-center align-items-center banner-hero">
          <div className="container px-md-3 px-sm-0">
            <div className="row wow fadeIn">
              <div className="col-md-6 py-4 white-text text-center backgroud-dark-1 wow fadeIn">
                <h3 className="white-text mb-0 pt-md-5 pt-5 banner-hero-title">
                  DISCOVER TechnoGeekx
                </h3>
                <div className="border-meghna"></div>
                <h4 className="subtext-header mt-2 mb-4">We Code. We Devlope. We Guide.</h4>
                <p className="text-grey text-center description">
                  Welcome to TechnoGeekx, my very own passion project filled with unique
                    and engaging content. We devlope tools, applications and guide people in technology world.
                </p>
              </div>
              <div className="col-md-6 d-none d-lg-block">
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default HeaderBanner;