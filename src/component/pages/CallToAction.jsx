import React from 'react';
import { Container, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const PREFIX = 'CallToAction';
const classes = {
  root: `${PREFIX}-root`,
  button: `${PREFIX}-button`,
};

const Root = styled('div')(({ theme }) => ({
  [`&.${classes.root}`]: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
    },
  },
  [`& .${classes.button}`]: {
    margin: theme.spacing(1),
    padding: theme.spacing(1, 4),
    fontSize: '1rem',
    [theme.breakpoints.up('sm')]: {
      fontSize: '1.25rem',
      margin: theme.spacing(2),

    },
  },
}));

const CallToAction = () => {
  return (
    <Root className={classes.root}>
      <Button variant="contained" color="primary" className={classes.button}>
        Learn More
      </Button>
      <Button variant="outlined" color="secondary" className={classes.button}>
        Contact Us
      </Button>
    </Root>
  );
};

export default CallToAction;
