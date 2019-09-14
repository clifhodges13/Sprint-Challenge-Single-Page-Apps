import React from "react";
import styled from 'styled-components';

export default function CharacterCard({ char }) {
  const StyledCharacterCard = styled.div `
    display: inline-block;
    margin: 15px;
    width: 30%;
    padding: 1% 0;
    text-align: center;
    border: 1px solid #555;
    & img {
      width: 80%;
      height: 80%;
      border-radius: 50%;
    }
  `

  return (
    <StyledCharacterCard>
      <img src={char.image} alt={char.name} />
      <h2>{char.name}</h2>
      <p>{char.species} / {char.status}</p>
      <p>Origin: {char.origin.name}</p>
      <p>Location: {char.location.name}</p>
    </StyledCharacterCard>
  );
}
