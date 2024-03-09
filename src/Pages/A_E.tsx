import React from "react";
import Header from "../Components/F-J Components/Header";
import Sidebar from "../Components/P-T Components/Sidebar";
import Card from "../Components/A-E Components/Card";
import CountReducer from "../Components/A-E Components/CountReducer";
import Count from "../Components/A-E Components/Count";
import ChangeText from "../Components/A-E Components/ChangeText";
import Callbacks from "../Components/A-E Components/Callbacks";

const A_E = () => {
  return (
    <div>
      <Header text="A - E Components" />
      <Sidebar />
      <div className="main">
        <Card title="Callbacks">
          <Callbacks/>
        </Card>
        <Card title="ChangeText">
          <ChangeText />
        </Card>
        <Card title="Counter">
          <Count />
        </Card>
        <Card title="Counter med useReducer">
          <CountReducer />
        </Card>
      </div>
    </div>
  );
};

export default A_E;
