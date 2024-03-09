import React from "react";
import { PizzaProps } from "./Types k-o/pizza";

type ListProps = {
    data: PizzaProps[];
    onclick: (selected: PizzaProps) => void; 
  };
  

const List = ({ data , onclick }:  ListProps) => {
  return (
    <div className="list-container">
      <div className="list">
        <ul>
          {data.map((piz, index) => (
            <li key={index}>
              <h2>{piz.name}</h2>
              <p className="des">{piz.description}</p>
              <p>Price: {piz.price} kr</p> 
              <img onClick={() => onclick(piz)} src={piz.url} alt="" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default List;
