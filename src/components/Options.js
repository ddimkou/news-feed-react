import "./styles/options.css";
import us from "./flags/us.png";
import gr from "./flags/gr.png";
import React from "react";
const Options = ({ setCategory, setCountry }) => {
  return (
    <div className="options">
      <div className="categories">
        <p onClick={() => setCategory("business")}>Business</p>
        <p onClick={() => setCategory("health")}>Health</p>
        <p onClick={() => setCategory("science")}>Science</p>
        <p onClick={() => setCategory("sports")}>Sports</p>
      </div>
      <div className="flags">
        <div className="us-flag">
          <img src={us} alt="US language" onClick={() => setCountry("US")} />
        </div>
        <div className="us-flag">
          <img src={gr} alt="GR language" onClick={() => setCountry("GR")} />
        </div>
      </div>
    </div>
  );
};

export default Options;
