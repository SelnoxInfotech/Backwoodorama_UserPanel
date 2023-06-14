import TextField from '@mui/material/TextField';
import { MdEdit } from "react-icons/md"
import { Box } from '@mui/material';
import useStyles from '../../../../../Style';
const EditProfileOnlineOrder = () => {
    const classes=useStyles()
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
                                <label for="user name">Name</label>
                            </div>
                            <div className='EditProfileOnline_name'>
                                <TextField className={classes.EditProfileTextFields_Outline} type="text" id="user name" variant="standard" />
                            </div>
                        </div>
                        <div className="col-6 EditProfilOnlineEdit_icons_flelds">
                            <div className='EditProfileOnline_name'>
                                <span><MdEdit color="#707070" size={18} /></span> <span className="editProfileLogin_padding_left">Edit</span>

                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}
export default EditProfileOnlineOrder