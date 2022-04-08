import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageCard from './ImageCard';
import places from '../static/places';
import useWindowPosition from '../hook/useWindowPosition';
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
    direct:{
      color: '#c94c4c',
      fontSize: '3rem',
      fontWeight: 'bold',
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      textDecoration: 'none',
    }
  },
}));
export default function () {
  const classes = useStyles();
  const checked = useWindowPosition('header');
  return (
    <div className={classes.root} id="place-to-visit">
      <ImageCard place={places[1]} checked={checked} />
      <ImageCard place={places[0]} checked={checked} />
      <div>  <a className={classes.direct} href="https://businessprofessionalsacademy.blogspot.com/p/about-business-professionals-academy.html"> Know more </a></div>
    </div>
  );
}
