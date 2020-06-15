import React, { useState, useEffect } from "react";
import aboutMeStyle from './aboutMe.style';
import { makeStyles } from '@material-ui/core/styles';
import { aboutMeLanguage } from './AboutMe.language';
import moment from "moment";


const useStyles = makeStyles(aboutMeStyle);

export default function AboutMe() {
    useEffect(() => {
    }, []);
    const classes = useStyles();
    const [age] = useState(moment().diff('1993-01-06', 'years'));
    const [start] = useState(moment().diff('2014-01-02', 'years'));
    const [startDevelopYear] = useState(moment().diff('2019-06-02', 'years'));
    const [startDeveloperMonths] = useState(moment().diff('2019-01-06', 'months') - (12 * startDevelopYear) + 1)
    console.log(age);
    console.log(start);
    console.log(startDevelopYear);
    console.log(startDeveloperMonths);

    return (
        <div className={classes.root}>
            <div><span >{aboutMeLanguage.Presetation}</span> <span className={classes.bold}> {age} </span>  <span>{aboutMeLanguage.Presetation2} <span className={classes.bold} >{start}</span> {aboutMeLanguage.Presentation3}</span>
                <span className={classes.bold}> {startDevelopYear} {aboutMeLanguage.Year} {startDeveloperMonths} {aboutMeLanguage.Months} </span> <span>{aboutMeLanguage.Presentation4}</span>
            </div>
            <p></p>
            <div>{aboutMeLanguage.Description} {aboutMeLanguage.Description2} </div>
            <p></p>
            <div>{aboutMeLanguage.Objective} {aboutMeLanguage.Objective2} {aboutMeLanguage.Objective3} </div>
        </div>
    );
}

