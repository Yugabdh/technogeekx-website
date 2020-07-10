import React, { Component } from 'react';
import { 
  MDBBtn,
  MDBModal, MDBModalBody, MDBModalHeader

} from "mdbreact";
import firebase from "../firebase/Firebase-init";

export default class NewsletterSubscription extends Component {
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

  render() {
    return (
      <section className="subscribe classes-section">
        <div className="class-title">
          <div className="container subscribe-text">
            <div className="row">
              <div className="col-lg-8 m-auto">
                <div className="section-title pr-lg-2 pl-0 pr-0">
                  <h2>Get In Touch</h2>
                  <p className="short-details">Subscribe to Weekly Newsletter</p>
                  <form onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="col-lg-10">
                          <input name="email" type="email" placeholder="Email" 
                            onChange={this.handleChange} value={this.state.email} />
                        </div>
                        <div className="col-lg-12">
                          <MDBBtn type="submit" className="c-btn">Subscribe</MDBBtn>    
                        </div>
                    </div>
                  </form>
                </div>
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
      </section>
    )
  }
}
