import React, { Fragment } from "react";
import QuoteContent from "../components/QuoteContent";
import QuoteAuthor from "../components/QuoteAuthor";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Quote = ({ text, author }) => {
  return (
    <Fragment>
      <QuoteContent text={text} />
      <QuoteAuthor author={author} />
    </Fragment>
  );
};

Quote.propTypes = {
  text: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => {
  let quotes = state.fetchData.quotes;
  if (quotes === undefined || !quotes.length) {
    return {
      text: "",
      author: "",
    };
  }
  return {
    text: quotes[state.newQuote.index].text,
    author: quotes[state.newQuote.index].author,
  };
};

export default connect(mapStateToProps, null)(Quote);
