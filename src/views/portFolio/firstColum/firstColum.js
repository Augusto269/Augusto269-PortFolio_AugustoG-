import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import firstColumStyle from './firstColum.style'
import ProfilePhoto from '../../../images/ProfilePhoto.jpeg'
import { firstColumLanguage } from './firstColum.language'
import Icons from '../../../components/icons/icons'

const useStyles = makeStyles(firstColumStyle);

export default function FirstColum() {
    const classes = useStyles();
    const [pSkills, setPSkills] = useState({
        Javascript: {icon:'JavaScript',title: firstColumLanguage.JavaScript ,placement:"top"},
        React:{icon:'React', title: firstColumLanguage.React,placement:"top"},
        NodeJs:{icon:'nodejs', title: firstColumLanguage.Nodejs ,placement:"top"},
        MySql:{icon:'mysql', title: firstColumLanguage.MySql,placement:"top"},
        SqlServer:{icon:'sqlserver', title: firstColumLanguage.SqlServer,placement:"bottom"},
        Git:{icon:'git', title:firstColumLanguage.Git,placement:"bottom"},
        Agilty:{icon:'scrum',title:firstColumLanguage.Agilty,placement:"bottom"},
        AWS: {icon:'aws',title: firstColumLanguage.AWS,placement:"bottom"}
    });
    const [sSkills, setSSkills] = useState({        
        PHP:{icon:'PHP', title: firstColumLanguage.PHP},
        Net:{icon:'Net', title: firstColumLanguage.Net},
        MongoDB:{icon:'MongoDB', title: firstColumLanguage.MongoDB},
        Angular:{icon:'Angular', title: firstColumLanguage.Angular},
    });
    return (
        <div className={classes.root}>
            <img src={ProfilePhoto} alt="My profile picture" className={classes.img}></img>
            <div className={classes.nameLastName} >
                <p>{firstColumLanguage.Name}</p>
                <p>{firstColumLanguage.LastName}</p>
            </div>
            <div className={`${classes.nameLastName} ${classes.profile}` }>{firstColumLanguage.Profile}</div>
            <div className={ `${classes.nameLastName} ${classes.Pskills}`} > {firstColumLanguage.PSkills}</div>
            <div >
            {Object.keys(pSkills).map((item => {
                    return  <Icons icon={pSkills[item].icon} title ={pSkills[item].title} placement={pSkills[item].placement} />
            })) }
            </div>
        </div>
    );
}









