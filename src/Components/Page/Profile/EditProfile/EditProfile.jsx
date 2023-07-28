import { IoChevronBackSharp } from "react-icons/io5"
import EditProfileLogin from "./EditProfileComponent/EditProfileLogin"
import EditProfileOnlineOrder from "./EditProfileOnlineOrder/EditProfileOnlineOrder"
import Notification from "./EditProfileComponent/Notification"
import { IconButton } from "@mui/material"
import { Link } from "react-router-dom"
const EditProfile = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 profile_setting_container mt-4">
                    <div className="EditProfile_heading_cont">
                        <h1 className="EditProfile_heading">Profile Setting</h1>
                    </div>
                    <div className="EditProfile_heading_cont">
                     <Link to="/Profile"><span><IconButton><IoChevronBackSharp color="#707070"size={18} /></IconButton></span><span className="editProfile_backBtn">Back Profile</span></Link>
                    </div>
                </div>
                <EditProfileLogin/>
                <EditProfileOnlineOrder/>
                <Notification/>
            </div>

        </div>
    )
}
export default EditProfile