import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import  iconsStyle  from './icons.style';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles(iconsStyle);

export default function Icons(props) {
    const classes = useStyles();
    let img =  require(`../../images/icons/${props.icon}.png`)
    return (
        <Tooltip
        title={props.title}
        placement={props.placement}
        classes={{ tooltip: classes.tooltip }}
    >
        <Button
            target="_blank"
            className={classes.navLink}
        >
            <img src={img} className={classes.socialIcons} alt ={props.icons} />
        </Button>
    </Tooltip>
    );
}

