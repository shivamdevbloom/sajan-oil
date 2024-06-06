import React from 'react';
import { Container, Grid, Card, CardMedia, CardContent, Typography, Button, Link } from '@mui/material';
import { styled } from '@mui/material/styles';

const PREFIX = 'ProductPage';
const classes = {
  root: `${PREFIX}-root`,
  card: `${PREFIX}-card`,
  media: `${PREFIX}-media`,
  content: `${PREFIX}-content`,
  button: `${PREFIX}-button`,
  buttonContainer: `${PREFIX}-buttonContainer`,
};

const Root = styled('div')(({ theme }) => ({
  [`&.${classes.root}`]: {
    padding: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(2),
    },
  },
  [`& .${classes.card}`]: {
    maxWidth: 345,
    margin: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      maxWidth: '100%',
      margin: theme.spacing(1, 0),
    },
  },
  [`& .${classes.media}`]: {
    height: 200,
  },
  [`& .${classes.content}`]: {
    textAlign: 'center',
  },
  [`& .${classes.button}`]: {
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(0.5),
    },
  },
  [`& .${classes.buttonContainer}`]: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(0),
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
}));

const products = [
  {
    name: 'SUNFLOWER OIL',
    image: 'https://th.bing.com/th/id/OIP.cWZkVrsQY_0efm0KG0oZ8wHaE8?rs=1&pid=ImgDetMain',
    description: 'Rich source of Vitamin E. Promotes Heart Health. Improves Digestion. Strengthens Immunity System. Prevents Cancer.',
    price: '$25',
    amazonLink: 'https://www.amazon.com/',
    flipkartLink: 'https://www.flipkart.com/',
  },
  {
    name: 'GROUNDNUT OIL',
    image: 'https://goodness-farm.com/wp-content/uploads/2021/04/GROUNDNUT-OIL-7-scaled.jpg',
    description: 'Rich in Nutrients and Antioxidants. Lowers lipid levels. Controls Diabetes. Improves Skin and Hair health. Anti-ageing Properties.',
    price: '$30',
    amazonLink: 'https://www.amazon.com/',
    flipkartLink: 'https://www.flipkart.com/',
  },
  {
    name: 'MUSTARD OIL',
    image: 'https://imgk.timesnownews.com/story/mustard-oil.gif',
    description: 'Promotes skin & Hair Health. Reduces Inflammation. Supports Cardiac Health. Improves immunity.',
    price: '$35',
    amazonLink: 'https://www.amazon.com/',
    flipkartLink: 'https://www.flipkart.com/',
  },
  {
    name: 'SESAME OIL',
    image: 'https://www.thespruceeats.com/thmb/qnYfAXrKUaUxqEIGplhlqV7pm-U=/2121x1414/filters:fill(auto,1)/GettyImages-956051996-250a353f1d454a51bb8e48d09f9b9bc7.jpg',
    description: 'Rich in proteins, Vitamins, and Antioxidants. Good for Heart. Lowers Blood Pressure. Improves Bone Health. Regulates Blood Sugar.',
    price: '$35',
    amazonLink: 'https://www.amazon.com/',
    flipkartLink: 'https://www.flipkart.com/',
  },
  {
    name: 'COCONUT OIL',
    image: 'https://th.bing.com/th/id/OIP.Ab7GqGJqHZoqU4K21ixE2QHaE-?rs=1&pid=ImgDetMain',
    description: 'Contains Vitamin C and Vitamin E. Moisturizes the Hair and Scalp. Good for skin health. Good for Heart. Helps in Weight Loss.',
    price: '$35',
    amazonLink: 'https://www.amazon.com/',
    flipkartLink: 'https://www.flipkart.com/',
  },
  {
    name: 'SAFFLOWER OIL',
    image: 'https://i.zoomtventertainment.com/story/safflower_oil_benefits.jpg',
    description: 'Rich Source of Fatty Acids. Manages Blood Sugar Levels. Lowers Cholesterol. Soothes dry skin.',
    price: '$35',
    amazonLink: 'https://www.amazon.com/',
    flipkartLink: 'https://www.flipkart.com/',
  },
  {
    name: 'ALMOND OIL',
    image: 'https://www.spiceography.com/wp-content/uploads/2020/10/Almond-Oil.jpg',
    description: 'Rich in Antioxidants. Improves skin health. Good for hair growth. Lowers Cholesterol. Controls Blood Sugar. Helps in Weight Loss.',
    price: '$35',
    amazonLink: 'https://www.amazon.com/',
    flipkartLink: 'https://www.flipkart.com/',
  },
  {
    name: 'KALONJI OIL',
    image: 'https://www.brightcures.com/wp-content/uploads/2021/04/black-seed-oil-1024x683.jpg',
    description: 'Boosts Memory. Controls Diabetes. Makes Teeth Stronger. Relieves Asthma. Protects Kidney.',
    price: '$35',
    amazonLink: 'https://www.amazon.com/',
    flipkartLink: 'https://www.flipkart.com/',
  },
  {
    name: 'NIGER SEED OIL',
    image: 'https://5.imimg.com/data5/SELLER/Default/2022/4/VC/GS/NA/151504467/500ml-niger-seed-oil-1000x1000.jpg',
    description: 'Rich with Beneficial Fatty Acids. Contains Fibre, Proteins, and Carbohydrates. Helps Treat Insomnia. Relieves Gastrointestinal issues.',
    price: '$35',
    amazonLink: 'https://www.amazon.com/',
    flipkartLink: 'https://www.flipkart.com/',
  }
];

const ProductPage = () => {
  return (
    <Root className={classes.root}>
      <Container>
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{ fontSize: { xs: '24px', sm: '30px', md: '36px' }, fontWeight: 'bold', color: 'primary.main' }}
        >
         Discover Our Selection of Pure Oils
        </Typography>

        <Grid container justifyContent="center">
          {products.map((product, index) => (
            <Grid item key={index}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.media}
                  image={product.image}
                  title={product.name}
                />
                <CardContent className={classes.content}>
                  <Typography variant="h5" gutterBottom>
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {product.description}
                  </Typography>

                  <Typography variant="body2" gutterBottom sx={{ fontSize: '22px', marginTop: '10px', color: 'blue' }}>
                    Buy From
                  </Typography>
                  <div className={classes.buttonContainer}>
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.button}
                      component={Link}
                      href={product.amazonLink}
                      target="_blank"
                    >
                      Amazon
                    </Button>
                    <Button
                      variant="contained"
                      color="secondary"
                      className={classes.button}
                      component={Link}
                      href={product.flipkartLink}
                      target="_blank"
                    >
                      Flipkart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Root>
  );
};

export default ProductPage;
