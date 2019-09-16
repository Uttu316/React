import React,{useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Menubutton from './Menubutton';
import LoginMenu from './LoginMenu';
import SideDrawer from './SideDrawer';
import BackDrop from'./BackDrop';
import './App.css'

const Tophead =(props)=>{
	const [draweropen,setDrarweropen] = useState(false);
   
	 function handleDrawerToggle(){
		if(!draweropen) setDrarweropen(true);
		else setDrarweropen(false);
	}
	function backdropClickHandler () {
    	setDrarweropen(false);
  	}

	
	let sideBackDrop;
	if(draweropen){
		sideBackDrop = <BackDrop  close = {backdropClickHandler}/>
	}

	return(
		<div className="h100">
      		<AppBar position="fixed"  className ="">
        	<Toolbar className="Bar" >
          		<Menubutton istrigger = {handleDrawerToggle}/>
          		<Typography variant="h6" className="title" >
           			Back to Basics
           		 </Typography>
          		<LoginMenu/>
          	</Toolbar>
      </AppBar>
      <SideDrawer show={draweropen}/>
      {sideBackDrop}
    	</div>		
	)
}
export default Tophead