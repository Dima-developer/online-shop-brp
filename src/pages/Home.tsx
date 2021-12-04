import React, { FC } from 'react';
import Slider from '../components/Slider';
import { Box } from '@mui/system';
import { makeStyles } from '@mui/styles';
import theme from '../theme/theme';

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
  },
});
const Home: FC = () => {
  const classes = useStyles();
  return (
    <div>
      <Box className={classes.container} component='div'>
        <Slider />
      </Box>
    </div>
  );
};
export default Home;
