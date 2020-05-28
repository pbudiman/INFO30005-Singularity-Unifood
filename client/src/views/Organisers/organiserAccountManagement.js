
import React, {useState, useEffect } from "react";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import { makeStyles } from "@material-ui/core/styles";

import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import './orgaccmgmt.css'

import styles from "assets/jss/material-kit-react/views/profilePage.js";
import {useHistory} from 'react-router-dom';
import { useLocation } from "react-router-dom";
import axios from 'axios';
import io from "socket.io-client";
import socketIOClient from "socket.io-client";

const useStyles = makeStyles(styles);
var socket = io();



export default function OrganiserAccMgmt(props) {

  let history = useHistory();
  const [first_name,setFirstName]=useState();
// var notifyData = [];

  const classes = useStyles();
  const { ...rest } = props;


//   function goUserDetails(){
//     history.push({pathname:'/userdetails',state:{detail:username}});
//   }

  function logOut(){
    history.push({pathname:'/'})
  }

  const viewForms = () =>{ 
    let path = '/all-listings'; 
    history.push(path);
  }

  return ( 
      
    <div >
        <Header
        color="transparent"
        brand="UNIFOOD"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white"
        }}
        {...rest}
        />
        <Parallax small filter image={require("assets/img/userdashboard.png")} >
    
        </Parallax>
        <br/>

        <div className='container-acc-mgmt'>
            
        <div className='option'>
          <div className='label'>
          Welcome
          </div>
        </div>

          <button className='buttonOrg1 shadow'>
            Update Account
          </button>

          <button className='buttonOrg2 shadow' onClick={viewForms}>
            View My Forms
          </button>

          <button className='buttonOrg3 shadow'>
            Delete Account
          </button>

          <button className='buttonOrg4 shadow' onClick={() => {history.goBack()}}>
            Back
          </button>
        </div>
        <br>
        </br>
        <br>
        </br>
    <Footer />
    </div>
    
);
}


