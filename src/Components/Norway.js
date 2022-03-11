import React from "react";

import Buttons from "./Buttons";
const Norway = ({ home }) => {
  return (
    <>
      <div className="norway">
        <div className="trolltungaTextHeader">Norway</div>
        <div className="textNorway">
          This northern country is proud of its clean and untouched landscapes
          that attract more and more tourists.
        </div>
        <Buttons home={true} />
      </div>
    </>
  );
};

export default Norway;
