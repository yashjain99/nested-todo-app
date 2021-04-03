import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { loginUser } from "../Redux/action";
import {
    Container,
    Box,
    Grid,
    Button,
    Typography,
    makeStyles,
    InputAdornment,
    TextField,
    IconButton
} from "@material-ui/core";
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

const useStyles = makeStyles({
    container: {
        padding: 0,
        textAlign: "center",
    },
    blocks: {
        height: "663px",
        "@media only screen and (max-width: 600px)": {
            height: "320px",
        },
        "@media only screen and (min-width: 600px)": {
            height: "320px",
        },
        "@media only screen and (min-width: 768px)": {
            height: "350px",
        },
        "@media only screen and (min-width: 992px)": {
            height: "663px",
        }
    },
    backgroundGreen: {
        backgroundColor: "#27ae60"
    },
    loginButton: {
        backgroundColor: "#27ae60",
        width: "50%",
        marginTop: "8%",
        marginBottom: "5%",
        "&:hover": {
            backgroundColor: "#27ae60",
            filter: "opacity(0.9)"
        }
    },
    inputField: {
        backgroundColor: "#f2f2f2",
        width: "50%",
        marginTop: "5%",
        marginBottom: "-2%"
    },
    heading: {
        alignContent: "center"
    },
    colorWhite: {
        color: "white",
        lineHeight: "80px"
    },
    logo: {
        alignContent: "flex-end", 
        justifyContent: "center"
    },
    textAssignments: {
        justifyContent: "center",
        marginLeft: "80px",
        marginTop: "-30px"
    }
})

export function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [visibility, setVisibility] = useState(false);

    const isAuth = useSelector(state => state.login.isAuth);

    const classes = useStyles();
    const dispatch = useDispatch();

    const handleLogin = () => {
        let payload = {
            email,
            password
        }

        dispatch(loginUser(payload));
    }

    return !isAuth ? (
        <Container maxWidth="xl" className = {classes.container} >
            <Grid container >
                <Grid container className = {`${classes.backgroundGreen} ${classes.blocks}`} item xl={6} lg={6} md={6} sm={12} xs={12} >
                    <Grid item container className = {classes.logo} >
                        <Grid item  >
                                <img src = "/Images/group.png" alt = "Logo"/>
                        </Grid>
                        <Grid item >
                            <Typography className = {classes.colorWhite} variant = "h3" >
                                switchon 
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item className = {classes.textAssignments} container >
                        <Grid item >
                            <Typography className = {classes.colorWhite} variant = "h6" >
                                Assignments
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid className = {`${classes.heading} ${classes.blocks}`} container item xl={6} lg={6} md={6} sm={12} xs={12} >
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12} >
                        <Typography variant = "h3" >
                            To-Do App
                        </Typography>
                    </Grid>
                    <Grid className = {classes.formGrid} container item xl={12} lg={12} md={12} sm={12} xs={12} >
                        <Grid item xl={12} lg={12} md={12} sm={12} xs={12} >
                            <TextField
                                size="small"
                                className = {classes.inputField}
                                type = "email"
                                variant = "outlined"
                                value = {email}
                                onChange = {(e) => setEmail(e.target.value)}
                                placeholder = "Email ID"
                                InputProps = {{
                                    startAdornment: (
                                        <InputAdornment position = "start" >
                                            <MailOutlineIcon />
                                        </InputAdornment>
                                    )
                                }}
                            />
                        </Grid>
                        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                            <TextField
                                size="small"
                                className = {classes.inputField}
                                type = {visibility ? 'text' : 'password'}
                                variant = "outlined"
                                value = {password}
                                onChange = {(e) => setPassword(e.target.value)}
                                placeholder = "Password"
                                InputProps = {{
                                    startAdornment: (
                                        <InputAdornment position = "start" >
                                            <LockOutlinedIcon />
                                        </InputAdornment>
                                    ),
                                    endAdornment: (
                                        <InputAdornment position = "end">
                                            <IconButton
                                                onClick = {() => setVisibility((prev) => !prev)}
                                            >
                                                {visibility ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }}
                            />
                        </Grid>
                        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                            <Button className = {classes.loginButton} onClick = {handleLogin} >
                                Login
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    ) : (
        <Redirect to = "/dashboard" />
    )
}
