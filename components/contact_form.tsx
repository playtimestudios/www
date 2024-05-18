import {
  useShortAnswerInput,
  useLongAnswerInput,
  useGoogleForm,
  GoogleFormProvider,
} from 'react-google-forms-hooks';

import form from '../src/data/GoogleForm.json';
import {Button, createTheme, TextField, Typography} from "@mui/material";
import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import {ThemeProvider} from "@mui/material/styles";

type IFormInputs = {
  id: string;
  type: 'text' | 'email' | 'tel';
};

const ShortAnswerInput = ({ id, type }: IFormInputs) => {
  const { register, label } = useShortAnswerInput(id);

  return <TextField InputProps={{disableUnderline: true}} type={type} {...register()} variant="filled" size="small" label={label} fullWidth />;
};

const LongAnswerInput = ({ id, type }: IFormInputs) => {
  const { register, label } = useLongAnswerInput(id);

  return <TextField InputProps={{disableUnderline: true}} type={type} {...register()} variant="filled" size="small" label={label} multiline rows={3} fullWidth />;
};

const darkTheme = createTheme({
  components: {
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: '#fff',
          borderRadius: 4,
          '&:hover, &.Mui-focused': {
            backgroundColor: '#ccc'
          }
        },
        input: {
          color: 'black'
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: 'black',
          '&:hover, &.Mui-focused': {
            color: 'black'
          }
        }
      }
    }
  },
  palette: {
    primary: {
      main: '#fff'
    }
  },
  typography: {
    button: {
      textTransform: "none"
    }
  }
});

const Contactform = () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const methods = useGoogleForm({ form });

  const onSubmit = async (data: any) => {
    await methods.submitToGoogleForms(data).then(() => {
      alert('Form submitted with success!');
    });
  };

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <GoogleFormProvider {...methods}>
          <form id="ContactForm" onSubmit={methods.handleSubmit(onSubmit)}>
            <Grid container spacing={2} textAlign="center">
              <Grid xs={12}>
                <Typography variant="h2" color="white" sx={{ fontWeight: 400 }}>Contact Us</Typography>
                <Typography variant="h5" color="white" component="p" sx={{ fontWeight: 400 }}>Tell us about a project we can help you with</Typography>
              </Grid>
              <Grid xs={12} sm={6}>
                <ShortAnswerInput id="257922130" type="text" />
              </Grid>
              <Grid xs={12} sm={6}>
                <ShortAnswerInput id="572914212" type="text" />
              </Grid>
              <Grid xs={12} sm={6}>
                <ShortAnswerInput id="2030645734" type="email" />
              </Grid>
              <Grid xs={12} sm={6}>
                <ShortAnswerInput id="1722608679" type="text" />
              </Grid>
              <Grid xs={12}>
                <LongAnswerInput id="1607175129" type="text" />
              </Grid>
              <Grid xs={12}>
                <Grid container justifyContent="center" pt={0}>
                  <Grid>
                    <Button size="large" type="submit" disableRipple variant="contained">
                      Submit 🚀
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </form>
        </GoogleFormProvider>
      </ThemeProvider>
      </>
  );
};

export { Contactform };