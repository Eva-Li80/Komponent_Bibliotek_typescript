import React from "react";
import Sidebar from "../Components/P-T Components/Sidebar";
import Header from "../Components/F-J Components/Header";
import PizzaMenu from "../Components/P-T Components/PizzaMenu";

const P_T = () => {
  return (
    <div>
      <Header text="P - T Components" />
      <Sidebar />
      <div className="main">
        <PizzaMenu/>
      </div>
    </div>
  );
};

export default P_T;
