import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import {
    Box,
    Grid,
    Typography,
    Divider,
    TextField,
    makeStyles,
    InputLabel,
    ButtonGroup,
    Button,
    RadioGroup,
    FormControlLabel,
    Radio
} from "@material-ui/core";
import { useHistory } from 'react-router';
import { addNewTask } from '../Redux/action';
import { UserPanel } from './UserPanel';
import { SideBar } from './SideBar';

const useStyles = makeStyles({
    arrowButton: {
        fontSize: "50px", 
        lineHeight: "50px",
        "&:hover": {
            cursor: "pointer"
        }
    },
    createTaskTitle: {
        fontSize: "30px",
        lineHeight: "60px",
        marginLeft: "20px"
    },
    inputField: {
        backgroundColor: "#f2f2f2",
        width: "80%"
    },
    branchButton: {
        "&:focus": {
            backgroundColor: "#27ae60",
            color: "white"
        }
    },
    radioButton: {
        color: '#27ae60'
    },
    radioGroup: {
        disaply: "flex",
        flexDirection: "row"
    },
    saveButton: {
        backgroundColor: "#27ae60"
    }
})

export function AddNewTask() {
    const [taskName, setTaskName] = useState("");
    const [description, setDescription] = useState("");
    const [branch, setBranch] = useState("");
    const [tag, setTag] = useState("");
    const [date, setDate] = useState("");
    const [subTask, setSubTask] = useState([]);
    const [text, setText] = useState("");

    const history = useHistory();
    const classes = useStyles();
    const dispatch = useDispatch();

    const redirectToDashboard = () => {
        history.push("/dashboard")
    }

    const handleToDo = () => {
        setBranch("To-Do")
    }

    const handleInProgress = () => {
        setBranch("In-Progress")
    }

    const handleDone = () => {
        setBranch("Done")
    }

    const handleSave = () => {
        setSubTask([...subTask, text])

        let payload = {
            taskName,
            description,
            branch,
            tag,
            date,
            subTask
        }

        dispatch(addNewTask(payload));
        
        setTimeout(() => {
            redirectToDashboard();
        },1000);
    }

    return (
        <Grid container direction = "row" >
            <Grid item>
                <SideBar />
            </Grid >
            <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                <UserPanel />
            </Grid>
            <Grid container direction = "column" item xl={7} lg={7} md={7} sm={7} xs={7} style = {{paddingLeft: "10px"}}  >
                <Grid container item xl={12} lg={12} md={12} sm={12} xs={12} >
                    <div>
                        <strong className = {classes.arrowButton} onClick = {redirectToDashboard} > ← </strong>
                    </div>
                    <div>
                        <strong className = {classes.createTaskTitle} > Create Task </strong>
                    </div>
                </Grid>
                <Divider style = {{width: "100%"}} />
                <Grid container item xl={12} lg={12} md={12} sm={12} xs={12} style = {{ marginTop: "20px"}} >
                    <Grid container spacing = {4} item xl={6} lg={6} md={6} sm={6} xs={6} >
                        <Grid item xl={12} lg={12} md={12} sm={12} xs={12} style = {{ marginTop: "20px"}} >
                            <InputLabel htmlFor = "task-name" >
                                Enter Task Name
                            </InputLabel>
                            <TextField
                                id = "task-name"
                                size="small"
                                className = {classes.inputField}
                                type = "text"
                                variant = "outlined"
                                value = {taskName}
                                onChange = {(e) => setTaskName(e.target.value)}
                                placeholder = "Task Name"
                            />
                        </Grid>
                        <Grid item xl={12} lg={12} md={12} sm={12} xs={12} style = {{ marginTop: "20px"}} >
                            <InputLabel htmlFor = "description" >
                                Description
                            </InputLabel>
                            <TextField
                                id = "description"
                                size="small"
                                multiline
                                rows = {4}
                                className = {classes.inputField}
                                type = "text"
                                variant = "outlined"
                                value = {description}
                                onChange = {(e) => setDescription(e.target.value)}
                                placeholder = "Description"
                            />
                        </Grid>
                        <Grid item xl={12} lg={12} md={12} sm={12} xs={12} style = {{ marginTop: "20px"}} >
                            <InputLabel htmlFor = "branch-to" >
                                Branch To
                            </InputLabel>
                            <ButtonGroup size = "small" style = {{border: "1px solid grey"}}>
                                <Button className = {classes.branchButton} onClick = {handleToDo} >To-Do</Button>
                                <Button className = {classes.branchButton} onClick = {handleInProgress} >In-Progress</Button>
                                <Button className = {classes.branchButton} onClick = {handleDone} >Done</Button>
                            </ButtonGroup>
                        </Grid>
                        <Grid item xl={12} lg={12} md={12} sm={12} xs={12} style = {{ marginTop: "20px"}} >
                            <InputLabel htmlFor = "tag" >
                                Tag
                            </InputLabel>
                            <RadioGroup className = {classes.radioGroup} value={tag} onChange={(e) => setTag(e.target.value)}>
                                <FormControlLabel value = "Personal" control = {<Radio color = "" className = {classes.radioButton} />} label = "Personal" />
                                <FormControlLabel value = "Official" control = {<Radio color = "" className = {classes.radioButton} />} label = "Official" />
                                <FormControlLabel value = "Miscellaneous" control = {<Radio color = "" className = {classes.radioButton} />} label = "Miscellaneous" />
                            </RadioGroup>
                        </Grid>
                        <Grid item xl={12} lg={12} md={12} sm={12} xs={12} >
                            <InputLabel htmlFor = "date" >
                                Select Date
                            </InputLabel>
                            <TextField
                                variant = "outlined"
                                id="date"
                                type="date"
                                value = {date}
                                onChange = {(e) => setDate(e.target.value)}
                                size = "small"
                                style = {{width: "50%", backgroundColor: "#f2f2f2"}}
                                InputLabelProps={{
                                    shrink: true                                }}
                            />
                        </Grid>
                        <Grid container item xl={12} lg={12} md={12} sm={12} xs={12} >
                            <Grid item xl={4} lg={4} md={4} sm={4} xs={4} >
                                <Button onClick = {redirectToDashboard} style = {{border: "1px solid grey"}} >
                                    Cancel
                                </Button>
                            </Grid>
                            <Grid item xl={4} lg={4} md={4} sm={4} xs={4} >
                                <Button className = {classes.saveButton} onClick = {handleSave} >
                                    Save
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container spacing = {4} item xl={6} lg={6} md={6} sm={6} xs={6} >
                        <Grid item xl={12} lg={12} md={12} sm={12} xs={12} style = {{ marginTop: "20px"}} >
                            <InputLabel htmlFor = "sub-task" >
                                Sub Task
                            </InputLabel>
                            <TextField
                                id = "sub-task"
                                size="small"
                                className = {classes.inputField}
                                type = "text"
                                variant = "outlined"
                                value = {text}
                                onChange = {(e) => setText(e.target.value)}
                                placeholder = "Task Name"
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
