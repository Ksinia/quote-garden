import React, { Component } from "react";
import Quote from "./Quote";

class QuoteSearcher extends Component {
  state = {
    quotes: [],
    fetching: true
  };

  componentDidMount() {
    fetch("https://quote-garden.herokuapp.com/quotes/search/tree")
      .then(response => response.json())
      .then(data => {
        this.setState({
          quotes: data.results.map(quote => {
            return { ...quote, liked: "unknown" };
          }),
          fetching: false
        });
      })
      .catch(console.error);
  }

  setLiked = id => {
    this.setState({
      ...this.state,
      quotes: this.state.quotes.map(quote => {
        if (quote._id === id) {
          return { ...quote, liked: "yes" };
        } else {
          return quote;
        }
      })
    });
  };
  setDisliked = id => {
    this.setState({
      ...this.state,
      quotes: this.state.quotes.map(quote => {
        if (quote._id === id) {
          return { ...quote, liked: "no" };
        } else {
          return quote;
        }
      })
    });
  };

  render() {
    const liked = this.state.quotes.filter(quote => quote.liked === "yes")
      .length;
    const disliked = this.state.quotes.filter(quote => quote.liked === "no")
      .length;
    return (
      <div>
        <h1>Quotes</h1>
        <p style={{ fontWeight: "bold" }}>
          Liked: {liked} / Disliked: {disliked}
        </p>
        <div className="quotes">
          {this.state.fetching && <p>Loading...</p>}
          {!this.state.fentching &&
            this.state.quotes.map(quote => {
              return (
                <Quote
                  quoteText={quote.quoteText}
                  quoteAuthor={quote.quoteAuthor}
                  key={quote._id}
                  id={quote._id}
                  liked={quote.liked}
                  setLiked={this.setLiked}
                  setDisliked={this.setDisliked}
                />
              );
            })}
        </div>
      </div>
    );
  }
}

export default QuoteSearcher;
