import React,{useEffect} from 'react';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import Paper from "@material-ui/core/Paper";
import Dialog from '@material-ui/core/Dialog';
import Typography from "@material-ui/core/Typography";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import {deepOrange} from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from "@material-ui/core/FormControl";
import Box from '@material-ui/core/Box';
import Badge from '@material-ui/core/Badge';
import './App.css';

const useStyles = makeStyles(theme =>({
   paper: {
    marginTop: theme.spacing(1),
    display: 'flex',
    padding: 25,
    flexDirection: 'column',
    alignItems: 'center',
  },
  orangeBtB: {
    color: deepOrange[500]
  },
  submit: {
    backgroundColor: deepOrange[500],
    color: '#fafafa'
  },
  textField: {
     width: 300,
     margin:25

   },
  dense: {
    
  },
  form: {
  	marginTop: theme.spacing(1),
    width: '100%', // Fix IE 11 issue.
    
  },
}));

const Signin=(props)=> {
 
useEffect(() => {
    
  },[]);



const classes = useStyles();
return (
    <div>
      
      <Dialog open={props.open} onClose={props.close} aria-labelledby="form-dialog-title">

        <Paper className={classes.paper}>
        <Box >
        	<Badge color="error" variant="dot">
          		<Typography className={classes.orangeBtB}>{props.btn}</Typography>
        	</Badge>
      	</Box>
      	 <form className={classes.form} >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Username or Email"
            name="email"
            
            autoFocus
          />
          <TextField
            variant="outlined"
            required
            margin="normal"
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember"  color=""/>}
            label="Agree with t&c"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            
            className={classes.submit}
          >
            {props.btn}
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
        	
      </Paper>
        
       
      </Dialog>
    </div>
  );
}
export default Signin;