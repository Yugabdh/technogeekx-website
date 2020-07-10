import React, { Component } from 'react';
import { 
  MDBBtn,
  MDBModal, MDBModalBody, MDBModalHeader

} from "mdbreact";
import firebase from "../firebase/Firebase-init";




export default class BlogPage extends Component {
  constructor() {
    super();
    this.state = {
      currentItem: '',
      email: '',
      modal6: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggle = this.toggle.bind(this);
    this.releaseDate = this.releaseDate.bind(this);
  }

  releaseDate() {
    var docRef = firebase.firestore().collection("blog").doc("M7A5cORoq3QT5OYdOefV");
    docRef.get().then(function(doc) {
      if (doc.exists) {
        var countDownDate = new Date(doc.data().date.seconds*1000);
        countDownDate.setDate(countDownDate.getDate() + 20);
        var timerDiv = document.getElementById("time-counter").innerHTML;
        if(timerDiv) {
          var x = setInterval(function () {
            var now = new Date().getTime();
            var distance = countDownDate - now;
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            timerDiv = days + "d " + hours + "h " +
              minutes + "m " + seconds + "s ";
            if (distance < 0) {
              clearInterval(x);
              document.getElementById("time-counter").innerHTML = "EXPIRED";
            }
          }, 1000);
        }
        
      } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
      }
    }).catch(function(error) {
      console.log("Error getting document:", error);
    });
  }

  toggle = nr => () => {
    let modalNumber = 'modal' + nr
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  }

  handleChange(e) {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  }
  
  handleSubmit(e) {
    e.preventDefault();
    if(this.state.email !== ""){
      const subscriber = firebase.firestore().collection('subscribed-users');
      const user = {
        email: this.state.email
      }
      console.log(user)
      subscriber.add(user)
      .then((docRef) => {
        this.setState({
          ...this.state,
          email: '',
          modal6: true
        })
        this.toggle(6)
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });      
    }
  }
  componentDidMount() {
    this.releaseDate();
  }
  render() {
    return (
      <div className="view">
        <video className="video-intro" poster="https://mdbootstrap.com/img/Photos/Others/background.jpg" playsInline autoPlay
          muted loop>
          <source src="https://mdbootstrap.com/img/video/Lines-min.mp4" type="video/mp4" />
        </video>
        <div className="mask bg1-bg2-gradient d-flex justify-content-center align-items-center">
          <div className="text-center white-text mx-5 wow fadeIn">
            <h1 className="display-4 mb-4 coming">
              <strong>Coming Soon!</strong>
            </h1>
            <div id="time-counter" ref="timeCounter" className="border border-light my-4"></div>

            <h4 className="mb-4 coming">
              <strong>We're working hard to finish the development of this component. </strong>
            </h4>

            <div className="container px-0 text-md-left text-center get-in-touch-box">
              <div className="section-title">
                  <p className="py-3">Subscribe to Weekly Newsletter</p>
                  <form onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="col-sm-8 col-md-8 col-lg-10">
                        <input name="email" type="email" placeholder="Email" 
                            onChange={this.handleChange} value={this.state.email} />
                        </div>
                        <div className="col-sm-4 col-md-4 col-lg-2">
                          <MDBBtn type="submit" className="c-btn">Subscribe</MDBBtn> 
                        </div>
                    </div>
                  </form>
              </div>
            </div>
          </div>
        </div>

        <MDBModal isOpen={this.state.modal6} toggle={this.toggle(6)} side position="top-right">
          <MDBModalHeader toggle={this.toggle(6)}>Subscribed!</MDBModalHeader>
          <MDBModalBody>
            Thanks for subscribing :)
          </MDBModalBody>
        </MDBModal>
      </div>
    )
  }
}
