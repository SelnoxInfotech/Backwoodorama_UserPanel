import EditUserName from './EditProfileOnlineOrderComponent/EditUserName';
import AddMobileNumberPopup from './EditProfileOnlineOrderComponent/AddMobileNumerPopup';
import AddDeliveryAddressPopup from './EditProfileOnlineOrderComponent/AddDeliveryAddressPopup';
import AddPhotoId from './EditProfileOnlineOrderComponent/AddPhotoId';
import MedicalCardDetailsPopup from './EditProfileOnlineOrderComponent/MedicalCardDetailsPopup';
import AddDateOfBirth from './EditProfileOnlineOrderComponent/AddDateOfBirth';
const EditProfileOnlineOrder = () => {
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
                                <span className='editProfile_name'>Name</span>
                            </div>
                            <div className="EditProfileOnlineOrder">
                                <p className="editProfileLoginParaStyle">Maxwell</p>
                            </div>

                        </div>
                        <div className="col-6 EditProfilOnlineEdit_icons_flelds">
                            <div className='EditProfileOnline_name'>
                                <EditUserName />

                            </div>
                        </div>

                    </div>
                    <div className="row mt-4 mx-0">
                        <div className="col-6 EditProfilOnlineOrder_name_flelds">
                            <div className='EditProfileOnline_name'>
                                <span className='editProfile_name'>Mobile Number</span>
                            </div>
                            <div className="EditProfileOnlineOrder">
                                <p className="editProfileLoginParaStyle">81818639200</p>
                            </div>

                        </div>
                        <div className="col-6 EditProfilOnlineEdit_icons_flelds">
                            <div className='EditProfileOnline_name'>
                                <AddMobileNumberPopup />

                            </div>
                        </div>

                    </div>
                    <div className="row mt-4 mx-0">
                        <div className="col-6 EditProfilOnlineOrder_name_flelds">
                            <div className='EditProfileOnline_name'>
                                <span className='editProfile_name'>Delivery Address</span>
                            </div>
                            <div className="EditProfileOnlineOrder">
                                <p className="editProfileLoginParaStyle">Delivery Address</p>
                            </div>
                        </div>
                        <div className="col-6 EditProfilOnlineEdit_icons_flelds">
                            <div className='EditProfileOnline_name'>
                                <AddDeliveryAddressPopup />

                            </div>
                        </div>

                    </div>
                    <div className="row mt-4 mx-0">
                        <div className="col-6 EditProfilOnlineOrder_name_flelds">
                            <div className='EditProfileOnline_name'>
                                <span className='editProfile_name'>Photo Id</span>
                            </div>
                            <div className="EditProfileOnlineOrder">
                                <p className="editProfileLoginParaStyle">Photo Id</p>
                            </div>

                        </div>
                        <div className="col-6 EditProfilOnlineEdit_icons_flelds">
                            <div className='EditProfileOnline_name'>
                                <AddPhotoId />

                            </div>
                        </div>

                    </div>
                    <div className="row mt-4 mx-0">
                        <div className="col-6 EditProfilOnlineOrder_name_flelds">
                        <div className='EditProfileOnline_name'>
                                <span className='editProfile_name'>Medical Card Details</span>
                            </div>
                            <div className="EditProfileOnlineOrder">
                                <p className="editProfileLoginParaStyle">Medical Card Details</p>
                            </div>
                           
                        </div>
                        <div className="col-6 EditProfilOnlineEdit_icons_flelds">
                            <div className='EditProfileOnline_name'>
                                <MedicalCardDetailsPopup />
                            </div>
                        </div>

                    </div>

                    <div className="row mt-4 mx-0">
                        <div className="col-6 EditProfilOnlineOrder_name_flelds">
                        <div className='EditProfileOnline_name'>
                                <span className='editProfile_name'>Add Date Of Birth</span>
                            </div>
                            <div className="EditProfileOnlineOrder">
                                <p className="editProfileLoginParaStyle">Add Date Of Birth</p>
                            </div>
                        </div>
                        <div className="col-6 EditProfilOnlineEdit_icons_flelds">
                            <div className='EditProfileOnline_name'>
                                <AddDateOfBirth />
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}
export default EditProfileOnlineOrder