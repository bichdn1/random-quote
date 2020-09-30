import React from "react";

const ButtonLink = ({ color, button_link }) => {
  return (
    <div className="link">
      <a
        href={button_link.hrefLink}
        target="_blank"
        className="button"
        style={{ backgroundColor: color }}
        id={button_link.id}
        title={button_link.title}
      >
        <i className={button_link.className}></i>
      </a>
    </div>
  );
};

export default ButtonLink;
