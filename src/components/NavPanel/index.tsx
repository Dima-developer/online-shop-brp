import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import FavoriteTwoToneIcon from '@material-ui/icons/FavoriteTwoTone';
import CompareTwoToneIcon from '@material-ui/icons/CompareTwoTone';

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
    color: '#212121',
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


const NavPanel:React.FC = () => {
  const classes = useStyles();

  const [sidebar, setSidebar] = React.useState<boolean>(false);

  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent,
  ) => {
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
      role="presentation"
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
            <ListItemText>
                Compared products
            </ListItemText>
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
        <ListItemText primary="Product" />
      </List>
    </div>
  );

  return (
    <Grid container className={classes.panel}>
       <Box className={classes.panelNav}>
        <Box className={classes.panelText}>
          <Link href="#"  underline="none" color="secondary">About</Link>
          <Box className={classes.divideLine} component="span"> | </Box>
          <Link href="#" underline="none" color="secondary">FAQ</Link>
          <Box className={classes.divideLine} component="span"> | </Box>
          <Link href="#" underline="none" color="secondary">Contact</Link>
        </Box>
        <Box className={classes.panelText}> 
          <Link href="#" underline="none" color="secondary" onClick={toggleDrawer(true)}>
            Wishlist <FavoriteTwoToneIcon className={classes.iconHeart}/>
            </Link>
          <Box className={classes.divideLine} component="span">|</Box>
          <Link href="#" underline="none" color="secondary">
             Compare <CompareTwoToneIcon className={classes.iconCompare}/>
          </Link>
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
}
export default NavPanel;