import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss';

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/RofhiwaMukhanu" target="_blank" rel="noreferrer"><GitHubIcon /></a>
        <a href="https://www.linkedin.com/in/rofhiwa-christinah-mukhanu-04a380306" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
      </div>
      <p>
        © {new Date().getFullYear()} Built by Rofhiwa Christinah Mukhanu with 💜 
        <br />
        Based on a template by <a href="https://github.com/RofhiwaMukhanu" target="_blank" rel="noreferrer">Rofhiwa</a>
      </p>
    </footer>
  );
}

export default Footer;
