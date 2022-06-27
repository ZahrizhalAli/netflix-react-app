import React from "react";
import "./App.css";
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
        title="Recommened for You"
        fetchUrl={requests.fetchRecommendedMovies}
        isLargePoster
      />
      <Row title="Popular Movies" fetchUrl={requests.fetchPopularMovies} />
    </div>
  );
}

export default App;
