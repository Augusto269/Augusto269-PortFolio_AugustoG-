import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from './header/header';
import { indexStyle } from './index.style'
import Grid from '@material-ui/core/Grid';
import Routes from '../Utils/Routes/Routes'
const useStyles = makeStyles(indexStyle);

export default function Index() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container  >
        <Grid item xs={12} className={classes.header}>
          <Header />
        </Grid>
        <Grid item xs={12} className={classes.principalComponent}>
        <Routes/>
        </Grid>
      </Grid>
    </div>
  );
}

