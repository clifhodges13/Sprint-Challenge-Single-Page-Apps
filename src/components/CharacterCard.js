import React from "react";

export default function CharacterCard(props) {
  return (
    <div>
      <img src={props.char.image} alt={props.char.name} />
      <h2>{props.char.name}</h2>
      <p>{props.char.species} / {props.char.status}</p>
      <p>Origin: {props.char.origin.name}</p>
      <p>Current Location: {props.char.location.name}</p>
    </div>
  );
}
