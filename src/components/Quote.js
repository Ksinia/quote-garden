import React, { Component } from "react";
import PropTypes from "prop-types";

class Quote extends Component {
  static propTypes = {
    quoteText: PropTypes.string.isRequired,
    quoteAuthor: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  };
  render() {
    return (
      <div key={this.props.id}>
        <p className="quote-text">{this.props.quoteText}</p>
        <p className="quote-author">By: {this.props.quoteAuthor}</p>
      </div>
    );
  }
}

export default Quote;
