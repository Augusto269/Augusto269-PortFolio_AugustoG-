export default theme =>( {
    navLink: {
        marginRight:'5px',
        marginBotton:'5px',
        minWidth:'32px',
        color:'#ccffff',
        position: "relative",
        padding: "0.4475rem",
        fontWeight: "400",
        fontSize: "12px",
        textTransform: "uppercase",
        borderRadius: "3px",
        lineHeight: "20px",
        textDecoration: "none",
        margin: "0px",
        display: "inline-flex",
        "&:hover,&:focus": {
          color: "inherit",
          background: "rgba(200, 200, 200, 0.2)"
        },
        [theme.breakpoints.down("sm")]: {
          width: "calc(100% - 30px)",
          marginLeft: "15px",
          marginBottom: "8px",
          marginTop: "8px",
          textAlign: "left",
          "& > span:first-child": {
            justifyContent: "flex-start"
          }
        }
      },
      tooltip: {
        padding: "5px 7px",
        minWidth: "70px",
        color: "#555555",
        lineHeight: "1.7em",
        background: "#FFFFFF",
        border: "none",
        borderRadius: "2px",
        boxShadow:
          "0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2)",
        maxWidth: "200px",
        textAlign: "center",
        fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif',
        fontSize: "0.875em",
        fontStyle: "normal",
        fontWeight: "400",
        textShadow: "none",
        textTransform: "none",
        letterSpacing: "normal",
        wordBreak: "normal",
        wordSpacing: "normal",
        wordWrap: "normal",
        whiteSpace: "normal",
        lineBreak: "auto"
      },
  socialIcons: {
    color:'#ccffff',
    maxWidth: "24px",
    marginTop: "0",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    lineHeight: "41px",
    fontSize: "20px"
  },
})