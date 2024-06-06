import React from 'react';
import { Container, Grid, Card, CardActionArea, CardMedia } from '@mui/material';
import { styled } from '@mui/material/styles';

const PREFIX = 'ProductsOverview';
const classes = {
  root: `${PREFIX}-root`,
  card: `${PREFIX}-card`,
  media: `${PREFIX}-media`,
};

const Root = styled('div')(({ theme }) => ({
  [`&.${classes.root}`]: {
    marginTop: theme.spacing(4),
  },
  [`& .${classes.card}`]: {
    maxWidth: '100%',
    margin: 'auto',
    marginBottom: theme.spacing(4),
  },
  [`& .${classes.media}`]: {
    height: 200,
    [theme.breakpoints.up('sm')]: {
      height: 300,
    },
  },
}));

const photos = [
  'https://kaissaoil.com/wp-content/uploads/2017/01/IMG_0218.jpg',
  'https://www.cookingoilmillmachinery.com/uploads/allimg/20220218/20220218145343.jpg',
  'https://media.sciencephoto.com/image/c0473605/800wm/C0473605-Pharmaceutical_drug_production.jpg',
  'https://futureentech.com/wp-content/uploads/2019/05/oil-manufacturing-process.jpg',
  'https://www.abcmach.com/uploads/allimg/sunflower-seed-oil-production.jpg',
  'https://filmdaily.co/wp-content/uploads/2021/11/oil-3.jpeg',
  'https://www.euractiv.com/wp-content/uploads/sites/2/2023/04/Glass-bottles-800x450.jpg',
  'https://i.ytimg.com/vi/tVq70n3sPVc/maxresdefault.jpg',
  'https://khajuriyaagriinternational.com/wp-content/uploads/2023/02/process-1170x658.jpg',
];

const ProductsOverview = () => {
  return (
    <Root className={classes.root}>
      <Container align='center'>
        <Grid container spacing={4}>
          {photos.map((photo, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={photo}
                    title={`Photo ${index + 1}`}
                  />
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Root>
  );
};

export default ProductsOverview;
