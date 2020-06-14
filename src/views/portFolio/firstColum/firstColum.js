import React, { useState ,useEffect  } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import firstColumStyle from './firstColum.style'
import ProfilePhoto from '../../../images/ProfilePhoto.jpeg'
import { firstColumLanguage } from './firstColum.language'
import Icons from '../../../components/icons/icons'

const useStyles = makeStyles(firstColumStyle);

export default function FirstColum() {
  useEffect(() => {
  },[]);
    const classes = useStyles();
    const [pSkills, setPSkills] = useState({
        Javascript: { icon: 'JavaScript', title: firstColumLanguage.JavaScript, placement: "top" },
        React: { icon: 'React', title: firstColumLanguage.React, placement: "top" },
        NodeJs: { icon: 'nodejs', title: firstColumLanguage.Nodejs, placement: "top" },
        MySql: { icon: 'mysql', title: firstColumLanguage.MySql, placement: "top" },
        SqlServer: { icon: 'sqlserver', title: firstColumLanguage.SqlServer, placement: "bottom" },
        Git: { icon: 'git', title: firstColumLanguage.Git, placement: "bottom" },
        Agilty: { icon: 'scrum', title: firstColumLanguage.Agilty, placement: "bottom" },
        AWS: { icon: 'aws', title: firstColumLanguage.AWS, placement: "bottom" }
    });
    const [sSkills, setSSkills] = useState({
        PHP: { icon: 'php', title: firstColumLanguage.PHP, placement: "top"  },
        Net: { icon: 'net', title: firstColumLanguage.Net , placement: "top" },
        MongoDB: { icon: 'mongoDB', title: firstColumLanguage.MongoDB , placement: "top" },
        Angular: { icon: 'angular', title: firstColumLanguage.Angular , placement: "top" },
    });
    return (
        <div className={classes.root}>
            <img src={ProfilePhoto} alt="My profile" className={classes.img}></img>
            <div className={classes.nameLastName} >
                <p>{firstColumLanguage.Name}</p>
                <p>{firstColumLanguage.LastName}</p>
            </div>
            <div className={`${classes.nameLastName} ${classes.profile}`}>{firstColumLanguage.Profile}</div>
            <div className={`${classes.nameLastName} ${classes.Pskills}`} > {firstColumLanguage.PSkills}</div>
            <div className={classes.icons}>
                {Object.keys(pSkills).map((item => {
                    return <Icons icon={pSkills[item].icon} title={pSkills[item].title} placement={pSkills[item].placement} />
                }))}
            </div>
            <div className={`${classes.nameLastName} ${classes.Pskills}`} > {firstColumLanguage.SSkills}</div>
            <div className={classes.icons} >
                {Object.keys(sSkills).map((item => {
                    return <Icons icon={sSkills[item].icon} title={sSkills[item].title} placement={sSkills[item].placement} />
                }))}
            </div>
            <div className={`${classes.nameLastName} ${classes.Pskills}`} > {firstColumLanguage.Languages}</div>
            <div className={classes.education}>{firstColumLanguage.English} : </div>  
            <p className={classes.nameLastName}>{firstColumLanguage.Profesiona}</p>
        </div>
    );
}









