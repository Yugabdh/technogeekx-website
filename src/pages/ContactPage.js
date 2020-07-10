import React, { Component } from 'react';
import { 
	MDBBtn,
	MDBModal, MDBModalBody, MDBModalHeader 
} from "mdbreact";
import Reaptcha from 'reaptcha';
import firebase from "../firebase/Firebase-init";

export default class ContactPage extends Component {
	constructor(props) {
    super(props);
		this.captcha = null;
		this.state = {
			isVerified: false,
			name: '',
			email: '',
			response: '',
      modal6: false
		};
		this.onVerify = this.onVerify.bind(this);
		this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggle = this.toggle.bind(this);
  }
	
	onVerify = recaptchaResponse => {
    if(recaptchaResponse) {
			this.setState({
				...this.state,
				isVerified: true
			})
		} else {
			alert('Bot baka!')
		}
	};
	

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
		// console.log(this.state.email)
		// console.log(this.state.name)
		// console.log(this.state.response)
    if(this.state.email !== "" && this.state.name !== "" && this.state.response !== ""){
      const responses = firebase.firestore().collection('responses');
      const message = {
				email: this.state.email,
				name: this.state.name,
				response: this.state.response
      }
      responses.add(message)
      .then((docRef) => {
        this.setState({
          ...this.state,
					email: '',
					name: '',
					response: '',
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
      <section className="contact-section spad backgroud-dark-1">
        <div className="container">
					<div className="row">
						<div className="col-lg-3">
							<div className="contact-info">
								<h4>Information</h4>
								<ul>
									<li><i className="fa fa-phone"></i>(91)-123-123-1231</li>
									<li><i className="fa fa-envelope"></i>xxx@mail.com</li>
								</ul>
							</div>
							<div className="contact-address">
								<h4>Address</h4>
								<ul>
									<li><i className="fa fa-map-marker"></i> Mumbai, India
									</li>
								</ul>
							</div>
						</div>
							<div className="col-lg-8 offset-lg-1">
								<div className="contact-form">
									<h4>Get in touch</h4>
									<form onSubmit={this.handleSubmit}>
										<div className="row">
											<div className="col-lg-6">
												<input name="name" type="name" placeholder="Name" 
                            onChange={this.handleChange} value={this.state.name} />
											</div>
											<div className="col-lg-6">
												<input name="email" type="email" placeholder="Email" 
                            onChange={this.handleChange} value={this.state.email} />
											</div>
											<div className="col-lg-12">
												<textarea name="response" placeholder="Message" 
													onChange={this.handleChange} value={this.state.response} >

												</textarea>
												<Reaptcha
													ref={e => (this.captcha = e)}
													sitekey="6Le-Ka8ZAAAAAK_6GQ7pSZ7UmgduGUYeLwiElGhV"
													onVerify={this.onVerify}
													size="invisible"
													theme="dark"
												/>
												<MDBBtn className="primary-btn" onClick={() => {this.captcha.execute();}}
												type="submit">
														SEND
												</MDBBtn>
											</div>
											<MDBModal isOpen={this.state.modal6} toggle={this.toggle(6)} side position="top-right">
												<MDBModalHeader toggle={this.toggle(6)}>Message Send!</MDBModalHeader>
												<MDBModalBody>
													Thanks :)
												</MDBModalBody>
											</MDBModal>
										</div>
									</form>
								</div>
							</div>
					</div>
        </div>
    </section>
    )
  }
}
