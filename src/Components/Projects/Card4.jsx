import * as React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Box } from '@mui/material';
import Chat from 'E:/portfolioo/src/assets/chatbot.png';
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

export default function Card4() {
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
            image={Chat}
            alt="samadhanmithra"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              CHATBOT
            </Typography>
            <Typography variant="body2" color="grey">
              Chatbot will always be your Smart and Fast Conversation Partner 
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
            Our chatbot is designed to be your smart and fast conversation partner, ready to assist you 24/7. 
            Leveraging advanced AI technology, it provides quick and accurate responses to your queries, ensuring
            a seamless and engaging interaction. Whether you need help with information, tasks, or just a friendly
            chat, our chatbot is here to offer reliable support. Its intuitive design and learning capabilities
            mean it constantly improves to better understand and anticipate your needs. Experience the convenience
            of having a knowledgeable and responsive companion at your fingertips, anytime and anywhere..<br />
            CREATED - 5/2024<br />
            Git Link - <a href='https://github.com/SuprijaDevi/chatbox.git' alt='link' className='git-link' >https://github.com</a>
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
