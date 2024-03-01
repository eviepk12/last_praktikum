import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import React from "react";

function Copyright() {
    return (
      <Typography variant="body2" color="text.secondary">
        {'Copyright © '}
        <Link color="inherit" href="/">
          Nginep Aja
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  
  const defaultTheme = createTheme();
  
  export default function FooterComponent() {
    return (
      // <ThemeProvider theme={defaultTheme}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '20vh',
          }}
        >
          <Box
            component="footer"
            sx={{
              py: 3,
              px: 2,
              mt: 'auto',
              backgroundColor: (theme) =>
                theme.palette.mode === 'light'
                  ? theme.palette.grey[200]
                  : theme.palette.grey[800],
            }}
          >
            <Container>
            <Typography variant="h4">
              Nginep Aja
            </Typography>

              <Typography variant="body1">
              </Typography>
              <Copyright />
            </Container>
          </Box>
        </Box>
      // </ThemeProvider>
    );
  }
  