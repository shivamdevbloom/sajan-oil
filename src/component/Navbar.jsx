import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { styled, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Link } from 'react-router-dom';
import SocailMediaNavbar from './pages/SocailMediaNavbar';

const PREFIX = 'Navbar';
const classes = {
  root: `${PREFIX}-root`,
  menuButton: `${PREFIX}-menuButton`,
  title: `${PREFIX}-title`,
  navLinks: `${PREFIX}-navLinks`,
  drawerList: `${PREFIX}-drawerList`,
  link: `${PREFIX}-link`
};

const Root = styled('div')(({ theme }) => ({
  [`&.${classes.root}`]: {
    flexGrow: 1,
  },
  [`& .${classes.menuButton}`]: {
    marginRight: theme.spacing(2),
  },
  [`& .${classes.title}`]: {
    flexGrow: 1,
  },
  [`& .${classes.navLinks}`]: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  [`& .${classes.drawerList}`]: {
    width: 250,
  },
  [`& .${classes.link}`]: {
    textDecoration: 'none',
    color: 'red', // Dark grey color for good contrast
    fontSize: '1.1rem', // Increase font size
    fontWeight: 'bold', // Make font bold
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    transition: 'color 0.3s',
    '&:hover': {
      color: 'gray', // Slightly darker grey for hover effect
    },
  },
}));

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawer = (
    <div className={classes.drawerList} role="presentation" onClick={handleDrawerToggle} onKeyDown={handleDrawerToggle}>
      <List>
        {['Home', 'About Us', 'Product Page', 'Contact Us'].map((text, index) => (
          <ListItem button key={text} component={Link} to={`/${text.replace(/\s+/g, '').toLowerCase()}`}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <>
    <SocailMediaNavbar/>
    
    <Root className={classes.root}>
      <AppBar position="static"  sx={{ backgroundColor: 'white', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',paddingBlock:'5px' }}>
        <Toolbar>
          <img src="images\11.jpg" alt="Company Logo" height="80" style={{borderRadius:'100%'}} />
          <Typography variant="h6" className={classes.title}>
           
          </Typography>
          {isMobile ? (
            <>
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleDrawerToggle}>
                <MenuIcon />
              </IconButton>
              <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
                {drawer}
              </Drawer>
            </>
          ) : (
            <div className={classes.navLinks}>
              <Link to="/" className={classes.link}>Home</Link>
              <Link to="/aboutus" className={classes.link}>About Us</Link>
              <Link to="/productpage" className={classes.link}>Product Page</Link>
              <Link to="/contactus" className={classes.link}>Contact Us</Link>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Root>
    </>
  );
};

export default Navbar;
