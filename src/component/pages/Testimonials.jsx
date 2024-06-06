import React from 'react';
import { Container, Grid, Card, CardContent, Typography, Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';

const PREFIX = 'Testimonials';
const classes = {
  root: `${PREFIX}-root`,
  card: `${PREFIX}-card`,
  avatar: `${PREFIX}-avatar`,
  testimonialText: `${PREFIX}-testimonialText`,
  customerName: `${PREFIX}-customerName`
};

const Root = styled('div')(({ theme }) => ({
  [`&.${classes.root}`]: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  [`& .${classes.card}`]: {
    maxWidth: 345,
    margin: 'auto',
    marginBottom: theme.spacing(4),
    padding: theme.spacing(2),
  },
  [`& .${classes.avatar}`]: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    marginRight: theme.spacing(2),
  },
  [`& .${classes.testimonialText}`]: {
    fontStyle: 'italic',
  },
  [`& .${classes.customerName}`]: {
    marginTop: theme.spacing(1),
    fontWeight: 'bold',
  },
}));

const testimonials = [
  {
    name: 'John Doe',
    image: '/images/john_doe.jpg',
    text: 'This company provided excellent service and I am very satisfied with the product quality!',
  },
  {
    name: 'Jane Smith',
    image: '/images/jane_smith.jpg',
    text: 'Fantastic experience! The staff were very helpful and the products exceeded my expectations.',
  },
  {
    name: 'Mike Johnson',
    image: '/images/mike_johnson.jpg',
    text: 'Highly recommend this company! The customer support was outstanding and the delivery was quick.',
  },
  
];

const Testimonials = () => {
  return (
    <Root className={classes.root}>
      <Container>
        <Typography variant="h4" gutterBottom>
          Customer Testimonials
        </Typography>
        <Grid container spacing={4}>
          {testimonials.map((testimonial) => (
            <Grid item xs={12} sm={6} md={4} key={testimonial.name}>
              <Card className={classes.card}>
                <Grid container alignItems="center">
                  <Avatar src={testimonial.image} className={classes.avatar} />
                  <CardContent>
                    <Typography variant="body1" className={classes.testimonialText}>
                      "{testimonial.text}"
                    </Typography>
                    <Typography variant="body2" className={classes.customerName}>
                      - {testimonial.name}
                    </Typography>
                  </CardContent>
                </Grid>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Root>
  );
};

export default Testimonials;
