import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        secondary: {
            main: '#616161',
        }   
    },
    typography: {
        fontFamily: [
            'Roboto',
            'sans-serif',
          ].join(','),
        },

});

export default theme;