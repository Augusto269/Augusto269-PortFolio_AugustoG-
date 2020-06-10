export default theme => ({
    root: {
        maxWidth:'80%',
        textAalign: 'center',
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
          margin: theme.spacing(1),
          width: theme.spacing(100),
          height: theme.spacing(69),
        },
      },
    principalContainer :{
        padding: theme.spacing(2),
    },
    divider:{
        minHeight:'520px',
        width:'0.3rem',
        color: '#00030f'
    }
})