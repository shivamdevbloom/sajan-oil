import React from 'react';
import { Container, Grid, Typography, Link, Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';

const PREFIX = 'Footer';
const classes = {
  root: `${PREFIX}-root`,
  section: `${PREFIX}-section`,
  link: `${PREFIX}-link`,
  logo: `${PREFIX}-logo`,
};

const Root = styled('div')(({ theme }) => ({
  [`&.${classes.root}`]: {
    backgroundColor: '#61845f',
    color: theme.palette.common.white,
    padding: theme.spacing(4),
    marginTop: theme.spacing(4),
  },
  [`& .${classes.section}`]: {
    marginBottom: theme.spacing(2),
  },
  [`& .${classes.link}`]: {
    color: theme.palette.common.white,
    textDecoration: 'none',
    marginBottom: theme.spacing(1),
    display: 'block',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  [`& .${classes.logo}`]: {
    width: theme.spacing(17),
    height: theme.spacing(17),
    marginRight: theme.spacing(2),
  },
}));

const Footer = () => {
  return (
    <Root className={classes.root}>
      <Container align='center'>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} sm={3}>
            <Avatar 
              src="images\11.jpg" 
              alt="Company Logo" 
              className={classes.logo} 
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <div className={classes.section}>
              <Typography variant="h6">Address</Typography>
              <Typography variant="body2">
                1234 Main St<br />
                Anytown, USA 12345
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={3}>
            <div className={classes.section}>
              <Typography variant="h6">Contact Us</Typography>
              <Typography variant="body2">
                Phone: (123) 456-7890<br />
                Email: info@company.com
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={3}>
            <div className={classes.section}>
              <Typography variant="h6">Links</Typography>
              <Link component={RouterLink} to="/" className={classes.link}>Home</Link>
              <Link component={RouterLink} to="/aboutus" className={classes.link}>About Us</Link>
              <Link component={RouterLink} to="/productpage" className={classes.link}>Product Page</Link>
              <Link component={RouterLink} to="/contactus" className={classes.link}>Contact Us</Link>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Root>
  );
};

export default Footer;
