import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
const Payment = () => {
    const [value, setValue] = React.useState('');
    const [PaymentRestData,SetPaymentRestData]=React.useState(true)

    const handleChange = (event) => {
        setValue(event.target.value);
    };
    return (
        <>
            <div className="container-fluid">
                <div className="row center deliver_row_margin">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-12 payment_container">
                        <div className="row">
                            <div className="col-12">
                                <p>Payment</p>

                            </div>

                        </div>
                        <div className="row">
                            <div className="col-12">
                                <p>Payment Method</p>

                            </div>

                        </div>
                        <div className="row">
                            <div className="col-12">
                                <FormControl>
                                    <RadioGroup
                                        aria-labelledby="demo-controlled-radio-buttons-group"
                                        name="controlled-radio-buttons-group"
                                        value={value}
                                        onChange={handleChange}
                                    >
                                        <FormControlLabel value="I plan to pay delivery at cannapay" control={<Radio />} label="I plan to pay delivery at cannapay" />
                                        <FormControlLabel value="I plan to pay delivery at cash" control={<Radio />} label="I plan to pay delivery at cash" />
                                    </RadioGroup>
                                </FormControl>

                            </div>
                        </div>

                    </div>

                </div>

            </div >
        </>
    )
}
export default Payment