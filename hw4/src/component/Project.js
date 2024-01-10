// Projects.js
import React from "react";
import styled from "styled-components";
import painter from '../assets/painter.jpg';

const ProjectsWrapper = styled.section`
  padding: 2rem;
  background-color: #f8f9fa;
`;

const ProjectCard = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  margin-bottom: 1.5rem;

  h3 {
    margin-bottom: 1rem;
  }
`;

const Projects = () => {
  return (
    <ProjectsWrapper>
      <h2>Projects</h2>
      <ProjectCard>
        <h3>Painter App</h3>
        <p>
          Painter is a cutting-edge paint app designed to elevate your artistic
          experience with powerful tools, a vibrant color palette, and the
          ability to manage your creative process seamlessly. Whether you're a
          professional artist or a creative enthusiast, Painter offers a
          feature-rich environment to bring your imagination to life.
        </p>
        <a href="https://painter-neon.vercel.app/">LinkDemo</a>
      </ProjectCard>
    </ProjectsWrapper>
  );
};

export default Projects;
