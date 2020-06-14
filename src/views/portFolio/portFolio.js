import React from 'react';
import portFolioStyle from './portFolio.style';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import FirstColum from './firstColum/firstColum'
import SecondColum from './secondColum/secondColum'


const useStyles = makeStyles(portFolioStyle);


export default function PortFolio() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper elevation={3}>
                <Grid container spacing={3} className={classes.principalContainer} >
                    <Grid item xs={3}>
                        <FirstColum />
                    </Grid>
                    <Grid item xs={0.1}>
                        <Divider orientation="vertical" className={classes.divider} />
                    </Grid>
                    <Grid item xs={8}>
                        <SecondColum />
                    </Grid>
                </Grid>

            </Paper>
        </div>
    );
}

