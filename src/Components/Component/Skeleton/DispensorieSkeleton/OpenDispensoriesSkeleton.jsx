import React from "react"
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Grid from '@mui/material/Grid';
const OpenDispensoriesSkeleton = () => {
    const OpenDispensoriesArray = [1, 2, 3, 4]
    return (
        <React.Fragment>
            <div className="container">
                <div className="col-md-4 border OpenDispensorieSkeletonMain_Col">

                    <div className="col-12 center OpenDispensorieSkeleton_search my-4">
                      <Skeleton variant="rectangular" sx={{ height:"40px",width:"90%",borderRadius:"10px"}}/>
                    </div>
                    {OpenDispensoriesArray.map((val, index) => {
                        return (
                            <div className="col-12 border d-flex" style={{ height: "190px"}} key={index}>
                                <div className="col-6 dispensoriesSkeleton">
                                    <Skeleton variant="rectangular" sx={{width:"50%",height:"100px"}}/>
                                </div>
                                <div className="col-6">
                                </div>

                            </div>
                        )
                    })}

                </div>

            </div>

        </React.Fragment>
    )
}
export default OpenDispensoriesSkeleton