
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { styled, useTheme } from '@mui/material/styles';
import { Link } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import useMediaQuery from '@mui/material/useMediaQuery';

const PREFIX = 'NavBar';
const classes = {
  root: `${PREFIX}-root`,
  grow: `${PREFIX}-grow`,
  section: `${PREFIX}-section`,
  socialIcons: `${PREFIX}-socialIcons`,
  contactInfo: `${PREFIX}-contactInfo`,
  link: `${PREFIX}-link`,
  mobileSection: `${PREFIX}-mobileSection`,
};

const Root = styled('div')(({ theme }) => ({
  [`&.${classes.root}`]: {
    flexGrow: 1,
  },
  [`& .${classes.grow}`]: {
    flexGrow: 1,
  },
  [`& .${classes.section}`]: {
    display: 'flex',
    alignItems: 'center',
  },
  [`& .${classes.socialIcons}`]: {
    marginRight: theme.spacing(2),
    '& a': {
      color: theme.palette.common.white,
      marginRight: theme.spacing(1),
      '&:hover': {
        color: theme.palette.secondary.main,
      },
    },
  },
  [`& .${classes.contactInfo}`]: {
    display: 'flex',
    alignItems: 'center',
    '& a': {
      color: theme.palette.common.white,
      marginLeft: theme.spacing(1),
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
      '&:hover': {
        color: theme.palette.secondary.main,
      },
    },
  },
  [`& .${classes.mobileSection}`]: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(2),
  },
}));

const SocailMediaNavbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Root className={classes.root}>
      <AppBar position="static" sx={{ backgroundColor: '#61845f' }}>
        <Toolbar>
          {isMobile ? (
            <div className={classes.mobileSection}>
              <div className={classes.socialIcons}>
                <Link href="https://www.instagram.com" target="_blank">
                  <IconButton edge="start" color="inherit" aria-label="instagram">
                    <InstagramIcon />
                  </IconButton>
                </Link>
                <Link href="https://www.facebook.com" target="_blank">
                  <IconButton edge="start" color="inherit" aria-label="facebook">
                    <FacebookIcon />
                  </IconButton>
                </Link>
                <Link href="https://www.youtube.com" target="_blank">
                  <IconButton edge="start" color="inherit" aria-label="youtube">
                    <YouTubeIcon />
                  </IconButton>
                </Link>
              </div>
              <div className={classes.contactInfo}>
                <Link href="mailto:sajan.coldpress@gmail.com">
                  <IconButton color="inherit" aria-label="email">
                    <EmailIcon />
                  </IconButton>
                  <Typography variant="body1">sajan.coldpress@gmail.com</Typography>
                </Link>
               
              </div>
            </div>
          ) : (
            <>
              <div className={classes.section}>
                <div className={classes.socialIcons}>
                  <Link href="https://www.instagram.com" target="_blank">
                    <IconButton edge="start" color="inherit" aria-label="instagram">
                      <InstagramIcon />
                    </IconButton>
                  </Link>
                  <Link href="https://www.facebook.com" target="_blank">
                    <IconButton edge="start" color="inherit" aria-label="facebook">
                      <FacebookIcon />
                    </IconButton>
                  </Link>
                  <Link href="https://www.youtube.com" target="_blank">
                    <IconButton edge="start" color="inherit" aria-label="youtube">
                      <YouTubeIcon />
                    </IconButton>
                  </Link>
                </div>
              </div>
              <div className={classes.grow} />
              <div className={classes.contactInfo}>
                <Link href="mailto:sajan.coldpress@gmail.com">
                  <IconButton color="inherit" aria-label="email">
                    <EmailIcon />
                  </IconButton>
                  <Typography variant="body1">sajan.coldpress@gmail.com</Typography>
                </Link>
                <Link href="tel:+911234567890">
                  <IconButton color="inherit" aria-label="phone">
                    <PhoneIcon />
                  </IconButton>
                  <Typography variant="body1">+91 12345 67890</Typography>
                </Link>
              </div>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Root>
  );
};

export default SocailMediaNavbar;
