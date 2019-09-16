import React from 'react'
import './App.css'

const BackDrop = (props)=>{
	return(
		<div className ="backdrop" onClick = {props.close}/>
	)
}
export default BackDrop;