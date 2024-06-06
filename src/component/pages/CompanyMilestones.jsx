import React from 'react';
import { Container, Typography, Box, Paper, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMedal } from '@fortawesome/free-solid-svg-icons';

const PREFIX = 'CompanyMilestones';
const classes = {
  root: `${PREFIX}-root`,
  section: `${PREFIX}-section`,
  milestoneBox: `${PREFIX}-milestoneBox`,
  milestoneIcon: `${PREFIX}-milestoneIcon`,
};

const Root = styled('div')(({ theme }) => ({
  [`&.${classes.root}`]: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
  },
  [`& .${classes.section}`]: {
    marginBottom: theme.spacing(4),
  },
  [`& .${classes.milestoneBox}`]: {
    padding: theme.spacing(3),
    marginBottom: theme.spacing(3),
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    borderRadius: theme.spacing(1),
    boxShadow: theme.shadows[3],
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(2),
    },
    '& h4': {
      marginBottom: theme.spacing(1),
      fontSize: '1.5rem',
      color: theme.palette.secondary.main,
      [theme.breakpoints.down('sm')]: {
        fontSize: '1.2rem',
      },
    },
    '& p': {
      fontSize: '1rem',
      [theme.breakpoints.down('sm')]: {
        fontSize: '0.9rem',
      },
    },
  },
  [`& .${classes.milestoneIcon}`]: {
    color: theme.palette.secondary.main,
    fontSize: '2rem',
    marginBottom: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.5rem',
    },
  },
}));

const milestones = [
  {
    year: '2000',
    title: 'Introduction of Cold Pressed Oils',
    description: 'Pioneered the production and distribution of 100% pure cold pressed oils.',
  },
  {
    year: '2005',
    title: 'Organic Farming Practices',
    description: 'Adopted sustainable and organic farming practices to ensure the highest quality products.',
  },
  {
    year: '2010',
    title: 'Industry Recognition',
    description: 'Received multiple awards and recognitions, including the Best Organic Oil Producer.',
  },
  {
    year: '2015',
    title: 'Global Expansion',
    description: 'Expanded operations to serve customers in over 50 countries, reaching millions worldwide.',
  },
  {
    year: '2020',
    title: 'Eco-Friendly Packaging',
    description: 'Implemented eco-friendly packaging solutions to reduce environmental impact.',
  },
];

const CompanyMilestones = () => {
  return (
    <Root className={classes.root}>
      <Container>
        <div className={classes.section}>
          <Typography variant="h4" align="center" gutterBottom>
            Company Milestones and Achievements
          </Typography>
          <Grid container spacing={2}>
            {milestones.map((milestone, index) => (
              <Grid item xs={12} key={index}>
                <Paper className={classes.milestoneBox} elevation={3}>
                  <Box display="flex" alignItems="center" mb={1}>
                    <FontAwesomeIcon icon={faMedal} className={classes.milestoneIcon} />
                    <Typography variant="h4" component="h4" ml={1}>
                      {milestone.year}
                    </Typography>
                  </Box>
                  <Typography variant="subtitle1" gutterBottom>
                    {milestone.title}
                  </Typography>
                  <Typography variant="body2">
                    {milestone.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </div>
      </Container>
    </Root>
  );
};

export default CompanyMilestones;
