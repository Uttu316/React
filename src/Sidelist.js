import React,{useState} from 'react';
import List from '@material-ui/core/List';
import Signin from './Signin';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountCircle from '@material-ui/icons/AccountCircleOutlined';

import './App.css';


 

const Sidelist=()=>{

const [open, setOpen] = useState(false);
const [button_name, setButtonName] = useState(null);
function handleClickOpen(text) {
    setOpen(true);
    setButtonName(text);


  }

  function handleClose() {
    setOpen(false);
  }


	return(
		<div className="sidelist" role="presentation">
			<List>
        	{['Sign in', 'Create an Account'].map((text, index) => (
          		<ListItem button key={index} onClick={() => handleClickOpen(text)}>
            		<ListItemIcon><AccountCircle/></ListItemIcon>

            		<ListItemText primary={text} />
          		</ListItem>
        	))}
      		</List>
          <Signin open ={open} btn={button_name} close ={handleClose} />
      		<Divider />
      		<List>
        	{['Help', 'Send feedback', 'About us'].map((text, index) => (
          		<ListItem button key={text}>
            		<ListItemIcon><AccountCircle/></ListItemIcon>
            		<ListItemText primary={text} />
          		</ListItem>
        	))}
      		</List>
     	</div>

	)
}
export default Sidelist