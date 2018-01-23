import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createListing } from '../actions/listingActions';

class PostAJob extends Component {
  constructor() {
    super();
    this.state = {
      listing: {
        title: '',
        type: 'full-time',
        level_of_experience: 'intern',
        programming_lang: '',
        location: 'Sydney',
        description: ''
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
        <h1>Create Your Job Listing</h1>
        <p>List your job posting and find talent!</p>
        <div className="space" />

        <div className="form-page">
          <form onSubmit={this.submitListing}>
            <div className="row">
              <div className="col-12">
                <label>Type</label>
                <select
                  className="fill"
                  name="type"
                  onChange={this.handleChange}
                >
                  <option value="full-time">Full time</option>
                  <option value="part-time">Part time</option>
                  <option value="contract">Contract</option>
                  <option value="entry">
                    Internship/junior full-time/part-time
                  </option>
                </select>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <label>Job Title</label>
                <input
                  className="fill"
                  type="text"
                  name="title"
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <label>Programming Languages</label>
                <input
                  className="fill"
                  type="text"
                  name="programming_lang"
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <label>Level of Experience</label>
                <select
                  className="fill"
                  name="level_of_experience"
                  onChange={this.handleChange}
                >
                  <option value="intern">Intern (0 yrs of experience)</option>
                  <option value="junior">
                    Junior (0 - 1 yrs of experience)
                  </option>
                  <option value="mid">Mid(1 - 3 yrs of experience)</option>
                  <option value="senior">Senior (3+ yrs of experience)</option>
                  <option value="freelance">Freelance</option>
                </select>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <label>Compensation</label>
                <input
                  className="fill"
                  type="number"
                  name="compensation"
                  placeholder="Compensation"
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <label>Description</label>
                <textarea
                  className="fill"
                  type="text"
                  name="description"
                  placeholder="Description"
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <button className="primary center" type="submit">
                  Submit Listing
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

export default connect(null, mapDispatchToProps)(PostAJob);
