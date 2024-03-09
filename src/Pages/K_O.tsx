import React from "react";
import Header from "../Components/F-J Components/Header";
import Sidebar from "../Components/P-T Components/Sidebar";
import MovieBox from "../Components/K-O Components/MovieBox";
import Card from "../Components/A-E Components/Card";

const K_O = () => {
  return (
    <div>
      <Header text="K - O Components" />
      <Sidebar />
      <MovieBox title="MovieBox" />
      <div className="main"></div>
    </div>
  );
};

export default K_O;
