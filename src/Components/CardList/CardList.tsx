import React from "react";
import Card from "../Card/Card";
import { IRobots } from "../../Containers/App";

const CardList = ({ robots }: { robots: Array<IRobots> }) => {
  return (
    <div>
      {robots.map(user => {
        return (
          <Card
            key={user.id}
            id={user.id}
            name={user.name}
            email={user.email}
          />
        );
      })}
    </div>
  );
};

export default CardList;
