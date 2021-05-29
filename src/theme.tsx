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
  palette: { type: 'dark' },
  typography: {
    body1: {
      color: "#EEE"
    },
    body2: {
      color: "#EEE"
    },
    fontFamily: "Helvetica Neue",
    h1: {
      color: "#EEE",
      fontSize: '4.209rem',
      fontWeight: 500,
    },
    h2: {
      color: "#DDD",
      fontSize: '3.157rem',
      fontWeight: 500,
    },
    h3: {
      color: "#CCC",
      fontSize: '2.369rem',
      fontWeight: 500,
    },
    h4: {
      color: "#BBB",
      fontSize: '1.777rem',
      fontWeight: 500,
    },
    h5: {
      color: "#AAA",
      fontSize: '1.333rem',
      fontWeight: 500,
    },
    h6: {
      color: "#999",
      fontSize: '1rem',
      fontWeight: 500,
    },
    subtitle1: {
      color: "#888"
    }
  }
})

theme = responsiveFontSizes(theme);

export default theme;
