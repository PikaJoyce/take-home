import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Sidenav from './components/Sidenav';
import Visits from './components/Visits'
import RecentPatients from './components/RecentPatients';
import Grid from '@mui/material/Grid';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


function App() {
  return (
    <BrowserRouter>
      <Grid container sx={{ flexGrow: 1 }}>
        <Grid item xs={3}>
          <Sidenav></Sidenav>
        </Grid>
        <Grid item xs={9}>
          <Grid item xs={12}>
            <h1>Good Afternoon, Joyce</h1>
          </Grid>
          <Grid container>
            <Grid item xs={6}>
              <RecentPatients></RecentPatients>
            </Grid>
            <Grid item xs={6}>
              <Visits></Visits>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </BrowserRouter>
  );
}

export default App;
