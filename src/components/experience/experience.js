import React from "react";
import experience from './experience.style';
import { makeStyles} from '@material-ui/core/styles';
import {experienceLanguage} from './experience.language'


const useStyles = makeStyles(experience);

export default function Experience(props) {
    const classes = useStyles();
  const { place,title, description,  } = props;
  return (
    <div className={classes.root}>
          <div><span className={classes.title} >{experienceLanguage.Place}</span> :<span> {place} </span> </div>
          <div> <span className={classes.title} >{experienceLanguage.Title}</span> :<span>  {title} </span> </div>
          <div> <span className={classes.title} >{experienceLanguage.Description}</span>:<span> {description}</span> </div>
    </div>
  );
}

