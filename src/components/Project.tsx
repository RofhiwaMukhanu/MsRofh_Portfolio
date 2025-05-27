import React from 'react';
import { Box, Typography, Grid, Card, CardMedia, CardContent, Button, Stack } from '@mui/material';

const projects = [
  {
    title: "PowerRent Platform",
    description:
      "A peer-to-peer rental app for backup power solutions (inverters, solar panels, etc.). Built with a scalable full stack and JWT authentication.",
    tools: ["Angular", "Flask", "PostgreSQL", "JWT", "SCSS"],
    image: "https://trello.com/1/cards/67eb823c4e41e565431cb6bc/attachments/67eb827802fc93b57e12826d/download/PowerRent_L.png",
    github: "https://github.com/The-DigitalAcademy/PowerRent-Frontend.git"
  },
  {
    title: "Recipe App",
    description:
      "A simple and fun recipe management app where users can browse, view, and organize food recipes. Built with a clean interface and component-based structure.",
    tools: ["HTML", "CSS", "JavaScript", "React"],
    image: "https://www.dish-works.com/wp-content/uploads/Hatch-Chile-Chilaquiles_shot-1.jpg",
    github: "https://github.com/RofhiwaMukhanu/Recipe.git"
  },
  {
    title: "QuizAble",
    description:
      "QuizAble is a preparation quiz platform built with Angular to help candidates succeed in the recruitment process. It familiarizes users with common question types, tools, and processes they may encounter during hiring assessments.",
    tools: ["Angular", "TypeScript", "SCSS"],
    image: "https://trello.com/1/cards/67a9e6b567f01051594df29f/attachments/67a9fa0840776c86255777f7/download/logo.png",
    github: "https://github.com/Tshepiso28/QuizAble.git"
  },
  {
    title: "WatchMax Movie List App",
    description:
      "A sleek and modern movie listing app where users can browse movie posters, view details, and explore different titles. Designed with React and styled with SCSS.",
    tools: ["React", "SCSS", "HTML", "JavaScript"],
    image: "https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,fl_progressive,q_auto,w_1024/670fb5d034f7d3001eb384a1.jpg",
    github: "https://github.com/RofhiwaMukhanu/YourLovedMovies.git"
  }
];

export default function Projects() {
  return (
    <Box sx={{ backgroundColor: '#0D1117', color: '#fff', p: 4 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Projects
      </Typography>
      <Grid container spacing={3}>
        {projects.map((project, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card sx={{ backgroundColor: '#161b22', color: '#fff', height: '100%' }}>
              {project.image && (
                <CardMedia
                  component="img"
                  height="300"
                  image={project.image}
                  alt={project.title}
                  sx={{
                    objectFit: 'cover',
                    width: '100%',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.03)'
                    }
                  }}
                />
              )}
              <CardContent>
                <Typography variant="h6" fontWeight="bold">
                  {project.title}
                </Typography>
                <Typography variant="body2" mt={1}>
                  {project.description}
                </Typography>
                <Stack direction="row" spacing={1} mt={2} flexWrap="wrap">
                  {project.tools.map((tool, idx) => (
                    <Typography
                      key={idx}
                      variant="caption"
                      sx={{ background: '#444', p: '4px 8px', borderRadius: 1 }}
                    >
                      {tool}
                    </Typography>
                  ))}
                </Stack>
                <Stack direction="row" spacing={2} mt={2}>
                  <Button
                    variant="outlined"
                    size="small"
                    href={project.github}
                    target="_blank"
                    sx={{ borderColor: '#fff', color: '#fff' }}
                  >
                    GitHub
                  </Button>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
