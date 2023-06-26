import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import useStyles from '../../../../Style';
import LoadingButton from '@mui/lab/LoadingButton';
import {IoMdShare} from "react-icons/io"
const steps = [
    {
        label: 'Order Placed',
        date: "26-06-2023",
    },
    {
        label: 'Shipped',
        date: "26-06-2023",
    },
    {
        label: 'Delivered',
        date: "26-06-2023",

    },
];

const OrderTracking = () => {
    const classes = useStyles()
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };


    return (
        <div className=" col-xl-7 col-lg-10 col-12 orderTracking_container mt-4">
            <h1 className="orderTracking_heading">Order Tracking</h1>
            <Box sx={{ maxWidth: 400 }}>
                <Stepper activeStep={activeStep} orientation="vertical" className={classes.OrderTrackingCircleColor}>
                    {steps.map((step, index) => (
                        <Step key={step.label} >
                            <StepLabel

                            >
                                {step.label}
                            </StepLabel>
                            <StepContent>
                                <Typography className='steperTextFont'>{step.date}</Typography>

                                <Box sx={{ mb: 2 }}>
                                    <div>
                                        <Button
                                            variant="contained"
                                            onClick={handleNext}
                                            sx={{ mt: 1, mr: 1 }}
                                        >
                                            {index === steps.length - 1 ? 'Finish' : 'Continue'}
                                        </Button>
                                        <Button
                                            disabled={index === 0}
                                            onClick={handleBack}
                                            sx={{ mt: 1, mr: 1 }}
                                        >
                                            Back
                                        </Button>
                                    </div>
                                </Box>
                            </StepContent>
                        </Step>
                    ))}
                </Stepper>
                {activeStep === steps.length && (
                    <Paper square elevation={0} sx={{ p: 3 }}>
                        <Typography>Your items has been delivered</Typography>
                        <Typography sx={{ color: "#31B665" }}>Show more</Typography>

                    </Paper>
                )}
            </Box>

            <Box className={`mt-4 center ${classes.OrderTrackingLoadingBtn}`}>
  
                    <LoadingButton >Tracking Link</LoadingButton>
                    <LoadingButton startIcon={<IoMdShare color='#8A8A8A'/>} className="mx-2"> Share</LoadingButton>

                    </Box>
            
             
         



        </div>
    )
}
export default OrderTracking;