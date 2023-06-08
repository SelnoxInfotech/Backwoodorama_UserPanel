import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import useStyles from '../../../Style';
const CheckAgeEligbilityPopup = () => {
    const classes=useStyles()
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Check age
            </Button>
            <Dialog open={open} onClose={handleClose}
            className={`${classes.checkAgeEligibility} ${classes.checAgeEligibiltyHeight}`}
             >
                <div className='container-fluid'>
                    <div className='row'>

                        <div className='col-12 checkAgeEligiblityPop_container'>
                            
                            <div className='row  mt-4'>
                                <div className='col-12 checkAgeEligibilty_label'>
                                    <label className='askCountry'>Where are you from</label>
                                </div>
                                <div className='col-12 checkAgeEligibility_Select'>
                                    <FormControl sx={{ m: 1,  }} className={`${classes.checkAge_eligibility_Select}`}>
                                        <Select
                                            value={age}
                                            id="SelectAge"
                                            onChange={handleChange}
                                            displayEmpty
                                            inputProps={{ 'aria-label': 'Without label' }}
                                        >
                                            <MenuItem value="">
                                                <em>Select Country</em>
                                            </MenuItem>
                                            <MenuItem value={"India"}>India</MenuItem>
                                            <MenuItem value={"UsA"}>USA</MenuItem>
                                            <MenuItem value={"Germany"}>Germany</MenuItem>
                                        </Select>
                                    </FormControl>

                                </div>

                            </div>
                            <div className="row">
                                <div className='col-12 checkAgeEligibilty_label'>
                                  <label>Are you 21 year older</label>
                                </div>
                                <div className='col-12 checkAgeEligibilty_btn_container'>
                                 <Button className={`${classes.checAgeEliigiblityPopup}`}>Yes, I am</Button>
                                </div>
                                <div className='col-12 checkAgeEligibilty_btn_container'>
                                 <Button className={`${classes.checkAgeEligibiltyAge_SecBtn}`}>No,I'm not</Button>
                                </div>

                            </div>
                            <div className='row'>
                                <div className='col-12'>
                                 <footer className='checkAgeEligibility_footer'>
                                  If you kee seeing this age prompt whenever you visit the Sweede.net.
                                  Please enable the cookies in your web browser
                                 </footer>
                                </div>

                            </div>

                        </div>
                    </div>

                </div>
            </Dialog>
        </div>

    )
}
export default CheckAgeEligbilityPopup