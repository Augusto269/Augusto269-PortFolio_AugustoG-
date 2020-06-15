import React from 'react';
import workExperienceStyle from './workingExperience.style';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import TimeLine from '../../../../components/timeLine/timeLine';
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import SwipeableViews from "react-swipeable-views";
import { workExperienceLanguage } from './workingExperience.language';
import Experience from '../../../../components/experience/experience';

const useStyles = makeStyles(workExperienceStyle);


export default function WorkExperienceStyle() {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
    const [workExperience] = React.useState({
        JudicialPower: {
            place: workExperienceLanguage.PJ,
            title: workExperienceLanguage.PJTitle,
            description: workExperienceLanguage.PjDescription
        },
        ElipsysIT: {
            place: workExperienceLanguage.Elipsys,
            title: workExperienceLanguage.ElipsysTitle,
            description: workExperienceLanguage.ElipsysDescription
        },
        Agrofy: {
            place: workExperienceLanguage.Agrfoy,
            title: workExperienceLanguage.AgrofyTitle,
            description: workExperienceLanguage.AgrofyDescription
        },
        Alcuino: {
            place: workExperienceLanguage.Alcuino,
            title: workExperienceLanguage.AlcuinoTitle,
            description: workExperienceLanguage.AlcuinoDescription
        },
    });

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = index => {
        setValue(index);
    };
    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="full width tabs example"
                >
                    <Tab label={workExperienceLanguage.PJ} />
                    <Tab label={workExperienceLanguage.Elipsys} />
                    <Tab label={workExperienceLanguage.Agrfoy} />
                    <Tab label={workExperienceLanguage.Alcuino} />
                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                {Object.keys(workExperience).map(((item,index) => {
                    return <TimeLine value={value} index={index} dir={theme.direction}>  <Experience place={workExperience[item].place} title={workExperience[item].title} description={workExperience[item].description} /> </TimeLine>
                }))}


            </SwipeableViews>
        </div>

    );
}

