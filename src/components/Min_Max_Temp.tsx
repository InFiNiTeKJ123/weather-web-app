import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import AirIcon from '@mui/icons-material/Air';

export default function Min_Max_Temp(props: any) {
    return (<Box>
        <Grid container spacing={2} columns={16}>
            <Grid item xs={8}>
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Typography sx={{paddingRight: '1vh', color: 'white' }}>
                        Max
                    </Typography>
                    <Typography sx={{color: 'white'}}>
                        {props.sevenday_data?.['SevenDaysForecast']['MaximumTemperature'][6]} °c
                    </Typography>
                </Box>
            </Grid>
            <Grid item xs={8}>
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Typography sx={{ color: 'white', paddingRight: '1vh' }}>
                        Min
                    </Typography>
                    <Typography sx={{color: 'white'}}>
                        {props.sevenday_data?.['SevenDaysForecast']['MinimumTemperature'][6]} °c
                    </Typography>
                </Box>
            </Grid>
            <Grid item xs={8}>
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <WaterDropIcon sx={{ height: '5vh', color: 'white' }} />
                    <Typography sx={{color: 'white'}}>
                        {props.today_data?.['Observation']['Rainfall']} mm
                    </Typography>
                </Box>
            </Grid>
            <Grid item xs={8}>
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <AirIcon sx={{ height: '5vh', color: 'white' }} />
                    <Typography sx={{color: 'white'}}>
                        {props.today_data?.['Observation']['WindSpeed']} km/h
                    </Typography>
                </Box>
            </Grid>
        </Grid>
    </Box>
    )
}