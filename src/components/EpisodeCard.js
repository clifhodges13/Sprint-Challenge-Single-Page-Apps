import React from 'react';
import styled from 'styled-components';

export default function EpisodeCard({ episode }) {
  const StyledEpisodeCard = styled.div `
    width: 25%;
    border: 1px solid green;
    margin: 10px;
    padding: 1%;
    border-radius: 5px;
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
