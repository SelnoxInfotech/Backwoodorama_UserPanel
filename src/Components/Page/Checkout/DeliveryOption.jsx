import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import LoadingButton from '@mui/lab/LoadingButton';
import { useForm } from "react-hook-form";
import Box from '@mui/material/Box';
import useStyles from "../../../Style"
import Createcontext from "../../../Hooks/Context"

const DeliveryOption = ({ SetShowData, DeliveryOptionData, address }) => {
    const { dispatch } = React.useContext(Createcontext)
    const method = useForm()
    const classes = useStyles()
    const [Time, SetTime] = React.useState('');
    const [ShowDeliveryRestData, SetShowDeliveryRestData] = React.useState(true)
    const [Checkbox, SetCheckbox] = React.useState({
        deliveryinstructions: "",
        DeliveryTime: "",
        documented: ""

    })
  
    const handleChange = (event) => {
        SetTime(event.target.value);
    };
    const ShowHideDeliveryOptions = async () => {
        SetShowData(true)
        SetShowDeliveryRestData(false)
         dispatch({ type: 'DeliveryOption', DeliveryOption: true })
    }
    const AddDeliveryInstruction = () => {
        SetShowDeliveryRestData(true)
    }

    function CheckBox(event) {

        SetCheckbox({
            ...Checkbox, [event.target.name]: event.target.checked
        });
    }
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 center">
                        <div className="col-12 col-lg-12 col-md-12 col-sm-12  DeliveryOption_container">
                            <div className="col-12 height_for_inner_div fontStyle font_size_paragraph">
                                <p>Delivery Options</p>

                            </div>
                            <div className="col-12 height_for_inner_div">
                                <p >Your Address</p>

                                {DeliveryOptionData?.map((ele, index) => {
                                    return (
                                        <div key={index}>
                                            <p >Your {ele?.address}</p>
                                        </div>

                                    )

                                })}

                            </div>
                            <div className="col-12 height_for_inner_div_address flex_for_delivery marginTop_deliver p-2">
                                <div className="col-6 col-sm-6 col-md-6">
                                    <p>{address}</p>

                                </div>
                                <div className="col-6 col-sm-6 col-md-6 position_right deliveroption_cursor">
                                    <p>Change</p>

                                </div>
                            </div>
                            {ShowDeliveryRestData ? "" : <div className='showagain' onClick={AddDeliveryInstruction}>
                                <p>Add delivery instructions</p>
                            </div>}

                            {ShowDeliveryRestData &&

                                <div className='show_and_hide'>
                                    <div className="col-12 height_for_inner_div ">
                                        <p>Delivery time</p>


                                    </div>
                                    <div className="col-12 height_for_time_div">
                                        <div className="col-12 col-lg-12 height_for_time_div">
                                            <FormControl className={`${classes.muiSelect}`} size="small">
                                                <InputLabel id="demo-select-small">Time</InputLabel>
                                                <Select
                                                    labelId="demo-select-small"
                                                    id="demo-select-small"
                                                    value={Time}
                                                    label="Time"
                                                    onChange={handleChange}
                                                >
                                                    <MenuItem value={"Saturday 10 to 1pm"}>
                                                        Saturday 10 to 1pm
                                                    </MenuItem>
                                                    <MenuItem value={"Saturday 10 to 1pm"}>Saturday 10 to 1pm</MenuItem>
                                                    <MenuItem value={"Saturday 10 to 1pm"}>"Saturday 10 to 1pm"</MenuItem>
                                                    <MenuItem value={"Saturday 10 to 1pm"}>"Saturday 10 to 1pm"</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </div>


                                    </div>
                                    <div className="col-12 height_for_delivery_instruction_div ">
                                        <p>Delivery Instruction</p>


                                    </div>
                                    <div className="col-12 height_for_delivery_instruction_textarea_div ">
                                        <div className='col-12  text_area_margin height_for_delivery_instruction_textarea_div'>

                                            <textarea className="form-control" id="textAreaExample4" rows="3"></textarea>
                                        </div>

                                    </div>

                                    <form onSubmit={method.handleSubmit(ShowHideDeliveryOptions)} >
                                        <div className='col-12 flex_for_delivery'>
                                            <div className='col-2 col-sm-2 col-md-2 col-lg-2  center'>
                                                <input id="checkbox-id" onChange={CheckBox} checked={Checkbox.DeliveryTime} name='DeliveryTime' type='checkbox' required />

                                            </div>
                                            <div className='col-10  col-lg-10 col-md-10 col-sm-10  font_size_checkbox_paragraph'>
                                                <p>**Please check this box if you are available for all day delivery (8AM-7PM).</p>
                                            </div>

                                        </div>
                                        <div className='col-12 flex_for_delivery'>
                                            <div className='col-2 col-sm-2 col-md-2 col-lg-2 center '>
                                                <input checked={Checkbox.deliveryinstructions} onChange={CheckBox} name='deliveryinstructions' type='checkbox' required />
                                            </div>
                                            <div className='col-10  col-lg-10 col-md-10 col-sm-10 font_size_checkbox_paragraph'>
                                                <p>Please check this box if the information entered is for a caregiver. If so, please add the patient information
                                                    (first name, last name, DOB, Medical Marijuana ID number) in the delivery instructions.</p>
                                            </div>

                                        </div>
                                        <div className='col-12 flex_for_delivery'>
                                            <div className='col-2 col-sm-2 col-md-2 col-lg-2 center'>
                                                <input checked={Checkbox.documented} onChange={CheckBox} name="documented" type='checkbox' required />
                                            </div>
                                            <div className='col-10  col-lg-10 col-md-10 col-sm-10 justify-content-start font_size_checkbox_paragraph'>
                                                <p>I confirm that all the customer information added is the information linked to my NYS issued medical marijuana card and agree to present
                                                    my card to the driver upon arrival. I also confirm that any changes in my medical history
                                                    and/or medications have been documented with Vireo Health, as there are potential medication interactions and contraindications to using cannabis
                                                    (including pregnancy, breastfeeding, unstable cardiac conditions, and history of schizophrenia).
                                                    If you have questions or concerns regarding whether medical cannabis is right for you,
                                                    please either reach out to your physician or schedule a consultation with one of our pharmacists.*</p>
                                                {/* <p>{paragraph}</p> */}


                                            </div>

                                        </div>
                                        <div className='col-12 margin_left'>
                                            <p>Please agree to the store's required terms</p>

                                        </div>
                                        <div className='col-12 col-lg-4 height_delivery_option_buttton'>
                                            <Box
                                                className={`  ${classes.loadingBtnTextAndBack}`}
                                            >
                                                <LoadingButton type='submit' variant="outlined">continue</LoadingButton>
                                            </Box>

                                        </div>

                                    </form>
                                </div>
                            }
                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}
export default DeliveryOption