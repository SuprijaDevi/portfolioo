import * as React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Box } from '@mui/material';
import Course from '../../assets/online course .png';
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

export default function Card3() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Card sx={{ maxWidth: 345, backgroundColor: '', color: 'black', border: '2px solid white' }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={Course}
            alt="samadhanmithra"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              ONLINE COURSE REG
            </Typography>
            <Typography variant="body2" color="grey">
              Register your courses online and learn from where ever you loved. 
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
            Our online course registration platform allows you to enroll in a wide variety of courses
            and learn from anywhere you prefer. With a user-friendly interface, you can easily browse,
            select, and register for courses that match your interests and career goals. Whether you’re
            at home, in a café, or traveling, our platform provides seamless access to high-quality
            educational content from top instructors and institutions. Enjoy the flexibility of learning
            at your own pace, with resources and support available 24/7. Empower yourself with knowledge
            and skills from the comfort of your chosen environment, and take control of your educational journey today.<br />
            CREATED - 4/2024<br />
            Git Link - <a href='https://github.com/SuprijaDevi/online-course-reg.git' alt='link' className='git-link' >https://github.com</a>
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
