import { makeStyles } from '@material-ui/core/styles';
import { Autocomplete } from '@material-ui/lab';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
   marginLeft: theme.spacing(30),
    marginRight: theme.spacing(30),
    marginTop: '20px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '40px',
      marginRight: '40px'
    },
    [theme.breakpoints.down('md')]: {
      marginLeft: '40px',
      marginRight: '40px'
    }
    
  },
  root: {
    flexGrow: 1,
  },
}));
