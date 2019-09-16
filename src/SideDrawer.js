import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Sidelist from './Sidelist';
import './App.css';
 
const SideDrawer =(props)=>{
	
	let isopen  =  props.show;
	let classes = 'drawer open'
	if(!isopen){
		classes = 'drawer'
	}
	return(
		<Drawer variant="persistent" anchor="left"  className={classes}>
		<Sidelist/>
      	</Drawer>
	)
}
export default SideDrawer;