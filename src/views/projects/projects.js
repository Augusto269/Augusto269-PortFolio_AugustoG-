import React ,{ useState, useEffect } from 'react';
import ProjectsStyle from './projects.style';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {getRepositories} from '../../services/gitHub.service';
import ProjectView from '../../components/projectsView/projectsView'
import DefaultImg from '../../images/default.png'


const useStyles = makeStyles(ProjectsStyle);


export default function Projects() {
    const [repository,setRepository] = useState([]);
    //Used hardcode img because in the date of the release the api of github has no way of doit  
    const [preview ] = useState({
        Default : DefaultImg,
        'Augusto269-PortFolio_AugustoG-': 'https://repository-images.githubusercontent.com/270171205/ff87db80-d5d7-11ea-892e-039de5b2400f',
    });
    const setImgBackogrund = (name) => {
        switch  (name) {
            case 'Augusto269-PortFolio_AugustoG-':
                return preview["Augusto269-PortFolio_AugustoG-"];
            default:
                return preview.Default;
        }
    }
    const classes = useStyles();
    useEffect(() => {
        getRepositories().then(result=>{
            setRepository(result.data)
        })
    },[]);
    return (
        <div className={classes.root}>
            <Paper elevation={3} className={classes.PaperContainer}>
                <Grid container spacing={3} className={classes.principalContainer} >
                   {repository.map(options => (
                    <ProjectView name = {options.name} description={options.description} projectLive= {options.homepage} url = {options.html_url} imgBackground = {setImgBackogrund(options.name) }/>
                    ))}
                </Grid>
            </Paper>
        </div>
    );
}

