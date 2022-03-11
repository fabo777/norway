import React from "react";
import Buttons from "./Buttons";
import { Link } from "react-router-dom";

const Reine = () => {
  return (
    <div className="reine">
      <div className="trolltungaTextHeader">Reine</div>

      <div className="textReine reineText">
        The fishing village of Reine is nestled securely at the mouth of
        Reinefjord in the west of Lofoten but this naturally beautiful Norwegian
        place deserves a mention of its own. Within this mountainous village,
        you can find your pleasures on the open sea with local fishermen looking
        to find the catch of their lives out on the oceans. There’s also
        extremely accessible kayaking for any interested persons. Reine is the
        ultimate place to find a piece of yourself out on the outskirts, hiking
        through the mountains to find the absolute perfect place to sit and take
        in the aurora that sits in one of the clearest skies you’ll come across
        anywhere in the world. A truly stunning place to visit in Reine.
      </div>
      <Buttons />
    </div>
  );
};

export default Reine;
