import TextField from '@mui/material/TextField';
import { MdEdit } from "react-icons/md"
import { AiFillPlusCircle } from "react-icons/ai"
import useStyles from '../../../../../Style';
import EditUserName from './EditProfileOnlineOrderComponent/EditUserName';
import AddMobileNumberPopup from './EditProfileOnlineOrderComponent/AddMobileNumerPopup';
import AddDeliveryAddressPopup from './EditProfileOnlineOrderComponent/AddDeliveryAddressPopup';
import AddPhotoId from './EditProfileOnlineOrderComponent/AddPhotoId';
const EditProfileOnlineOrder = () => {
    const classes = useStyles()
    return (
        <div className="col-12 EditProfileOnlineOrder_main_column mt-4">
            <div>
                <h1 className="online_order_heading">Online Order</h1>
            </div>
            <div className="row mx-0">
                <div className="col-12 col-lg-8 EditProfileOnlineOrder_container">
                    <div className="row mt-4 mx-0">
                        <div className="col-6 EditProfilOnlineOrder_name_flelds">
                            <div className='EditProfileOnline_name'>
                                <label className='editProfile_name' htmlFor="user name">Name</label>
                            </div>
                            <div className='EditProfileOnline_name'>
                                <TextField className={classes.EditProfileTextFields_Outline} type="text" id="user name" variant="standard" />
                            </div>
                        </div>
                        <div className="col-6 EditProfilOnlineEdit_icons_flelds">
                            <div className='EditProfileOnline_name'>
                                <EditUserName/>

                            </div>
                        </div>

                    </div>
                    <div className="row mt-4 mx-0">
                        <div className="col-6 EditProfilOnlineOrder_name_flelds">
                            <div className='EditProfileOnline_name'>
                                <label className='editProfile_name' htmlFor="mobile no">Mobile Number</label>
                            </div>
                            <div className='EditProfileOnline_name'>
                                <TextField className={classes.EditProfileTextFields_Outline} type="text" id="mobile no" variant="standard" />
                            </div>
                        </div>
                        <div className="col-6 EditProfilOnlineEdit_icons_flelds">
                            <div className='EditProfileOnline_name'>
                                <AddMobileNumberPopup/>
                                {/* <span><AiFillPlusCircle color="#707070" size={18} /></span> <span className="editProfileLogin_padding_left edit_span_name">Add</span> */}

                            </div>
                        </div>

                    </div>
                    <div className="row mt-4 mx-0">
                        <div className="col-6 EditProfilOnlineOrder_name_flelds">
                            <div className='EditProfileOnline_name'>
                                <label className='editProfile_name' htmlFor="Delivery address">Delivery Address</label>
                            </div>
                            <div className='EditProfileOnline_name'>
                                <TextField className={classes.EditProfileTextFields_Outline} type="text" id="Delivery address" variant="standard" />
                            </div>
                        </div>
                        <div className="col-6 EditProfilOnlineEdit_icons_flelds">
                            <div className='EditProfileOnline_name'>
                                <AddDeliveryAddressPopup/>
                                {/* <span><AiFillPlusCircle color="#707070" size={18} /></span> <span className="editProfileLogin_padding_left edit_span_name ">Add</span> */}

                            </div>
                        </div>

                    </div>
                    <div className="row mt-4 mx-0">
                        <div className="col-6 EditProfilOnlineOrder_name_flelds">
                            <div className='EditProfileOnline_name'>
                                <label className='editProfile_name' htmlFor="Photo Id">Photo Id</label>
                            </div>
                            <div className='EditProfileOnline_name'>
                                <TextField className={classes.EditProfileTextFields_Outline} type="text" id="Photo Id" variant="standard" />
                            </div>
                        </div>
                        <div className="col-6 EditProfilOnlineEdit_icons_flelds">
                            <div className='EditProfileOnline_name'>
                                <AddPhotoId/>
                                {/* <span><AiFillPlusCircle color="#707070" size={18} /></span> <span className="editProfileLogin_padding_left edit_span_name">Add</span> */}

                            </div>
                        </div>

                    </div>
                    <div className="row mt-4 mx-0">
                        <div className="col-6 EditProfilOnlineOrder_name_flelds">
                            <div className='EditProfileOnline_name'>
                                <label className='editProfile_name' htmlFor="Medical card number">Medical Card Number</label>
                            </div>
                            <div className='EditProfileOnline_name'>
                                <TextField className={classes.EditProfileTextFields_Outline} type="number" id="Medical card number" variant="standard" />
                            </div>
                        </div>
                        <div className="col-6 EditProfilOnlineEdit_icons_flelds">
                            <div className='EditProfileOnline_name'>
                                <span><AiFillPlusCircle color="#707070" size={18} /></span> <span className="editProfileLogin_padding_left edit_span_name ">Add</span>

                            </div>
                        </div>

                    </div>
                    <div className="row mt-4 mx-0">
                        <div className="col-6 EditProfilOnlineOrder_name_flelds">
                            <div className='EditProfileOnline_name'>
                                <label className='editProfile_name' htmlFor="Medical Card Expiration">Medical Card Expiration</label>
                            </div>
                            <div className='EditProfileOnline_name'>
                                <TextField className={classes.EditProfileTextFields_Outline} type="date" id="Medical Card Expiration" variant="standard" />
                            </div>
                        </div>
                        <div className="col-6 EditProfilOnlineEdit_icons_flelds">
                            <div className='EditProfileOnline_name'>
                                <span><AiFillPlusCircle color="#707070" size={18} /></span> <span className="editProfileLogin_padding_left edit_span_name">Add</span>

                            </div>
                        </div>

                    </div>
                    <div className="row mt-4 mx-0">
                        <div className="col-6 EditProfilOnlineOrder_name_flelds">
                            <div className='EditProfileOnline_name'>
                                <label className='editProfile_name' htmlFor="Medical Card State">Medical Card State</label>
                            </div>
                            <div className='EditProfileOnline_name'>
                                <TextField className={classes.EditProfileTextFields_Outline} type="date" id="Medical Card State" variant="standard" />
                            </div>
                        </div>
                        <div className="col-6 EditProfilOnlineEdit_icons_flelds">
                            <div className='EditProfileOnline_name'>
                                <span><AiFillPlusCircle color="#707070" size={18} /></span> <span className="editProfileLogin_padding_left edit_span_name">Add</span>

                            </div>
                        </div>

                    </div>
                    <div className="row mt-4 mx-0">
                        <div className="col-6 EditProfilOnlineOrder_name_flelds">
                            <div className='EditProfileOnline_name'>
                                <label className='editProfile_name' htmlFor="Add Date Of Birth">Add Date Of Birth</label>
                            </div>
                            <div className='EditProfileOnline_name'>
                                <TextField className={classes.EditProfileTextFields_Outline} type="date" id="Add Date Of Birth" variant="standard" />
                            </div>
                        </div>
                        <div className="col-6 EditProfilOnlineEdit_icons_flelds">
                            <div className='EditProfileOnline_name'>
                                    <span><AiFillPlusCircle color="#707070" size={18} /></span> <span className="editProfileLogin_padding_left edit_span_name">Add</span>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}
export default EditProfileOnlineOrder