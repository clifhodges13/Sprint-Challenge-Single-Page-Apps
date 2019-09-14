import React from 'react';
import styled from 'styled-components';

export default function EpisodeCard({ episode }) {
  const StyledEpisodeCard = styled.div `
    width: 25%;
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
    <StyledEpisodeCard>
      <h2>{episode.name}</h2>
      <p>Air Date: {episode.air_date}</p>
      <p>Episode No.: {episode.episode}</p>
      <p>{episode.characters.length} Characters</p>
    </StyledEpisodeCard>
  )
}
