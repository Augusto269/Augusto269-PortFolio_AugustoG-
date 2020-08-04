import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import { headerLangauge } from './header.language';
import headerStyle from './header.style'
import GitHubIcon from '@material-ui/icons/GitHub';
import ListItem from "@material-ui/core/ListItem";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import { Link } from "react-router-dom";
import { MemoryRouter as Router } from 'react-router';


const useStyles = makeStyles(headerStyle);

export default function Header() {
    const classes = useStyles();
    return (
        <Router>
        <ListItem className={classes.listItem}>
            <Button
                component={Link}
                to="/"
                className={classes.navLink}
            >
                {headerLangauge.Profile}
            </Button>
            <Button
                component={Link}
                to="/projects"
                className={classes.navLink}
            >
                {headerLangauge.Projects}
            </Button>
            <Tooltip
                id="instagram-twitter"
                title={headerLangauge.GitHub}
                placement={window.innerWidth > 959 ? "top" : "left"}
                classes={{ tooltip: classes.tooltip }}
            >
                <Button
                    href="https://github.com/Augusto269"
                    target="_blank"
                    className={classes.navLink}
                >
                    <GitHubIcon className={classes.socialIcons} />
                </Button>
            </Tooltip>
            <Tooltip
                id="instagram-twitter"
                title={headerLangauge.Linkedin}
                placement={window.innerWidth > 959 ? "top" : "left"}
                classes={{ tooltip: classes.tooltip }}
            >
                <Button
                    href="https://www.linkedin.com/in/augustogodoy/"
                    target="_blank"
                    className={classes.navLink}
                >
                    <LinkedInIcon className={classes.socialIcons} />
                </Button>
            </Tooltip>
            <Tooltip
                id="instagram-twitter"
                title={headerLangauge.ContactEmail}
                placement={window.innerWidth > 959 ? "top" : "left"}
                classes={{ tooltip: classes.tooltip }}
            >
                <Button
                    href={`mailto:${headerLangauge.Email}`}
                    target="_blank"
                    className={classes.navLink}
                >
                    <EmailIcon className={classes.socialIcons} />
                </Button>
            </Tooltip>
        </ListItem>
        </Router>
    );
}

