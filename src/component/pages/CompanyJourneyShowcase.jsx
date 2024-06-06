import React from 'react';
import { Container, Typography, Grid, Card, CardMedia } from '@mui/material';
import { styled } from '@mui/material/styles';

const PREFIX = 'CompanyJourneyShowcase';
const classes = {
  root: `${PREFIX}-root`,
  section: `${PREFIX}-section`,
  mediaCard: `${PREFIX}-mediaCard`,
};

const Root = styled('div')(({ theme }) => ({
  [`&.${classes.root}`]: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
  },
  [`& .${classes.section}`]: {
    marginBottom: theme.spacing(4),
    textAlign: 'center',
  },
  [`& .${classes.mediaCard}`]: {
    height: 300,
    [theme.breakpoints.down('sm')]: {
      height: 200,
    },
  },
}));

const mediaItems = [
  {
    type: 'image',
    src: 'https://i.pinimg.com/736x/f4/55/d5/f455d597abb0a382b3c92f2f3aa60e5a.jpg',
    alt: 'Company Journey 1',
  },
  {
    type: 'image',
    src: 'https://th.bing.com/th/id/OIP.o8LGtaZ8_feH1QcV-8aS0wHaEL?rs=1&pid=ImgDetMain',
    alt: 'Company Journey 2',
  },
  {
    type: 'image',
    src: 'https://th.bing.com/th/id/OIP.YNmvC57V7ykeVjNHXeHCRwHaF7?w=500&h=400&rs=1&pid=ImgDetMain',
    alt: 'Company Journey 3',
  },
  {
    type: 'video',
    src: 'https://www.w3schools.com/html/mov_bbb.mp4',
    alt: 'Company Journey Video 1',
  },
  {
    type: 'image',
    src: 'https://5.imimg.com/data5/SQ/PU/CJ/ANDROID-82493155/product-jpeg-500x500.jpg',
    alt: 'Company Journey 4',
  },
  {
    type: 'video',
    src: 'https://www.w3schools.com/html/mov_bbb.mp4',
    alt: 'Company Journey Video 2',
  },
];

const CompanyJourneyShowcase = () => {
  return (
    <Root className={classes.root}>
      <Container>
        <div className={classes.section}>
          <Typography variant="h4" align="center" gutterBottom>
            Our Journey Through the Years
          </Typography>
          <Typography variant="subtitle1" align="center" gutterBottom>
            High-quality images and videos showcasing the company’s journey and achievements over the years.
          </Typography>
          <Grid container spacing={3}>
            {mediaItems.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card>
                  {item.type === 'image' ? (
                    <CardMedia
                      component="img"
                      alt={item.alt}
                      image={item.src}
                      className={classes.mediaCard}
                    />
                  ) : (
                    <CardMedia
                      component="video"
                      alt={item.alt}
                      image={item.src}
                      className={classes.mediaCard}
                      controls
                    />
                  )}
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      </Container>
    </Root>
  );
};

export default CompanyJourneyShowcase;
