import React from 'react';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import secondColum from './secondColum.style';
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import SwipeableViews from "react-swipeable-views";
import TabPanel from '../../../components/tabPanel/tabPanel';
import WorkExperienceStyle from './workingExperience/workingExperience';
import {secondColumLanguage} from './secondColum.language';
import AboutMe from './aboutMe/aboutMe'

const useStyles = makeStyles(secondColum);

export default function SecondColum() {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

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
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab label={secondColumLanguage.About}  />
            <Tab label={secondColumLanguage.Wk}  />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <AboutMe/>
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <WorkExperienceStyle/>
          </TabPanel>

        </SwipeableViews>
      </div>
    );
}

