import React from "react";
import "./Section.scss";
import { Fade } from "react-awesome-reveal";
const Section = ({
  title,
  description,
  backgroundImg,
  leftButton,
  rightButton,
}) => {
  return (
    <div
      className="section"
      style={{ backgroundImage: `url("${backgroundImg}")` }}
    >
      <Fade bottom >
      <div className="section-content-wrap">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div className="section-button">
        <div className="section-button-wrap">
          <button className="section-button-style">{leftButton}</button>
          {rightButton && (
            <button className="section-button-style">{rightButton}</button>
          )}
        </div>
        <img
          className="down-arrow-img"
          src="/images/down-arrow.svg"
          alt="downArrow"
        />
      </div>
      </Fade>
    </div>
  );
};

export default Section;
