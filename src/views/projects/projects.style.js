export default theme => ({
    root: {
        maxWidth:'90%',
        textAalign: 'center',
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
          margin: theme.spacing(1),
          width: theme.spacing(120),
          height: theme.spacing(80),
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