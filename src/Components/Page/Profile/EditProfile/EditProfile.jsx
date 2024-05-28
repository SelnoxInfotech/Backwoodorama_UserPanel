import React from "react"
import { IoChevronBackSharp } from "react-icons/io5"
import EditProfileLogin from "./EditProfileComponent/EditProfileLogin"
import EditProfileOnlineOrder from "./EditProfileOnlineOrder/EditProfileOnlineOrder"
import Notification from "./EditProfileComponent/Notification"
import { IconButton } from "@mui/material"
import { AiFillCamera } from "react-icons/ai";
import { Link } from "react-router-dom"
import Cookies from 'universal-cookie';
import { LazyLoadImage } from "react-lazy-load-image-component";
import Axios from 'axios';
import Createcontext from "../../../../Hooks/Context"
const EditProfile = () => {
    const {state, dispatch } = React.useContext(Createcontext)
    const cookies = new Cookies();
    const token_data = cookies.get('User_Token_access')
    const [Profile ,SetProfile] =  React.useState([])
    const [Api , SetApi] =  React.useState(false)
    const [selectedImage, setSelectedImage] = React.useState(null);
    const [Error, SetError] = React.useState('')
    React.useEffect( ()=>{
        const config = {
            headers: { Authorization: `Bearer ${token_data}` }
        };
      
        Axios.get(`https://api.cannabaze.com/UserPanel/Get-GetUserProfile/`,
            config,

        )
            .then((res) => {
                SetProfile(res.data)
                dispatch({ type: 'Profile', Profile:res.data })
            })
            .catch((error) => {
                console.error(error)    
            })
    },[Api])   
    const handleImage = (event) => {
        const file = event.target.files[0];
        if (file?.size <  1048576) {

            setSelectedImage(URL.createObjectURL(event.target.files[0]))
            SetError('')
            Submit(event.target.files[0])
        }
        else {
            SetError('File size large')
        }

    }
    const Submit = (w) => {
        const formdata = new FormData();
        formdata.append('image', w);
        formdata.append('googlelink','');
        Axios.post(`https://api.cannabaze.com/UserPanel/Update-UpdateUserProfile/`,
            formdata,
            {
                headers: {
                    'Authorization': `Bearer ${token_data}`
                }
                ,
            }
        ).then((res) => {
                dispatch({ type: 'Profile', Profile: res.data.data            })
        }).catch((error) => {
            
            // setError("Username", {
            //     type: "manual",
            //     message: error.response.data.error.username[0],
            // })
        })
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 profile_setting_container mt-4">
                <div className="EditProfile_heading_cont d-lg-none d-block">
                      <Link to="/Profile"><span><IconButton><IoChevronBackSharp color="#707070"size={18} /></IconButton></span><span className="editProfile_backBtn">Back Profile</span></Link>
                    </div>
                    <div className="EditProfile_heading_cont">
                        <h1 className="EditProfile_heading">Profile Setting</h1>
                    </div>
                  
                </div>
                <div className="row">
                    <div className="col-lg-8">
                        <div className="profileImage">
                                        <div className="ProfileImageWrapper">
                            
                                            {
                                                    selectedImage !== null ? <LazyLoadImage src={selectedImage} alt='profile_image'
                                                        title='profile_image'
                                                        className="profile_images" />
                                                        :
                                                        <LazyLoadImage
                                                            onError={ event => {
                                                                event.target.src = "/image/user.webp"
                                                                event.onerror = null
                                                            }}
                                                            src={ state.Profile.googlelink === null ?`${state.Profile.image} ` : state.Profile.googlelink}
                                                            alt='profile_image'
                                                            title='profile_image'
                                                            className="profile_images"
                                                        />
                                                }
                                                </div>
                                            <div className="w-100 profileInput_container">
                                                <label for="profile image" className="change_profile_container_padding">
                                                    <input onChange={(event) => { handleImage(event) }} type="file" hidden id="profile image" />
                                                    <AiFillCamera color="#707070" size={22} /><span className="nameChangeProfile">Change profile</span>
                                                    {Error !== '' && <p style={{color:"red",fontSize: 'x-small'}}>{Error}</p>}
                                                </label>
                                            </div>
                        
                        </div>
                    </div>
                </div>
                <EditProfileLogin Profile ={Profile} Api={Api}  SetApi = {SetApi}/>
                <EditProfileOnlineOrder Profile ={Profile} Api={Api}  SetApi = {SetApi}/>
                <Notification  Profile ={Profile} Api={Api}  SetApi = {SetApi}/>
            </div>

        </div>
    )
}
export default EditProfile