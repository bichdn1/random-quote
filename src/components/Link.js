import React from "react";
import ButtonLink from "./ButtonLink";

const Link = ({ color }) => {
  const linkTweet = {
    id: "tweet-quote",
    title: "Tweet this quote!",
    className: "fa fa-twitter",
    hrefLink: "https://twitter.com/",
  };

  const linkTumblr = {
    id: "tumblr-quote",
    title: "Post this quote on tumblr!",
    className: "fa fa-tumblr",
    hrefLink: "https://www.tumblr.com/",
  };

  return (
    <div className="button-left">
      <ButtonLink button_link={linkTweet} color={color} />
      <ButtonLink button_link={linkTumblr} color={color} />
    </div>
  );
};

export default Link;
