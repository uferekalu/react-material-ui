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
        background: 'transparent',
        border: '1px solid white',
        '&:hover': {
            background: 'gray',
            transition: '0.5s ease-in',
            transform: 'scale(.9)',
            color: 'skyblue',
        },
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between'
    },
}));