import { MdEdit } from "react-icons/md"
import {MdOutlineShoppingBasket} from "react-icons/md"
import {AiFillHeart} from "react-icons/ai";
import {AiFillStar} from "react-icons/ai"
import {IoIosSettings} from "react-icons/io"
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import useStyles from "../../../Style";
const Profile = () => {
    const classes = useStyles()

    const ProfileList=[{icons:<MdOutlineShoppingBasket color="#707070" size={22}/>,item:"Order"},{icons:<AiFillHeart color="#707070" size={22}/>,item:"Favorite"},
    {icons:<AiFillStar color="#707070" size={22}/>,item:"Review"},{icons:<IoIosSettings color="#707070" size={22}/>,item:"Help"}]
    return (
        <div className="container">
            <div className="row mx-2">
                <div className="col-sm-8 col-12 profile_container px-0">
                    <div className="row">
                        <div className="col-2">

                        </div>
                        <div className="col-10">
                          <div className="ProfileName_container">
                             <h1>Maxwell</h1>
                          </div>
                          <div className="profileEdit_Icon">
                            <span><MdEdit/></span><span>Edit</span>
                          </div>
                        </div>

                    </div>
                    <hr/>
                    <section className="px-0 profile_list_items_section">
                        <ol className="px-0 ProfileOrderList">
                        {ProfileList.map((val,index)=>{
                            return(
                                <div className="profile_list_div">
                                <li className="">
                                    <span>{val.icons}</span><span className="profileListItems">{val.item}</span>
                                </li>
                                <hr/>
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