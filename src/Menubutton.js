import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
const Menubutton = (props) =>{
	return(
		<div>

		<IconButton edge="start" className="menuButton" color="inherit" aria-label="drawer menu"   onClick= {props.istrigger} >
           <MenuIcon />
         </IconButton>
       
      	</div>
	)
}
export default Menubutton