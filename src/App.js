import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Header from './components/Header';
import PlaceToVisit from './components/PlaceToVisit';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/image.jpg'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  direct:{
    color: '#c94c4d',
    fontSize: '3rem',
    fontWeight: 'bold',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    textDecoration: 'none',
  }
}));
export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <PlaceToVisit />  
      <div><a className={classes.direct} href="https://businessprofessionalsacademy.blogspot.com/p/about-business-professionals-academy.html"> Know more </a> </div>
    </div>
  );
}
