import React from 'react';
import Style from './projectsView.style';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {projectViewLangauge} from './projectView.language'



const useStyles = makeStyles(Style);


export default function ProjectView(props) {
    const classes = useStyles();     
    return (
        <Card className={classes.root}  boxShadow={3} >
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props.imgBackground}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button variant="contained" color="primary" className={classes.button} href= {props.url} target="_blank" >
            {projectViewLangauge.View}
          </Button>
          <Button variant="contained" color="secondary" className={classes.button} href= {props.projectLive} target="_blank">
            {projectViewLangauge.Live}
          </Button>
        </CardActions>
      </Card>
    );
}

