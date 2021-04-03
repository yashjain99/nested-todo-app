import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {
    Grid,
    makeStyles
} from "@material-ui/core";
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import { logoutUser } from '../../Login/Redux/action';

const useStyles = makeStyles({
    cont: {
        backgroundColor: "#484c4f",
        height: "663px",
        width: "45px",
        justifyContent: "space-between"
    },
    colorIcons: {
        color: "#e8e9e9",
        margin: "20px 10px",
        "&:hover": {
            cursor: "pointer",
            filter: "opacity(0.5)"
        }
    }
})

export function SideBar() {
    const isAuth = useSelector(state => state.login.isAuth);

    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();

    const handleLogout = () => {
        dispatch(logoutUser());
        history.push("/");
    }

    return (
        <Grid container direction = "column" className = {classes.cont} >
            <Grid item xl={2} lg={2} md={2} sm={2} xs={2} >
                <SettingsOutlinedIcon className = {classes.colorIcons} />
            </Grid>
            <Grid item xl={2} lg={2} md={2} sm={2} xs={2} >
                <PowerSettingsNewIcon 
                    className = {classes.colorIcons} 
                    style = {{ marginTop: "100px" }} 
                    onClick = { handleLogout }
                />
            </Grid>
        </Grid>
    )
}