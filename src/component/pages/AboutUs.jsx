import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import CompanyMilestones from './CompanyMilestones';
import CompanyJourneyShowcase from './CompanyJourneyShowcase';
import BannerPage from './Banner';

const PREFIX = 'AboutUs';
const classes = {
  root: `${PREFIX}-root`,
  section: `${PREFIX}-section`,
  media: `${PREFIX}-media`,
  card: `${PREFIX}-card`,
  bio: `${PREFIX}-bio`,
  milestone: `${PREFIX}-milestone`,
  imageSection: `${PREFIX}-imageSection`,
  title: `${PREFIX}-title`,
};

const Root = styled('div')(({ theme }) => ({
  [`&.${classes.root}`]: {
    padding: theme.spacing(4),
  },
  [`& .${classes.section}`]: {
    marginBottom: theme.spacing(6),
  },
  [`& .${classes.media}`]: {
    height: 330,

  },
  [`& .${classes.card}`]: {
    marginBottom: theme.spacing(4),
  },
  [`& .${classes.bio}`]: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  [`& .${classes.milestone}`]: {
    marginBottom: theme.spacing(2),
  },
  [`& .${classes.imageSection}`]: {
    textAlign: 'center',
  },
  [`& .${classes.title}`]: {
    marginBottom: theme.spacing(2),
    color: theme.palette.primary.main,
    textTransform: 'uppercase',
  },
}));


const AboutUs = () => {
  return (
    <>
    <BannerPage imageurl="images/aboutUs.png"/>
      <Root className={classes.root}>
        <Container>
         <div  className='imagebox'>
         <div className={classes.section}  id="aboutcontentbox">
            <Typography variant="h3" className={classes.title} gutterBottom>
              About Us
            </Typography>
            <Typography variant="body1">
              Welcome to SAJAN Cold Pressed Oils!
              At SAJAN, we are dedicated to providing natural, high-quality food-grade oils. Our oils are produced by M/s. Sri Sudheendra Oils, ensuring sustainable and chemical-free products. We source the best raw materials directly from farmers, carefully drying and sorting the seeds. Our cold pressed oils are extracted organically to preserve their original flavor, aroma, and nutrients, including heart-healthy fats, vitamins, and antioxidants.
              Choose SAJAN Cold Pressed Oils for a healthier, more natural cooking experience. Thank you for trusting us to bring the best of nature to your table.          </Typography>
          </div>
          <div className='img'>
             <img src='images/About.jpg' height={'100%'} width={'100%'}/>
          </div>
         </div>


<div className={classes.section}>
  <Typography variant="h4" gutterBottom>
    Company Details
  </Typography>
  <Typography variant="body1">
    <strong>SAJAN Cold Pressed Oils</strong><br/>
    <strong>Parent Company:</strong> M/s. Sri Sudheendra Oils<br/>
    <strong>Location:</strong> Katamraj Camp, Kallajjanal Village, Mydolalu Post, Bhadravathi Taluk, Shivamogga, Karnataka 577243, India<br/>
    <strong>License Number:</strong> 21223143000105<br/>
  </Typography>
</div>

<div className={classes.section}>
 
  <Typography variant="body1">
    SAJAN Cold Pressed Oils, produced by M/s. Sri Sudheendra Oils, offers natural, sustainable, and chemical-free food-grade oils. We source premium raw materials directly from farmers and use a cold pressing technique to retain original flavor, aroma, and nutrients.
  </Typography>
</div>

<div className={classes.section}>
  <Typography variant="h4" gutterBottom>
    Our Mission
  </Typography>
  <Typography variant="body1">
    To provide pure, natural oils while supporting sustainable farming and promoting health and well-being.
  </Typography>
</div>

<div className={classes.section}>
  <Typography variant="h4" gutterBottom>
    Feedback and Complaints
  </Typography>
  <Typography variant="body1">
    We take great care to ensure the integrity of our products. For any feedback or complaints, please contact our customer care manager at the provided contact information.
  </Typography>
</div>


          <div className={classes.section}>
            <Typography variant="h4" gutterBottom>
              Mission and Core Values
            </Typography>
            <Typography variant="body1">
            Our mission at SAJAN Cold Pressed Oils is to deliver pure, natural oils while supporting sustainable farming and promoting health and well-being. We value purity, sustainability, quality, health, integrity, community, and customer satisfaction. By using the finest raw materials and cold pressing techniques, we ensure our oils retain their original flavor, aroma, and nutrients. We are dedicated to environmental responsibility, fair trade practices, and providing exceptional service to our customers.            </Typography>
          </div>

        
          <CompanyMilestones />


        </Container>
      </Root>
      <CompanyJourneyShowcase />
    </>
  );
};

export default AboutUs;
