import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import { SideBar } from './SideBar'
import { UserPanel } from './UserPanel'
import {
    Grid,
    makeStyles,
    Button,
    Typography,
    Card
} from "@material-ui/core";

const useStyles = makeStyles({
    searchDiv: {
        display: "flex",
        backgroundColor: "#F5F5F7",
        borderRadius: "15px",
        marginTop: "20px",
        width: "70%",
        height: "50px"
    },
    searchIcon: {
        margin: "10px"
    },
    input: {
        outline: "none",
        border: "none",
        background: "transparent",
        marginLeft: "10px",
    },
    addNewButton: {
        backgroundColor: "#27ae60",
        color: "white",
        width: "100px",
        margin: "20px"
    },
    currentDate: {
        backgroundColor: "#F5F5F7",
        height: "30px",
        marginTop: "20px", 
        borderRadius: "15px",
        padding: "10px 15px"
    },
    card: {
        width: "100%",
        height: "100px"
    }
})

export function Dashboard() {
    const data = useSelector(state => state.dashboard.data);
    const [personal, setPersonal] = useState([]);
    const [official, setOfficial] = useState([]);
    const [miscellaneous, setMiscellaneous] = useState([]);

    const classes = useStyles();
    const history = useHistory();

    const redirectToCreateTask = () => {
        history.push("/addnewtask")
    }

    useEffect(() => {
        for(let i = 0; i < data.length; i++) {
            if(data[i].tag == "Personal") {
                setPersonal(personal.push(data[i]))
            }
            else if(data[i].tag == "Official") {
                setOfficial(official.push(data[i]))
            }
            else if(data[i].tag == "Miscellaneous") {
                setMiscellaneous(miscellaneous.push(data[i]))
            }
        }

        console.log(personal)
        console.log(official)
        console.log(miscellaneous)
    },[data])

    return (
        <Grid container style = {{display: "flex"}} >
            <Grid item>
                <SideBar />
            </Grid >
            <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                <UserPanel />
            </Grid>
            <Grid container direction = "row" item xl={7} lg={7} md={7} sm={7} xs={7} style = {{paddingLeft: "10px"}}>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12} style = {{display: "flex", flexDirection: "row"}} >
                    <div  className = { classes.searchDiv }>
                        <div>
                            <img className = { classes.searchIcon } src = "https://img.icons8.com/material-outlined/24/000000/search.png" alt = "Search"/>
                        </div>
                        <input 
                            className = { classes.input }
                            type = "text"
                            placeholder = "Search Task by Title"
                        />
                    </div>
                    <div>
                        <Button className = {classes.addNewButton} onClick = {redirectToCreateTask} >
                            New Task
                        </Button>
                    </div>
                    <div className = {classes.currentDate} >
                        {
                            (new Date()).toLocaleDateString()
                        }
                    </div>
                </Grid>

                <Grid container spacing = {2} item xl={12} lg={12} md={12} sm={12} xs={12} style = {{marginTop: "-280px"}} >
                    <Grid container item xl={4} lg={4} md={4} sm={4} xs={4} style = {{padding: "10px"}}>
                        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}  >
                            <Typography variant = "subtitle2" style = {{textAlign: "center", color: "white", lineHeight: "30px", backgroundColor: "orange", height: "30px"}} >
                                To-Do
                            </Typography>
                        </Grid>
                        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}  >
                            {
                                personal[0] && personal.map((item) => {
                                    return (
                                        <Card className = {classes.card} key = {item.taskName} >
                                            <div>
                                                <Typography variant = "body1" style = {{color: "white", backgroundColor: "green", padding: "5px"}} >
                                                    {item.tag}
                                                </Typography>
                                            </div>
                                            <Typography variant = "h6" >
                                                {item.taskName}
                                            </Typography>
                                            <Typography variant = "body2" >
                                                {item.description}
                                            </Typography>
                                            <Typography variant = "body2" >
                                                {item.subTask[0]}
                                            </Typography>
                                        </Card>
                                    )
                                })
                            }
                        </Grid>
                    </Grid>
                    <Grid container item xl={4} lg={4} md={4} sm={4} xs={4} style = {{padding: "10px"}}>
                        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}  >
                            <Typography variant = "subtitle2" style = {{textAlign: "center", color: "white", lineHeight: "30px", backgroundColor: "green", height: "30px"}} >
                                In-Progress
                            </Typography>
                        </Grid>
                        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}  >
                            {
                                official[0] && official.map((item) => {
                                    return (
                                        <Card className = {classes.card} key = {item.taskName} >
                                            <div>
                                                <Typography variant = "body1" style = {{color: "white", backgroundColor: "green", padding: "5px"}} >
                                                    {item.tag}
                                                </Typography>
                                            </div>
                                            <Typography variant = "h6" >
                                                {item.taskName}
                                            </Typography>
                                            <Typography variant = "body2" >
                                                {item.description}
                                            </Typography>
                                            <Typography variant = "body2" >
                                                {item.subTask[0]}
                                            </Typography>
                                        </Card>
                                    )
                                })
                            }
                        </Grid>
                    </Grid>
                    <Grid container item xl={4} lg={4} md={4} sm={4} xs={4} style = {{padding: "10px"}}>
                        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}  >
                            <Typography variant = "subtitle2" style = {{textAlign: "center", color: "white", lineHeight: "30px", backgroundColor: "blue", height: "30px"}} >
                                Done
                            </Typography>
                            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}  >
                            {
                                miscellaneous[0] && miscellaneous.map((item) => {
                                    return (
                                        <Card className = {classes.card} key = {item.taskName} >
                                            <div>
                                                <Typography variant = "body1" style = {{color: "white", backgroundColor: "green", padding: "5px"}} >
                                                    {item.tag}
                                                </Typography>
                                            </div>
                                            <Typography variant = "h6" >
                                                {item.taskName}
                                            </Typography>
                                            <Typography variant = "body2" >
                                                {item.description}
                                            </Typography>
                                            <Typography variant = "body2" >
                                                {item.subTask[0]}
                                            </Typography>
                                        </Card>
                                    )
                                })
                            }
                        </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
