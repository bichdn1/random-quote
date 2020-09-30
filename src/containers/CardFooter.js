import React from "react";
import Link from "../components/Link";
import { connect } from "react-redux";
import { newQuote } from "../actions";
import PropTypes from "prop-types";

const CardFooter = ({ color, onNewQuote }) => {
  return (
    <div className="buttons">
      <Link color={color} />
      <button
        className="button"
        id="new-quote"
        style={{ backgroundColor: color }}
        onClick={() => {
          onChangeAnim();
          setTimeout(onNewQuote, 400);
        }}
      >
        New quote
      </button>
    </div>
  );
};

const onChangeAnim = () => {
  const text = document.querySelector(".quote-text");
  const author = document.querySelector(".quote-author");
  text.classList.add("animColorText");
  author.classList.add("animColorText");
  setTimeout(() => {
    text.classList.remove("animColorText");
    author.classList.remove("animColorText");
  }, 1500);
};

CardFooter.propTypes = {
  color: PropTypes.string.isRequired,
  onNewQuote: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  color: state.newQuote.color,
});

const mapDispatchToProps = (dispatch) => ({
  onNewQuote: () => dispatch(newQuote()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CardFooter);
