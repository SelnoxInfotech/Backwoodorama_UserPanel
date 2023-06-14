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
const Profile = () => {
    const classes = useStyles()
    const [IsProfileSelected,SeIsProfileSelected]=React.useState(true)
    const ProfileList = [{ icons: <MdOutlineShoppingBasket color="#707070" size={22} />, item: "Order" }, { icons: <AiFillHeart color="#707070" size={22} />, item: "Favorite" },
    { icons: <AiFillStar color="#707070" size={22} />, item: "Review" }, { icons: <IoIosSettings color="#707070" size={22} />, item: "Help" }]
    return (
        <div className="container">
            <div className="row mx-2">
                <div className="col-sm-8 col-12 profile_container px-0">
                    <div className="row mx-0">
                        <div className="col-lg-4 col-6 px-0">
                            <div className="w-100">
                            <div className="profile_image ">
                                <LazyLoadImage src="./image/user.webp" className="profile_images"/>
                            </div>
                            </div>
                            <div className="w-100 profileInput_container">
                            <label for="profile image" className="change_profile_container_padding">
                                <input type="file" hidden id="profile image" />
                                <AiFillCamera  color="#707070" size={22} /><span className="nameChangeProfile">Change profile</span>
                            </label>
                            </div>
                        </div>
                        <div className="col-lg-8 col-6">
                         <section style={{marginTop:"25px"}}>
                         <div className="ProfileName_container">
                                <h1 className="profile_user_name">Maxwell</h1>
                            </div>
                            <div className="profileEdit_Icon">
                               <Link to="/EditProfile"><span><MdEdit color="#707070" size={18}/></span><span className="profileEdit">Edit</span></Link>
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
                                        <li className="">
                                            <span>{val.icons}</span><span className="profileListItems">{val.item}</span>
                                        </li>
                                        <hr />
                                    </div>
                                )
                            })}
                        </ol>
                    </section>
                    <Box className={`mt-4 profileLodingBtn_position ${classes.profileLoadingBtn}`}>
                        <LoadingButton>Logout</LoadingButton>
                    </Box>

                </div>

            </div>

        </div>
    )
}
export default Profile