import { MdEmail } from "react-icons/md";
import React from "react";
import { FaUser } from "react-icons/fa"
import TextField from '@mui/material/TextField';
import { AiFillEye } from "react-icons/ai"
import { AiOutlineEyeInvisible } from "react-icons/ai"
import EditEmailPopup from "./EditEmailPopup";
import EditUserPopup from "./EditUserPopup";
import EditPasswordPopup from "./EditPasswordPopup";
const EditProfileLogin = () => {
    const [activePassword, setAtivePassword] = React.useState(true);
    const passwordVisibility = () => {
        setAtivePassword(false)
    }
    return (
        <div className="col-12 EditProfileLogin_mainColumns">
            <div className="w-100">
                <h1 className="editProfileLogin_heading">Login</h1>
            </div>
            <div className="row mx-0">
                <div className="col-12 col-lg-8 EditProfileLogin_container border py-4">
                    <form>
                        <div className="row">
                            <div className="col-6 editProfileLogin_emailField_container">
                                <div className="EditEmail_inner_container ">
                                    <span><MdEmail color="#707070" size={20} /></span><span className="editProfileLogin_padding_left editProfile_label"><label htmlFor="email">Email</label></span>
                                </div>
                                <div className=" EditEmail_inner_container">
                                    <TextField type="email" id="email" value="maxwell@gmail.com" InputProps={{disableUnderline:true}} variant="standard" />
                                </div>
                            </div>
                            <div className="col-6  editProfileLogin_emailField_container_edit">
                                <div className="editSpan_div">
                                   <EditEmailPopup/>
                                </div>
                            </div>

                        </div>
                        <div className="row mt-2">
                            <div className="col-6 editProfileLogin_emailField_container">
                                <div className="EditEmail_inner_container ">
                                    <span><FaUser color="#707070" size={20} /></span>
                                    <span className="editProfileLogin_padding_left editProfile_label"><label htmlFor="userName">User Name</label></span>
                                </div>
                                <div className=" EditEmail_inner_container">
                                    <TextField type="text" id="userName" variant="standard" value="Maxwell" InputProps={{disableUnderline:true}}/>
                                </div>
                            </div>
                            <div className="col-6  editProfileLogin_emailField_container_edit">
                                <div className="editSpan_div">

                                    <EditUserPopup></EditUserPopup>
                                </div>
                            </div>

                        </div>
                        <div className="row mt-2">
                            <div className="col-6 editProfileLogin_emailField_container">
                                <div className="EditEmail_inner_container ">
                                    <span onClick={passwordVisibility}>{activePassword ? (<AiFillEye color="#707070" size={20} />) : (<AiOutlineEyeInvisible color="#707070" size={20} />)}</span>
                                    <span className="editProfileLogin_padding_left editProfile_label"><label htmlFor="password">Password</label></span>
                                </div>
                                <div className=" EditEmail_inner_container">
                                    <TextField type="password" id="password" value="maxwell@1w12" variant="standard" InputProps={{disableUnderline:true}}/>
                                </div>
                            </div>
                            <div className="col-6  editProfileLogin_emailField_container_edit">
                                <div className="editSpan_div">
                                    <EditPasswordPopup/>
                                </div>
                            </div>

                        </div>
                    </form>

                </div>
            </div>

        </div>
    )
}
export default EditProfileLogin