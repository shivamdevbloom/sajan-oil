import React from 'react';
import { Container, Grid, TextField, Button, Typography, Box, Link, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

const PREFIX = 'ContactPage';
const classes = {
  root: `${PREFIX}-root`,
  form: `${PREFIX}-form`,
  contactInfo: `${PREFIX}-contactInfo`,
  map: `${PREFIX}-map`,
  socialMedia: `${PREFIX}-socialMedia`,
  paper: `${PREFIX}-paper`,
};

const Root = styled('div')(({ theme }) => ({
  [`&.${classes.root}`]: {
    padding: theme.spacing(4),
  },
  [`& .${classes.form}`]: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
  },
  [`& .${classes.contactInfo}`]: {
    marginTop: theme.spacing(4),
  },
  [`& .${classes.map}`]: {
    height: '300px',
    width: '100%',
    marginTop: theme.spacing(4),
  },
  [`& .${classes.socialMedia}`]: {
    marginTop: theme.spacing(2),
  },
  [`& .${classes.paper}`]: {
    padding: theme.spacing(2),
    textAlign: 'center',
  },
}));

const ContactPage = (props) => {
  return (
    <Root className={classes.root}>
      <Container>
        <Typography variant="h3" align="center" gutterBottom>
          Contact Us
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper className={classes.paper}>
              <form className={classes.form}>
                <TextField label="Name" variant="outlined" fullWidth />
                <TextField label="Email" variant="outlined" fullWidth />
                <TextField label="Phone Number" variant="outlined" fullWidth />
                <TextField
                  label="Message"
                  variant="outlined"
                  multiline
                  rows={4}
                  fullWidth
                />
                <Button variant="contained" color="primary" type="submit">
                  Send Message
                </Button>
              </form>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper className={classes.paper}>
              <Typography variant="h5" gutterBottom>
                Our Contact Information
              </Typography>
              <Typography variant="body1">
                SRI SUDHEENDRA OILS<br />
                Katamraj Camp, Kallajjanal Village, Mydolalu Post,<br />
                Bhadravathi Taluk, Shivamogga,<br />
                Karnataka 577243, India<br />
              </Typography>
              <Typography variant="body1">
                Phone: +91 (123) 456-7890
              </Typography>
              <Typography variant="body1">
                Email: sajan.coldpress@gmail.com
              </Typography>
              <div className={classes.socialMedia}>
                <Typography variant="h6" gutterBottom>
                  Follow Us
                </Typography>
                <Link href="#" target="_blank" rel="noopener">
                  Facebook
                </Link>
                {' | '}
                <Link href="#" target="_blank" rel="noopener">
                  Twitter
                </Link>
                {' | '}
                <Link href="#" target="_blank" rel="noopener">
                  Instagram
                </Link>
                {' | '}
                <Link href="#" target="_blank" rel="noopener">
                  LinkedIn
                </Link>
              </div>
            </Paper>
          </Grid>
        </Grid>
        
      </Container>
    </Root>
  );
};

export default ContactPage