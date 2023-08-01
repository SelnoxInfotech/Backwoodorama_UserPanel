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
const Profile = () => {
    const classes = useStyles()
    const { state, dispatch } = React.useContext(Createcontext)
    const cookies = new Cookies();
    const Navigate = useNavigate()
    const [ProfileListSelected, SetProfileListSelected] = React.useState(1)
    const ProfileList = [{ id: 1, icons: <MdOutlineShoppingBasket color="#707070" size={22} />, item: "Order" },
    { id: 2, icons: <AiFillHeart color="#707070" size={22} />, item: "Favorite" },
    { id: 3, icons: <AiFillStar color="#707070" size={22} />, item: "Review" },
    { id: 4, icons: <IoIosSettings color="#707070" size={22} />, item: "Help" }]
    function Logout() {
        cookies.remove('Token_access')
        dispatch({ type: 'Login', login: false })
        dispatch({ type: 'ApiProduct' });
        Navigate("/")
    }
    const handleProfileListAndRedirect = (listIds) => {
        SetProfileListSelected(listIds)
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
                                        <LazyLoadImage
                                            onError={event => {
                                                event.target.src = "./image/user.webp"
                                                event.onerror = null
                                            }}
                                            src={`https://sweede.app/${state.Profile.image}`}
                                            alt=''
                                            className="profile_images"
                                        />
                                    </div>
                                    {/* 
                                        <div className="w-100 profileInput_container">
                                        <label for="profile image" className="change_profile_container_padding">
                                            <input type="file" hidden id="profile image" />
                                            <AiFillCamera color="#707070" size={22} /><span className="nameChangeProfile">Change profile</span>
                                        </label>
                                    </div>                                   
                                   */}
                                </section>
                                <section className="profile_edit_text">
                                    <div className="ProfileName_container">
                                        <h1 className="profile_user_name">{state.Profile.username}</h1>
                                    </div>
                                    <div className="profileEdit_Icon">
                                        <Link to="/EditProfile"><span><MdEdit color="#707070" size={18} /></span><span className="profileEdit">Edit</span></Link>
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
                                                <span className="profileListItems" style={{ color: ProfileListSelected === val.id ? "#31B665" : "" }} onClick={() => handleProfileListAndRedirect(val.id)}>{val.item}</span>
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