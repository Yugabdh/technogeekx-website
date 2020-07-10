import React, { Fragment } from "react";

import HeaderBanner from '../components/HeaderBanner';
import InfoSideImage from '../components/InfoSideImage';
import IconHeadingText from '../components/IconHeadingText';
import NewsletterSubscription from "../components/NewsletterSubscription";
import homeAboutImg from '../assets/img/component/home-about.jpg';
import blog from '../assets/img/svg/blog.svg';
import code from '../assets/img/svg/code.svg';
import info from '../assets/img/svg/info.svg';

class HomePage extends React.Component {
  render() {
    const homeAbout = {
      heading: `WELCOME TO TechnoGeekx`,
      shortDetail: `We develope Applications, Tools, and WebApps`,
      longDetail: `I believe you must bring your whole self to the table if 
      you want to thrive in today’s crazy world; 
      your personality, your sense of humor, and most importantly, your heart. 
      All of these elements brought me to found TechnoGeekx in May, 2020. 
      Since then, the blog has been thriving, and has quickly gained a loyal following. 
      I invite you to explore my site, learn about my passions, and explore what excites 
      and interests you as well.`,
      imgLink: homeAboutImg,
      imgAlt: `home-about`
    }

    const features = {
      heading: `Benefits`,
      headingColor: `text-white`,
      shortDetail: `Why is it so great?`,
      shortDetailColor: `text-grey`,
      backgroud: `backgroud-dark-1`,
      cards: [
        {
          id: 1,
          img: code,
          heading: 'Open-source Tools',
          info: 'We design Open source apps and tools hence it is absoulty free.'
        },
        {
          id: 2,
          img: info,
          heading: 'Our Write-ups',
          info: 'Our team produce many useful guides, tutorials and other write-ups just to help you.'
        },
        {
          id: 3,
          img: blog,
          heading: 'Weekly Blog',
          info: 'We produce content rich blog every week to keep you up to date.'
        }
      ]
    } 
    
    return (
      <Fragment>
        <HeaderBanner />
        <InfoSideImage info={homeAbout} />
        <IconHeadingText info={features} />
        <NewsletterSubscription />
      </Fragment>
    )
  }
}

export default HomePage;
