import React from "react";
import { Helmet } from "react-helmet-async";
import Rank from "../../components/Rank";
import Cards from "../../components/Cards";
import Platform from "../../components/Platform";

function Home() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <Rank/>
      <Platform/>
      <Cards/>
    </>
  );
}

export default Home;
