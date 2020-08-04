import React ,{ useState, useEffect } from 'react';
import ProjectsStyle from './projects.style';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {getRepositories} from '../../services/gitHub.service'


const useStyles = makeStyles(ProjectsStyle);


export default function Projects() {
    const [repository,setRepository] = useState([]);
    const classes = useStyles();
    useEffect(() => {
        getRepositories().then(result=>{
            setRepository(result)
            console.log(repository)
        })
     
      },[]);
    return (
        <div className={classes.root}>
            <Paper elevation={3}>
                <Grid container spacing={3} className={classes.principalContainer} >
                </Grid>
            </Paper>
        </div>
    );
}

