import React from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import CompareTwoToneIcon from '@mui/icons-material/CompareTwoTone';
import theme from '../../theme/theme';

const useStyles = makeStyles({
  panel: {
    backgroundColor: '#e0e0e0',
  },
  panelNav: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '95%',
    height: '40px',
    margin: '0 auto',
  },
  panelText: {
    fontSize: 16,
    fontWeight: 600,
    lineHeight: '40px',
  },
  panelLinks: {
    color: theme.navigation.main,
  },
  divideLine: {
    margin: 'auto 10px',
  },
  iconHeart: {
    display: 'inline-block',
    width: '16px',
    height: '16px',
    marginBottom: '-3px',
  },
  iconCompare: {
    display: 'inline-block',
    width: '16px',
    height: '16px',
    marginBottom: '-3px',
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

const NavPanel: React.FC = () => {
  const classes = useStyles();

  const [sidebar, setSidebar] = React.useState<boolean>(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setSidebar(open);
    };

  const list = (anchor: string) => (
    <div
      className={classes.list}
      role='presentation'
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {/* {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))} */}
        <ListItem>
          <ListItemText>Compared products</ListItemText>
        </ListItem>
      </List>
      <Divider />
      <List>
        {/* {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))} */}
        <ListItemText primary='Product' />
      </List>
    </div>
  );

  return (
    <Grid container className={classes.panel}>
      <Box className={classes.panelNav}>
        <Box component='div' className={classes.panelText}>
          <NavLink
            style={{ textDecoration: 'none' }}
            to='/about'
            className={classes.panelLinks}
          >
            About
          </NavLink>
          <Box className={classes.divideLine} component='span'></Box>
          <NavLink
            style={{ textDecoration: 'none' }}
            to='/faq'
            className={classes.panelLinks}
          >
            FAQ
          </NavLink>
          <Box className={classes.divideLine} component='span'></Box>
          <NavLink
            style={{ textDecoration: 'none' }}
            to='/contact'
            className={classes.panelLinks}
          >
            Contact
          </NavLink>
        </Box>
        <Box component='div' className={classes.panelText}>
          <Link
            href='#'
            underline='none'
            color={theme.navigation.main}
            onClick={toggleDrawer(true)}
          >
            Wishlist <FavoriteTwoToneIcon className={classes.iconHeart} />
          </Link>
          <Box className={classes.divideLine} component='span'>
            |
          </Box>
          <NavLink
            to='compare'
            style={{ textDecoration: 'none' }}
            className={classes.panelLinks}
          >
            Compare <CompareTwoToneIcon className={classes.iconCompare} />
          </NavLink>
        </Box>
      </Box>

      <Drawer anchor='right' open={sidebar} onClose={toggleDrawer(false)}>
        {list('right')}
      </Drawer>

      {/* {(['left', 'right', 'top', 'bottom'] as Anchor[]).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))} */}
    </Grid>
  );
};
export default NavPanel;
