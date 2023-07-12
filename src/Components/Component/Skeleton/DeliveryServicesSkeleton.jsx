import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import React from 'react';
const DeliverServiceSkeleton = () => {
    const data = [1, 2, 3, 4];
    return (
        <React.Fragment>
            <div className='col-12 DeliveryServicesSkeleton px-2'>

                <Box>
                    <Skeleton sx={{ width: "35%", height: "30px", marginTop: "10px" }} />
                </Box>
                <Box className="deliverySkeletonBox">

                    <Grid container rowSpacing={0}
                        columnSpacing={2}>
                        {data.map((items, index) => {
                            return (
                                <Grid item md={3} sm={6} xs={12} key={index} sx={{ width: "100%", height: "280px", borderRadius: "12px" }}>
                                    <Skeleton sx={{ width: "100%", height: "258px", borderRadius: "12px", marginBottom: "-27px" }} />
                                    <Skeleton sx={{ width: "50%", height: "30px", marginBottom: "-4px" }} />
                                    <Skeleton sx={{ width: "50%", height: "30px", marginBottom: "-4px" }} />
                                    <Skeleton sx={{ width: "50%", height: "30px", marginBottom: "-4px" }} />


                                </Grid>
                            )
                        })}



                    </Grid>

                </Box>
            </div>



        </React.Fragment>
    )
}
export default DeliverServiceSkeleton