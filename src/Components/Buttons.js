import React from "react";
import { Link } from "react-router-dom";
const Buttons = ({ home }) => {
  return (
    <>
      <div className="buttons">
        <Link to="/reine" className="buttonsfond">
          Reine
        </Link>
        <Link to="/trolltunga" className="buttonsfond">
          Trolltuga
        </Link>
        <Link to="/flam" className="buttonsfond">
          Flam
        </Link>
      </div>
      {home === true ? (
        <div></div>
      ) : (
        <Link
          to="/"
          className="trolltungaTextHeader2" /* className="textReineHeader2" */
        >
          NORWAY
        </Link>
      )}
    </>
  );
};

export default Buttons;
