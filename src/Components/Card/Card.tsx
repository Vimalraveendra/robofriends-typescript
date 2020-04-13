import React from "react";

interface ICardStatelessProps {
  name: string;
  email: string;
  id: number;
}

const Card: React.FC<ICardStatelessProps> = ({ id, name, email }) => {
  return (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img alt="roboimage" src={`https://robohash.org/${id}?size=200x200`} />
      <div>
        <h2 style={{ fontSize: "15px" }}>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
