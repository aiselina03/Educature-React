import React from "react";
import "./style.scss";

function Rank() {
  return (
    <>
      <div className="rank">
        <div className="text">
          <h1>
            We Rank the Best Courses <br /> on the Web
          </h1>
          <p>
            In the history of modern astronomy,there is probably no
            <br />
            one greater leap forward than the building and launch of the space
            <br />
            telescope.
          </p>
          <div className="search">
            <input type="text" placeholder="Search Cources" />
            <button>Search</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Rank;
