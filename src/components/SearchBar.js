import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllListings } from '../actions/listingActions';
import { Link } from 'react-router-dom';

class SearchBar extends Component {
  constructor() {
    super();

    this.state = {
      sortedListing: []
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.getSearchQuery = this.getSearchQuery.bind(this);
  }

  onInputChange() {
    const allListings = this.props.allListings;
    this.setState({ sortedListing: this.getSearchQuery(allListings) });
  }

  getSearchQuery(allListings) {
    return allListings.filter((listing, i) => {
      const title = listing.title.toLowerCase();
      const programming_lang = listing.programming_lang.toLowerCase();
      const isMatch =
        title.indexOf(this.refs.search.value.toLowerCase()) > -1 ||
        programming_lang.indexOf(this.refs.search.value.toLowerCase()) > -1;
      if (isMatch) return listing;
      return false;
    });
  }

  renderResults() {
    const { sortedListing } = this.state;
    const { allListings } = this.props;
    let listings = sortedListing;
    if (listings.length === 0) {
      listings = allListings;
    }
    return (
      <div className="row">
        {listings.map((listing, i) => {
          return (
            <div key={i} className="col-12 card">
              <div className="row">
                <div className="col-12">
                  <h2>{listing.title}</h2>
                  <h4>
                    {listing.location} - {listing.type} - ${
                      listing.compensation
                    }
                  </h4>
                  <p>{listing.description}</p>
                </div>
              </div>

              <div className="row">
                <div className="col-3">
                  <Link to="/applyform">
                    <button className="fill primary">Apply</button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  componentWillMount() {
    this.props.fetchAllListings();
  }

  componentDidMount() {
    this.setState({ sortedListing: this.props.allListings || [] });
  }

  render() {
    const searchResults = this.renderResults();
    return (
      <div className="row search-container">
        <div className="col-9">
          <input
            ref="search"
            className="fill"
            placeholder="Keywords ( Example Fullstack, Backend, Rails ) . . ."
            onChange={this.onInputChange}
          />
        </div>

        <div className="col-3">
          <button className="col-12 primary">Search</button>
        </div>

        {searchResults}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    allListings: state.listing
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllListings: () => {
      let action = fetchAllListings();
      dispatch(action);
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
