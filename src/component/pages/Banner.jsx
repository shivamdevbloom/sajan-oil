import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const PREFIX = 'BannerPage';
const classes = {
  root: `${PREFIX}-root`,
  banner: `${PREFIX}-banner`,
  bannerImage: `${PREFIX}-bannerImage`,
};

const Root = styled('div')(({ theme }) => ({
  [`&.${classes.root}`]: {
    position: 'relative',
    textAlign: 'center',
    backgroundColor: theme.palette.background.default,
  },
  [`& .${classes.banner}`]: {
    position: 'relative',
    height: '100vh',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    [theme.breakpoints.down('sm')]: {
      height: '30vh',
    },
  },
}));

const BannerPage = ({ imageurl }) => {
  return (
    <Root className={classes.root}>
      <Box className={classes.banner} style={{ backgroundImage: `url(${imageurl})` }} />
    </Root>
  );
};

export default BannerPage;
