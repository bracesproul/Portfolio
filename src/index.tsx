import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppTheme from './components/theme';
import Home from './pages/Home';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        text: {
            primary: '#f2f2f2'
        }
    },
});



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <AppTheme />
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Home />}>
                  </Route>
              </Routes>
          </BrowserRouter>
      </ThemeProvider>
  </React.StrictMode>
);
