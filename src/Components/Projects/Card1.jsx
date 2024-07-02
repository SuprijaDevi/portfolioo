import * as React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Box } from '@mui/material';
import Samadhan from '../../assets/samadhanmithra.png';
import './Projects.css'; 

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%', 
  bgcolor: 'rgba(255, 255, 255, 255)',
  border: '2px solid #fff',
  boxShadow: 24,
  p: 4,
};

export default function Card1() {
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
            image={Samadhan}
            alt="samadhanmithra"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              SAMADHANMITHRA
            </Typography>
            <Typography variant="body2" color="grey">
            Incentives based Website for onboarding Legal Service Providers
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
            Our Incentives-Based Website aims to streamline the onboarding of legal 
            service providers by offering a platform that rewards them for joining and 
            contributing to our network. Legal professionals can register, showcase their 
            expertise, and gain access to a wide client base. As an incentive, they earn 
            points and benefits for each milestone achieved, such as completing their profile,
            receiving positive client reviews, and participating in community events. These 
            rewards can be redeemed for premium services, increased visibility, and other perks. 
            This approach not only motivates legal experts to join but also ensures a high-quality
            and engaged community, benefiting both providers and clients.<br />
            CREATED - 12/2023<br />
            Git Link - <a href='https://github.com/SuprijaDevi' alt='link' className='git-link' >https://github.com</a>
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
