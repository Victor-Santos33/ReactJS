import "./Card.css"
import React from "react";

export default (props) => {

  const cardStyle = {
    backgroundColor: props.color || '#00F',
    borderColor: props.color || '#00F',
  }

  return (
    <div className="Card" style={cardStyle}>
      <div className="Title">{props.titulo}</div>
      <div className="Content">{props.children}</div>
    </div>
  );
};
