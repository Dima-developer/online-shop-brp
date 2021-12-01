import React from 'react';
import NavBlock from './containers/NavBlock';
import Slider from './components/Slider';
import { Box } from '@mui/system';
import { makeStyles } from '@mui/styles';
import theme from './theme/theme';

// import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    width: '100%',
    padding: '0 1.25rem',
    [theme.breakpoints.up('tablet')]: {
      width: '61.5rem',
      padding: 0,
      margin: '0 auto',
    },
    [theme.breakpoints.up('lg')]: {
      width: '75rem',
    },
  }
});

const App: React.FC = () => {
  const classes = useStyles();
  return (
  <div>
    <NavBlock />
    <Box className={classes.container} component="div">
        <Slider />
    </Box>
  </div>
)
};

export default App;
