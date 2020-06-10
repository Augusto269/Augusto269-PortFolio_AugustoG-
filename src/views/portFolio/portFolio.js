import React from 'react';
import portFolioStyle from './portFolio.style';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import FirstColum from './firstColum/firstColum'


const useStyles = makeStyles(portFolioStyle);


export default function PortFolio() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper elevation={3}>
                <Grid container spacing={3} className={classes.principalContainer} >
                    <Grid item xs={3}>
                       <FirstColum/>
                   </Grid>
                    <Grid item xs={1}>
                        <Divider orientation="vertical" className={classes.divider} />
                    </Grid>
                    <Grid item xs={7}>
                        second colum
            </Grid>
                </Grid>

            </Paper>
        </div>
    );
}

