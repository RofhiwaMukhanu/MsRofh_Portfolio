import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img 
            src="https://photos.google.com/search/CgAiCgoAEgYKBHICCgAoyuanjvEy/photo/AF1QipONwH5UB1v7dHEwYGb1OBfBjLND-lsK6BKy_pEx" 
            alt="Avatar" 
          />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/RofhiwaMukhanu" target="_blank" rel="noreferrer"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/rofhiwamukhanu" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
          </div>

          <h1>Rofhiwa Christinah Mukhanu</h1>
          <p>Full Stack Developer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/RofhiwaMukhanu" target="_blank" rel="noreferrer"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/rofhiwamukhanu" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
