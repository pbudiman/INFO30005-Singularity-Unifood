import React, {useState} from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons

import EmailIcon from '@material-ui/icons/Email';
import VpnKeyIcon from '@material-ui/icons/VpnKey';

// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CustomInput from "components/CustomInput/CustomInput.js";

import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';


import styles from "assets/jss/material-kit-react/views/loginPage.js";

import image from "assets/img/unifood.png";

import {useHistory} from 'react-router-dom';
import axios from 'axios';
import LoginAuth from '../../LoginAuth'
import swal from 'sweetalert';

const useStyles = makeStyles(styles);

export default function OrganiserLogin(props) {
    let history = useHistory()
    const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
    setTimeout(function() {
        setCardAnimation("");
    }, 700);
    const classes = useStyles();
    const { ...rest } = props;

    const [email,setEmail]= useState("")
    const [password,setPassword]=useState("")
    const [contactNumber, setContactNumber] = useState("")
    const [organisationName, setOrganisationName] = useState("")
    const [officerName, setOfficerName] = useState("")

    // const [showPassword,setShowPassword]= useState(false)
    // const [mouseDownPassword,setMouseDownPassword]=useState(false)



    function validateLogin(event){
        event.preventDefault();
        axios.post('/organisers/logon',{email,password})
            .then(res => res.data.success? (
                    LoginAuth.authenticate(),
                        history.push({pathname:"/organisers/home",
                            state:{
                                orgName:res.data.organiser.organisation_name,
                                id:res.data.organiser._id,
                                email_add:res.data.organiser.email
                        }}))
                : swal("Incorrect email or password.\nPlease try again."));
    }

    const handleEmail = (event) => {
        setEmail(event.target.value);
        console.log(email);
    };

    const handlePassword = (event) => {
        setPassword(event.target.value);
    };

  return (
        <div>
            <Header
                absolute
                color="transparent"
                brand="UNIFOOD"
                rightLinks={<HeaderLinks />}
                {...rest}
            />
            <div
                className={classes.pageHeader}
                style={{
                    backgroundImage: "url(" + image + ")",
                    backgroundSize: "cover",
                    backgroundPosition: "top center"
                }}
            >
                <div className={classes.container}>
                    <GridContainer justify="center">
                        <GridItem xs={12} sm={12} md={4}>
                            <Card className={classes[cardAnimaton]}>
                                <form className={classes.form}>
                                    <CardHeader color="danger" className={classes.cardHeader}>
                                        <h4>Organiser Login</h4>
                                    </CardHeader>

                                    <CardBody>
                                        <CustomInput
                                            labelText="Organiser Email"
                                            id="email"
                                            value={email}

                                            formControlProps={{
                                                fullWidth: true,
                                                onChange: (event)=>handleEmail(event)

                                            }}
                                            inputProps={{
                                                type: "email",
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <EmailIcon/>
                                                    </InputAdornment>
                                              )
                                            }}
                                        />

                                        <CustomInput
                                          labelText="Password"
                                          id="password"
                                          value={password}

                                          formControlProps={{
                                              fullWidth: true,
                                              onChange: (event)=>handlePassword(event)

                                          }}
                                          inputProps={{

                                              type: 'password',
                                              onChange: (event)=>handlePassword(event),
                                              endAdornment: (
                                                  <InputAdornment position="end">
                                                      <VpnKeyIcon/>
                                                  </InputAdornment>
                                            )
                                          }}
                                        />

                                        <Button
                                            type="submit"
                                            variant="contained"
                                            fullWidth
                                            color="danger"
                                            className={classes.submit}
                                            onClick={(event)=>validateLogin(event)}
                                        >
                                            Log In
                                        </Button>

                                        <Grid item>
                                                <Link href="/organisers/signup" style={{ color: '#999999' }}>
                                                    {"Don't have an account? Sign Up"}
                                                </Link>
                                        </Grid>

                                    </CardBody>

                                </form>
                            </Card>
                        </GridItem>
                    </GridContainer>
                </div>
                <Footer whiteFont />
            </div>
        </div>
    );
}





















{/*<FormControl>*/}
{/*  <InputLabel>Email</InputLabel>*/}
{/*  <Input id="email" type="email" value={email} onChange={handleEmail}/>*/}
{/*</FormControl>*/}

{/*<br/>*/}
{/*<FormControl>*/}
{/*  <InputLabel>Password</InputLabel>*/}
{/*  <Input id="email" type="password" value={password} onChange={handlePassword}/>*/}
{/*</FormControl>*/}
{/*<CustomInput*/}
{/*    labelText="Password"*/}
{/*    id="password"*/}
{/*    type="password"*/}
{/*    onChange={ (event)=>handlePassword(event)}*/}

{/*    formControlProps={{*/}
{/*        fullWidth: true,*/}
{/*        onChange: (event)=>handlePassword(event)*/}

{/*    }}*/}
{/*    inputProps={{*/}
{/*        onChange: (event)=>handlePassword(event),*/}

{/*        type: "password",*/}

{/*        endAdornment: (*/}
{/*            <InputAdornment position="end">*/}
{/*                <Icon className={classes.inputIconsColor}>*/}

{/*                </Icon>*/}
{/*            </InputAdornment>*/}
{/*        ),*/}
{/*        autoComplete: "off"*/}
{/*    }}*/}


{/*/>*/}
