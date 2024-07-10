import { makeStyles, createMuiTheme } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    '@global': {
        '*::-webkit-scrollbar': {
            width: '0.6em',
            height: '0.6rem',
        },
        '*::-webkit-scrollbar-track': {
            '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)',
        },
        '*::-webkit-scrollbar-thumb': {
            backgroundColor: '#33a8e0',
            borderRadius: '10px',
        },
    },
    step: {
        fontFamily: 'CenturyGothicBold',
        fontWeight: 'bold',
        color: '#2962a5',
        fontSize: '15px',
    },
    textAlign: {
        textAlign: 'center',
        fontSize: '20px',
        fontFamily: 'CenturyGothic',
    },
    flex: {
        display: 'flex',
        justifyContent: 'center'
    },
    headingStyle: {
        // fontWeight: 'bold',
        fontSize: '0.73125rem',
        padding: '0.5rem',
        // color: '#0818A8', /* Heading text color */
        textAlign: 'center',
        fontFamily: 'CenturyGothicBold', 
        fontWeight:'bold', 
        color:'#2962a5', 
        background:'#fafafa'
    },
    mediaButtonApply2: {
        background: 'linear-gradient(to right, #1571b8 0%, #39b3e7 100%)',
        width: '5rem',
        fontFamily: 'CenturyGothicBold',
        color: '#ffffff',
        marginTop: '9px',
        height: '37px',
        borderRadius: '12px',
      },
    mediaButtonApply: {
        background: 'linear-gradient(to right, #1571b8 0%, #39b3e7 100%)',
        width: '8rem',
        fontFamily: 'CenturyGothicBold',
        color: '#ffffff',
        marginTop: '9px',
        height: '37px',
        borderRadius: '12px',
      },
      formControl: {
        margin: theme.spacing(1),
    },
      closeicon: {
        marginLeft: 'auto',
      },
    tablecell: {
        backgroundImage: 'linear-gradient(to right, #cdeeef 0%, #cdeeef 100%)',
        color: '#348',
    },
    tablecell_text: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: '0.73125rem',
        padding: '0.5rem',
        background: '#cdeeef',
        fontFamily: 'CenturyGothicBold',
    },
    title: {
        color: '#2863a6',
        fontSize: '30px',
        '-webkit-text-stroke-width': '1px',
        '-webkit-text-stroke-color': '#4387c1',
        fontFamily: 'CenturyGothicBold',
    },
    addButtonStyle: {
        fontFamily: 'CenturyGothicBold',
        fontWeight: 'bold',
        width: '15rem',
        color: 'white',
        boxShadow: theme.shadows[3],
        margin: theme.spacing(2),
        background: 'linear-gradient(to bottom, #33ccff 0%, #0066ff 100%);',
        '&:hover': {
            background: '#fafcfb',
            border: '2px solid #f7951f',
            color: '#f7951f',
        },
    }
}))

export default useStyles;