import { MdEdit } from "react-icons/md"
import React from "react";
import { MdOutlineShoppingBasket } from "react-icons/md"
import { AiFillHeart } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai"
import { IoIosSettings } from "react-icons/io"
import LoadingButton from '@mui/lab/LoadingButton';
import { AiFillCamera } from "react-icons/ai"
import Box from '@mui/material/Box';
import useStyles from "../../../Style";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import Cookies from 'universal-cookie';
import Createcontext from "../../../Hooks/Context";
import { useNavigate } from "react-router-dom";
import Axios from 'axios';
const Profile = () => {
    const classes = useStyles()
    const { state, dispatch } = React.useContext(Createcontext)
    const cookies = new Cookies();
    const token_data = cookies.get("User_Token_access")
    const [selectedImage, setSelectedImage] = React.useState(null);
    const [Error, SetError] = React.useState('')
    const Navigate = useNavigate()
    const [ProfileListSelected, SetProfileListSelected] = React.useState(1)
    const ProfileList = [{ id: 1, icons: <MdOutlineShoppingBasket color="#707070" size={22} />, item: "Order" ,Link:"/myorder" },
    { id: 2, icons: <AiFillHeart color="#707070" size={22} />, item: "Favorite" },
    { id: 3, icons: <AiFillStar color="#707070" size={22} />, item: "Review" },
    { id: 4, icons: <IoIosSettings color="#707070" size={22} />, item: "Help" }]
    function Logout() {
        cookies.remove('User_Token_access')
        dispatch({ type: 'Login', login: false })
        dispatch({ type: 'ApiProduct' });
        Navigate("/")
    }
    const handleProfileListAndRedirect = (listIds) => {
        SetProfileListSelected(listIds)
    }
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

    React.useEffect(() => {
        document.documentElement.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant", // Optional if you want to skip the scrolling animation
        });
    }, [])
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
        )
            .then((res) => {
                dispatch({ type: 'Profile', Profile: res.data.data            })
            })
            .catch((error) => {
              
                // setError("Username", {
                //     type: "manual",
                //     message: error.response.data.error.username[0],
                // })
            })
    }


    return (
        <div className="container">
            <div className="row mx-2">
                <div className="col-sm-8 col-12 profile_container px-0">
                    <form>
                        <div className="row mx-0">
                            <div className="col-12  px-0 d-flex">
                                <section className="profile_image_section">
                                    <div className="profile_image ">
                                    {
                                            selectedImage !== null ? <LazyLoadImage src={selectedImage} alt='profile_image'    className="profile_images" />
                                                :
                                                <LazyLoadImage
                                                    onError={event => {
                                                        event.target.src = "./image/user.webp"
                                                        event.onerror = null
                                                    }}
                                                    src={ state.Profile.googlelink === null ?`${state.Profile.image} ` : state.Profile.googlelink}
                                                    // src={image}
                                                    alt='profile_image'
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

                                </section>
                                <section className="profile_edit_text">
                                    <div className="ProfileName_container">
                                        <h1 className="profile_user_name ellipsis">{state.Profile.username}</h1>
                                    </div>
                                    <div className="profileEdit_Icon">
                                        <Link to="/EditProfile"><span><MdEdit color="#707070" size={18} /></span><span className="profileEdit">Edit User Profile</span></Link>
                                    </div>
                                </section>
                            </div>


                        </div>
                        <hr />
                        <section className="px-0 profile_list_items_section">
                            <ol className="px-0 ProfileOrderList">
                                {ProfileList.map((val, index) => {
                                    return (
                                        <div className="profile_list_div" key={index}>
                                            <li className="profileListItems_cursor">
                                                <span>{val.icons}</span>
                                              <Link to={val.Link}>  <span className="profileListItems" style={{ color: ProfileListSelected === val.id ? "#31B665" : "" }} onClick={() => handleProfileListAndRedirect(val.id)}>{val.item}</span></Link>
                                            </li>
                                            <hr />
                                        </div>
                                    )
                                })}
                            </ol>
                        </section>
                        <Box className={`mt-4 profileLodingBtn_position ${classes.profileLoadingBtn}`}>
                            <LoadingButton onClick={Logout}>Logout</LoadingButton>
                        </Box>
                    </form>
                </div>

            </div>

        </div>
    )
}
export default Profile