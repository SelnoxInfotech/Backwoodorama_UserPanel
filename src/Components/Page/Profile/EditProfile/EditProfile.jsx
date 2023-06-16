import { IoChevronBackSharp } from "react-icons/io5"
import EditProfileLogin from "./EditProfileComponent/EditProfileLogin"
import EditProfileOnlineOrder from "./EditProfileOnlineOrder/EditProfileOnlineOrder"
import Notification from "./EditProfileComponent/Notification"
const EditProfile = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 profile_setting_container mt-4">
                    <div className="EditProfile_heading_cont">
                        <h1 className="EditProfile_heading">Profile Setting</h1>
                    </div>
                    <div className="EditProfile_heading_cont">
                     <span><IoChevronBackSharp color="#707070" /></span><span className="editProfile_backBtn">Back Profile</span>
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