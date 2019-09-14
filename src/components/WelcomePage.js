import React from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function WelcomePage() {
  const StyledWelcomeSection = styled.section `
    padding: 2%;
    margin: 2%;
    border: 1px solid #555;
    border-radius: 10px;
    box-shadow: 0 1rem 1rem rgba(0,0,0,.6);
    height: 500px;
  `
  const StyledButton = styled.div `
    padding: 1% 2%;
    background: skyblue;
    color: white;
    text-align: center;
    width: 30%;
    margin: 20px auto;
    border-radius: 10px;
  `

  return (
    <StyledWelcomeSection className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <img
          className="main-img ui centered medium circular image"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
        <StyledButton>
          <Link to="/characters">Start Here!</Link>
        </StyledButton>
      </header>
    </StyledWelcomeSection>
  );
}
