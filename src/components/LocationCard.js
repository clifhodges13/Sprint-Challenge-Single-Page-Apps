import React from "react";
import styled from 'styled-components';

export default function LocationCard({ loc }) {
  const StyledLocationCard = styled.div `
    width: 25%;
    border: 1px solid grey;
    margin: 10px;
    padding: 1%;
    border-radius: 5px;
    box-shadow: 0 1rem 1rem rgba(0,0,0,.6);
    transition: all .3s ease-out;
    &:hover {
      transform: translateY(-5px) scale(1.02);
    }
  `
  
  return (
    <StyledLocationCard>
      <h2>Name: {loc.name}</h2>
      <p>Type: {loc.type}</p>
      <p>Dimension: {loc.dimension}</p>
      <p>{loc.residents.length} Residents</p>
    </StyledLocationCard>
  );
}
