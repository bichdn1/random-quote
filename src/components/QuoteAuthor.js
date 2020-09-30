import React from "react";
import PropTypes from "prop-types";

const QuoteAuthor = ({ author }) => {
  return (
    <div className="quote-author">
      - <span id="author">{author}</span>
    </div>
  );
};

QuoteAuthor.propTypes = {
  author: PropTypes.string.isRequired,
};

export default QuoteAuthor;
