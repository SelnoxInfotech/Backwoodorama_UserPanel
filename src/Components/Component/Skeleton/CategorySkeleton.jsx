import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Paper } from '@mui/material';
export default function Variants() {
  const VariantArrayList = [1, 2, 3, 4, 5, 6]
  return (
    <div className='CategorySkeletons'>
      <Paper  sx={{ width: "100%", height: "244px", paddingTop: "35px" }}>

        <Grid container rowGap={2} columnSpacing={2} sx={{ height: "auto" }}>
          {VariantArrayList.map((val, index) => {
            return (

              <Grid item xl={2} lg={3} md={4} xs={6} sm={4} key={index}>
                <Box sx={{ width: "100%", display: "flex", justifyContent: "center"}}>
                  <Skeleton variant="circular" width={150} height={150}/>
                </Box>
                <Box sx={{ width: "100%", display: "flex", justifyContent: "center"}}>
                  <Skeleton variant="text" sx={{ fontSize: '10px', width: "30%" }} />

                </Box>
              </Grid>
            )
          })}


        </Grid>
      </Paper>
    </div>
  );
}