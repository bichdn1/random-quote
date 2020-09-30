import React, { useEffect } from "react";
import "../assets/styles/style.scss";
import CardFooter from "./CardFooter";
import Quote from "./Quote";
import { connect } from "react-redux";
import { fetchQuotes } from "../actions";

const App = ({ color, fetchQuotes, quotes, quote }) => {
  useEffect(() => {
    fetchQuotes();
  }, [fetchQuotes]);

  return (
    <div className="container" style={{ backgroundColor: color, color }}>
      <div id="wrapper">
        <div id="quote-box">
          <Quote />
          <CardFooter />
        </div>
        <p>
          by <a href=".#">Big Babol</a>
        </p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  color: state.newQuote.color,
  quotes: state.fetchData.quotes,
});

const mapDisPatchToProps = (dispatch) => ({
  fetchQuotes: () => dispatch(fetchQuotes()),
});

export default connect(mapStateToProps, mapDisPatchToProps)(App);
