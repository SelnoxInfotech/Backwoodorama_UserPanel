import React from "react"
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';

const HomePageBannerSkeleton = () => {

    return (
        <React.Fragment>
            <Grid container  sx={{height:"auto"}}>
                <Grid item xs={12} sx={{height:"270px"}}>
                        <Skeleton variant="rectangular" sx={{height:"350px",width:"100%",marginTop:"-40px"}}/>

                </Grid>
            </Grid>
        </React.Fragment>
    )
}
export default HomePageBannerSkeleton