import React, { Component } from "react";
import Quote from "./Quote";

class QuoteSearcher extends Component {
  state = {
    quotes: [],
    fetching: true
  };

  componentDidMount() {
    fetch("https://quote-garden.herokuapp.com/quotes/search/tree")
      .then(result => result.json())
      .then(data => {
        this.setState({ quotes: data.results, fetching: false });
      })
      .catch(console.error);
  }

  render() {
    return (
      <div>
        <h1>Quotes</h1>
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
                />
              );
            })}
        </div>
      </div>
    );
  }
}

export default QuoteSearcher;
