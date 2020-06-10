import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { firstColumStyle } from './firstColum.style'
import ProfilePhoto from '../../images/ProfilePhoto.jpeg'
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles(firstColumStyle);

export default function FirstColum() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CardMedia
                className={classes.media}
                image={ProfilePhoto}
                title="Paella dish"
            />
        </div>
    );
}









