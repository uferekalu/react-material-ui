import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
    nav: {
        backgroundColor: 'black',
        paddingRight: '79px',
        paddingLeft: '118px',
    },
    logo: {
        fontFamily: 'Work Sans, sans-serif',
        fontWeight: 600,
        color: '#FFFEFE',
        textAlign: 'left',
    },
    menuButton: {
        fontFamily: 'Open Sans, sans-serif',
        fontWeight: 700,
        size: '18px',
        marginLeft: '36px',
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between'
    },
}));