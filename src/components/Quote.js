import React, { Component } from "react";
import PropTypes from "prop-types";

class Quote extends Component {
  static propTypes = {
    quoteText: PropTypes.string.isRequired,
    quoteAuthor: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  };

  state = {
    liked: null
  };

  handleLike() {
    this.setState({ liked: true, style: { color: "green" } }); //style should be an object
  }
  handleDislike() {
    this.setState({
      liked: false,
      style: { color: "red", textDecoration: "line-through" }
    });
  }

  render() {
    return (
      <div key={this.props.id}>
        <div style={this.state.style}>
          <p className="quote-text">{this.props.quoteText}</p>
          <p className="quote-author">By: {this.props.quoteAuthor}</p>
        </div>
        <div className="buttons">
          <button className="like" onClick={() => this.handleLike()}>
            :)
          </button>
          <button className="dislike" onClick={() => this.handleDislike()}>
            :(
          </button>
        </div>
      </div>
    );
  }
}

export default Quote;
