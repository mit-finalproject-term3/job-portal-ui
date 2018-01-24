import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createListing } from '../actions/listingActions';
import { Upload, message, Button, Icon } from 'antd';
// import FileUploader from './FileUploader'

class ApplyForm extends Component {
  constructor() {
    super();
    this.state = {
      listing: {
        firstname: '',
        lastname: '',
        email: '',
        phone_number: '',
        message: ''
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.submitListing = this.submitListing.bind(this);
  }

  handleChange(event) {
    const field = event.target.name;
    const listing = this.state.listing;
    listing[field] = event.target.value;
    return this.setState({ listing });
  }

  submitListing(event) {
    event.preventDefault();
    let listing = this.state.listing;
    this.props.createListing(listing);
  }

  render() {
    return (
      <div>
        <h1>Application Form</h1>
        <div className="space" />

        <div className="form-page">
          <form onSubmit={this.submitListing}>
            <div className="row">
              <div className="col-12">
                <label>First Name</label>
                <input
                  className="fill"
                  type="text"
                  name="firstname"
                  placeholder="Enter your first name"
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <label>Last Name</label>
                <input
                  className="fill"
                  type="text"
                  name="lastname"
                  placeholder="Enter your last name"
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <label>Email</label>
                <input
                  className="fill"
                  type="text"
                  name="email"
                  placeholder="Enter your email"
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <label>Phone number</label>
                <input
                  className="fill"
                  type="number"
                  name="phone_number"
                  placeholder="Enter your phone number"
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <label>Message</label>
                <textarea
                  className="fill"
                  type="text"
                  name="message"
                  placeholder="message"
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <button className="primary center" type="submit">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createListing: listing => {
      let action = createListing(listing);
      dispatch(action);
    }
  };
};

export default connect(null, mapDispatchToProps)(ApplyForm);
