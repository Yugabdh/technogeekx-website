import React from "react";

class AboutPage extends React.Component {
  render() {
    return (
      <section className="aboutus-section spad-2 backgroud-dark-2">
        <div className="container">
            <div className="about-page">
                <div className="row">
                  <div className="col-xl-9 col-lg-10 m-auto">
                    <div className="section-title">
                        <h2>Who we Are And What We Do</h2>
                        <div className="border-meghna"></div>
                        <p>TechnoGeekx is a self-initiated project which is powered by our willpower. By exploring us more you will be one step closer to technology.</p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="about-us">
                      <h4>ABOUT US</h4>
                      <p>
                        I believe you must bring your whole self to the table if you want to thrive in today’s crazy world; your personality, your sense of humor, and most importantly, your heart. 
                        All of these elements brought me to found TechnoGeekx back in 2020.  
                      </p>
                      <p>
                        We are a bunch of developers and technology enthusiasts people who want to explore this technical world and bring forward its best part to serve you. We develop tools and applications in various fields and we enjoy doing so I hope you will find it interesting.
                      </p>
                      <p>
                        I invite you to explore my site, learn about my passions, and explore what excites and interests you as well.
                      </p>
                      <p>
                        Want to know more? contact us
                      </p>
                      <a href="/contact" className="btn primary-btn about-btn">Contact Us </a>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="about-quality">
                        <h4>FOR YOU</h4>
                        <ul className="fa-ul">
                          <li>
                            <span className="fa-li"><i className="fas fa-check"></i></span>
                            We are developing and working on projects 
                            and hosting them on Github so it is accessible to everyone.
                          </li>
                          <li>
                            <span className="fa-li"><i className="fas fa-check"></i></span>
                            We are going to bring forward tutorials which will help 
                            you understand and develop knowledge in various technical fields.
                          </li>
                          <li>
                            <span className="fa-li"><i className="fas fa-check"></i></span>
                            Your next engaging thing will be blogging 
                            these blogs will be technology-oriented and joyful so please get connected. 
                          </li>
                        </ul>
                    </div>
                  </div>
                </div>
            </div>
        </div>
      </section>
    )
  }
}

export default AboutPage;
