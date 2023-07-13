import React from "react"
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Grid from '@mui/material/Grid';
import { Paper } from "@mui/material";
import useStyles from "../../../../Style";
const DispensoriesAddressSkeleton = () => {
    const DispensoriesAddressSkeletonArr = [1, 2, 3, 4]
    const classes = useStyles()
    return (
        <React.Fragment>
            <div className="dispensoriesAddressSkeletonPadding">

                <Box>
                    <Skeleton variant="text"  className={classes.dispensoriesAddressSkeletonHeading}/>
                </Box>
                <Grid container columnSpacing={2} sx={{ height: "auto", marginTop: "20px" }}>
                    {DispensoriesAddressSkeletonArr.map((val, index) => {
                        return (
                            <Grid item xs={12} md={3} key={index} sx={{ height: "350px" }} className="bg-light">


                                <Paper sx={{height:"300px"}}>
                                    <Skeleton variant="rectangular" sx={{ width: "100%", height: "200px", borderRadius: "10px" }} />
                                    <Box sx={{width:"100%",paddingLeft:"15px",marginTop:"10px"}}>
                                    <Skeleton variant="rectangular" className={classes.recatngularDispenAdd}/>


                                    </Box>
                                </Paper>


                            </Grid>
                        )
                    })}


                </Grid>
            </div>


        </React.Fragment>
    )
}
export default DispensoriesAddressSkeleton