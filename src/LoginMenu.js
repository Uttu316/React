import React,{useState} from 'react';
import AccountCircle from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import './App.css'

const LoginMenu=()=>{
	
	const [Isclicked, setIsclicked] = useState(null);
	const open = Boolean(Isclicked);
	function handleMenu(event: React.MouseEvent<HTMLElement>) {
    	setIsclicked(event.currentTarget);
  	}

  	function handleClose() {
    setIsclicked(null);
  }
  return(
  	<div>
          <IconButton
                	aria-label="account of current user"
                	aria-controls="menu-appbar"
                	aria-haspopup="true"
                	onClick={handleMenu}
                	color="inherit"
              	>
                <AccountCircle />
              	</IconButton>
  				<Menu
                	id="menu-appbar"
                	anchorEl={Isclicked}
                	anchorOrigin={{
                  		vertical: 'top',
                  		horizontal: 'right',
                	}}
                	keepMounted
                	transformOrigin={{
                  		vertical: 'top',
                  		horizontal: 'right',
                	}}
                	open={open}
                	onClose={handleClose}
              	>
              	
                <MenuItem onClick={handleClose} className="bt" >Sign in</MenuItem>
                <MenuItem onClick={handleClose}>Create account</MenuItem>
              </Menu>
             </div>
  	)
}
export default LoginMenu