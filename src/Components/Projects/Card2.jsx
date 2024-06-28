import * as React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Box } from '@mui/material';
import ATS from '../../assets/ats.png';
import './Projects.css';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%', 
  bgcolor: 'rgba(255, 255, 255, 0.9)',
  border: '2px solid #fff',
  boxShadow: 24,
  p: 4,
};

export default function Card2() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Card sx={{ maxWidth: 345, backgroundColor: 'black', color: 'white', border: '2px solid white' }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={ATS}
            alt="samadhanmithra"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              ATS
            </Typography>
            <Typography variant="body2" color="grey">
              Workloom helps track your resume for acheiving your Dream Company.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" onClick={handleOpen}>
            View
          </Button>
        </CardActions>
      </Card>
      <div className={`project-popup ${open ? 'open' : ''}`}>
        <Box sx={style}>
          <div className="description">
            <Typography id="modal-modal-description" sx={{ mt: 2 }} fontFamily="verdana" textAlign="left">
            Workloom is a cutting-edge platform designed to help you track and optimize your resume 
            for landing your dream job. By analyzing your resume against job listings from top companies, 
            Workloom provides personalized feedback to enhance your application. It keeps you updated on the 
            status of your applications, highlighting areas for improvement and offering tips to increase your
            chances of success. With a focus on goal-oriented progress, Workloom ensures you stay on top of your
            job search, making the journey to your dream company structured and efficient. Start using Workloom
            today and take a step closer to your ideal career.<br />
            CREATED - 1/2024<br />
            Git Link - <a href='https://github.com/SuprijaDevi/Application-Tracking-System.git' alt='link' className='git-link' >https://github.com</a>
            </Typography>
          </div><br />
          <Button size="small" color="primary" onClick={handleClose}>
            Close
          </Button>
        </Box>
      </div>
    </div>
  );
}
