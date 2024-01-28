import React from "react";
import "./style.scss"

function Platform() {
  return (
    <>
      <div className="containerPlatform">
        <div className="platform">
          <div className="image">
            <img
              src="https://preview.colorlib.com/theme/educature/img/about.jpg"
              alt=""
            />
          </div>
          <div className="text">
            <h1>
              Over 2500 Courses <br />
              from 5 Platform
            </h1>
            <p>
              There is a moment in the life of any aspiring astronomer that it
              is time to buy <br />
              that first telescope. It’s exciting to think about setting up your <br />
              own viewing station. In the life of any aspiring astronomer that <br />
              it is time to buy that first telescope. It’s exciting to think <br />
              about setting up your own viewing station.
            </p>
            <button>Explore Cources</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Platform;
