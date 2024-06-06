import React from 'react';
import { Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import ProductsOverview from './ProductsOverview';
import Testimonials from './Testimonials';
import Banner from './Banner';
import BannerPage from './Banner';

const PREFIX = 'Header';
const classes = {
  root: `${PREFIX}-root`,
  title: `${PREFIX}-title`,
  introduction: `${PREFIX}-introduction`
};

const Root = styled('div')(({ theme }) => ({
  [`&.${classes.root}`]: {
    padding: theme.spacing(4),
    textAlign: 'center',
    [theme.breakpoints.up('sm')]: {
      marginTop:"55px"
    },
  },
  [`& .${classes.title}`]: {
    color: 'red',
    fontSize: '2rem',
    fontWeight: 'bold',
    [theme.breakpoints.up('sm')]: {
      fontSize: '3.5rem',
      width: '70%', 
      margin: '0 auto'
    },
  },
  [`& .${classes.introduction}`]: {
    color: 'black',
    fontSize: '1rem',
    marginTop: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      fontSize: '1.30rem',
      width: '70%', 
      margin: '0 auto',
      marginTop:"18px"
    },
  },
}));

const Header = () => {
  return (
    <>
    <BannerPage imageurl="images/homeimage.png"/>
    <Root className={classes.root}>
      <Typography variant="h2" className={classes.title}>
      SAJAN Cold Pressed Oil
      </Typography>
      <Typography variant="body1" className={classes.introduction}>
      SAJAN Cold pressed oils are produced using the best quality raw materials 
directly procured from farmers, well dried and sorted seeds. SAJAN Cold pressed 
oils are extracted organically to retain their original flavour, taste, aroma, and 
nutrients like heart-healthy fats, vitamins and antioxidants.       </Typography>
    </Root>
    <ProductsOverview/>
    <Testimonials/>
    </>
  );
};

export default Header;
