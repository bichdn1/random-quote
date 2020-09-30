import React from "react";
import PropTypes from "prop-types";

const QuoteContent = ({ text }) => {
  return (
    <div className="quote-text">
      <i className="fas fa-quote-left"></i>
      <span id="text">{text}</span>
    </div>
  );
};

QuoteContent.propTypes = {
  text: PropTypes.string.isRequired,
};

export default QuoteContent;
