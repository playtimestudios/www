import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

// Create a theme instance.
let theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          background: 'linear-gradient(190deg, #006699 0, #111 75rem)'
        },
        html: { backgroundColor: "#111"}
      }
    }
  },
  palette: {
    primary: {
      main: "#006699"
    },
    type: 'dark'
  },
  typography: {
    body1: {
      color: "#AAA"
    },
    body2: {
      color: "#AAA"
    },
    fontFamily: "Helvetica Neue",
    h1: {
      color: "#EEE",
      fontSize: '4.209rem',
      fontWeight: 500,
    },
    h2: {
      color: "#EEE",
      fontSize: '3.157rem',
      fontWeight: 500,
    },
    h3: {
      color: "#EEE",
      fontSize: '2.369rem',
      fontWeight: 500,
    },
    h4: {
      color: "#EEE",
      fontSize: '1.777rem',
      fontWeight: 500,
    },
    h5: {
      color: "#EEE",
      fontSize: '1.333rem',
      fontWeight: 500,
    },
    h6: {
      color: "#EEE",
      fontSize: '1rem',
      fontWeight: 500,
    }
  }
})

theme = responsiveFontSizes(theme);

export default theme;
