import React, { useEffect, useState } from 'react';
import {
    Grid,
    Avatar
} from "@material-ui/core";
import { useSelector } from 'react-redux';
import {CanvasJSChart} from 'canvasjs-react-charts';

export function UserPanel() {
    const data = useSelector(state => state.dashboard.data);
    const [personal, setPersonal] = useState(1);
    const [official, setOfficial] = useState(1);
    const [miscellaneous, setMiscellaneous] = useState(1);

    const options = {
        animationEnabled: true,
        data: [{
            type: "pie",
            radius: "100",
            startAngle: 360,
            dataPoints: [
                {y: personal, label: "Personal"},
                {y: official, label: "Official"}, 
                {y: miscellaneous, label: "Miscellaneous"} 
            ]
        }]
    }

    useEffect(() => {
        for(let i = 0; i < data.length; i++) {
            if(data[i].tag == "Personal") {
                setPersonal((prev) => prev + 1)
            }
            else if(data[i].tag == "Official") {
                setOfficial((prev) => prev + 1)
            }
            else if(data[i].tag == "Miscellaneous") {
                setMiscellaneous((prev) => prev + 1)
            }
        }
    },[])

    return (
        <Grid constainer style = {{borderRight: "1px solid grey", marginLeft: "10px", marginTop: "20px"}} >
            <Grid container item xl={12} lg={12} md={12} sm={12} xs={12}>
                <Grid item >
                    <Avatar style = {{marginRight: "10px"}} >J</Avatar>
                </Grid>
                <Grid item style = {{marginBottom: "20px"}} >
                    <strong>Jonas Khanwaid</strong>
                    <div>jkhanwaid@gmail.com</div>
                </Grid>
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12} style = {{display: "flex"}} >
                <div style = {{display: "flex", border: "1px solid grey", margin: "0 10px"}} >
                    <div style = {{backgroundColor: "orange", color: "white"}} > Personal </div>
                    <div style = {{margin: " 0 5px"}} > {personal} </div>
                </div>
                <div style = {{display: "flex", border: "1px solid grey", margin: "0 10px"}} >
                    <div style = {{backgroundColor: "green", color: "white"}} > Official </div>
                    <div style = {{margin: " 0 5px"}} > {official} </div>
                </div>
                <div style = {{display: "flex", border: "1px solid grey", margin: "0 10px"}} >
                    <div style = {{backgroundColor: "blue", color: "white"}} > Miscellaneous </div>
                    <div style = {{margin: " 0 5px"}} > {miscellaneous} </div>
                </div>
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12} >
                <p>Your Task Trends in this week</p>
                <CanvasJSChart options = {options} />
            </Grid>
        </Grid>
    )
}
