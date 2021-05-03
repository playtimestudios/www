import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#0070f3"
    }
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      'Oxygen',
      'Ubuntu',
      'Cantarell',
      '"Fira Sans"',
      '"Droid Sans"',
      '"Helvetica Neue"',
      'sans-serif'
    ].join(', '),
    fontSize: 16,
    h1: {
      fontSize: '4.209rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '3.157rem',
      fontWeight: 700,
    },
    h3: {
      fontSize: '2.369rem',
      fontWeight: 700,
    },
    h4: {
      fontSize: '1.777rem',
      fontWeight: 700,
    },
    h5: {
      fontSize: '1.333rem',
      fontWeight: 700,
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 700,
    }
  }
})

export default theme;
