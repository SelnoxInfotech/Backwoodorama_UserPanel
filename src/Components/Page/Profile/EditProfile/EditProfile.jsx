import React from "react"
import { IoChevronBackSharp } from "react-icons/io5"
import EditProfileLogin from "./EditProfileComponent/EditProfileLogin"
import EditProfileOnlineOrder from "./EditProfileOnlineOrder/EditProfileOnlineOrder"
import Notification from "./EditProfileComponent/Notification"
import { IconButton } from "@mui/material"
import { Link } from "react-router-dom"
import Cookies from 'universal-cookie';
import Axios from 'axios';
const EditProfile = () => {
    const cookies = new Cookies();
    const token_data = cookies.get('Token_access')
   const [Profile ,SetProfile] =  React.useState([])
   const [Api , SetApi] =  React.useState(false)
    React.useEffect( ()=>{
        const config = {
            headers: { Authorization: `Bearer ${token_data}` }
        };
      
        Axios.get(`https://sweede.app/UserPanel/Get-GetUserProfile/`,
            config,

        )
            .then((res) => {
                SetProfile(res.data)
            })
            .catch((error) => {
                console.error(error)    
            })
    },[Api])
    console.log(Profile)    
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
                <EditProfileLogin Profile ={Profile} Api={Api}  SetApi = {SetApi}/>
                <EditProfileOnlineOrder/>
                <Notification/>
            </div>

        </div>
    )
}
export default EditProfile