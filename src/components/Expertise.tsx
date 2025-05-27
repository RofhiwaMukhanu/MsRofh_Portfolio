import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFrontend = [
    "HTML5",
    "CSS3",
    "SCSS",
    "JavaScript",
    "TypeScript",
    "Angular",
    "React"
];

const labelsBackend = [
    "Python",
    "Flask",
    "PostgreSQL",
    "REST APIs",
    "JWT Auth"
];

const labelsTools = [
    "Git",
    "GitHub",
    "VS Code",
    "Postman",
    "Docker (basic)",
    "Netlify",
    "Figma" // ✅ Figma added here
];

function Expertise() {
    return (
        <div className="container" id="expertise">
            <div className="skills-container">
                <h1>Expertise</h1>
                <div className="skills-grid">

                    <div className="skill">
                        <FontAwesomeIcon icon={faReact} size="3x" />
                        <h3>Frontend Development</h3>
                        <p>
                            At Shaper, I learned to build responsive and interactive user interfaces using modern frontend tools. I'm confident in working with Angular, React, and TypeScript to create clean and functional designs.
                        </p>
                        <div className="flex-chips">
                            <span className="chip-title">Technologies:</span>
                            {labelsFrontend.map((label, index) => (
                                <Chip key={index} className="chip" label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faPython} size="3x" />
                        <h3>Backend Development</h3>
                        <p>
                            I’ve built secure and scalable APIs using Python and Flask. I also implemented user authentication with JWT and connected apps to PostgreSQL databases.
                        </p>
                        <div className="flex-chips">
                            <span className="chip-title">Technologies:</span>
                            {labelsBackend.map((label, index) => (
                                <Chip key={index} className="chip" label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faDocker} size="3x" />
                        <h3>Tools & Deployment</h3>
                        <p>
                            I use essential tools like Git, Postman, and VS Code daily. I also practiced deploying apps with Netlify and explored Docker basics. I design and plan UI layouts using Figma.
                        </p>
                        <div className="flex-chips">
                            <span className="chip-title">Tools:</span>
                            {labelsTools.map((label, index) => (
                                <Chip key={index} className="chip" label={label} />
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Expertise;
