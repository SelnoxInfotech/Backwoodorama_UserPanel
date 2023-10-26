import React, { useState } from "react";
import { FaRegEnvelope , FaWineBottle , FaToilet} from "react-icons/fa"
import { GiPlainCircle , GiSittingDog } from "react-icons/gi"
import { MdDoNotDisturb  } from "react-icons/md"
import { CiGlobe  } from "react-icons/ci"
import {BsFillCarFrontFill , BsTelephone , BsCashCoin} from "react-icons/bs"
import {AiOutlinePlus , AiFillCar} from "react-icons/ai"
import { IoStorefrontSharp , IoLocationOutline } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb"
import { GrDeliver } from "react-icons/gr"
import { SlSocialSpotify } from "react-icons/sl"
import { RiSettings2Fill } from "react-icons/ri"
import { MdOutlineImageSearch , MdOutlineNotAccessible , MdSecurity , MdAssistantNavigation , MdEmail } from "react-icons/md"
import Openingtime from "./StoreDetailComponent/Openingtime";
const StoreDetail1 = ({storeDetails}) => {
//    const[storeDetails,setstoreDetails] =useState([])

//     React.useEffect(() => {
//         axios.get(`https://api.cannabaze.com/UserPanel/Get-StoreById/${id}`, {
//         }).then(response => {
//             SetDespens(response.data)
           
//         })
//     })
    return (
        <React.Fragment>
        <div className="container-fluid mt-3">
            <div className="amenities_container">
                <div className="row center">
                    <div className="col-12  fontStyle">
                        <h2 className="amenties_nameHeading">Amenities</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 ameitiesList_container_height">
                        <ol className="amenities_list">
                            
                          
                                   
                                   
                                {
                                    storeDetails[0]?.CurbSide_Pickup === true && <li className="amenties_list_items">
                                       
                                            <p className="m-0 amenities_list_item_paragrap listfontStyle">
                                            <BsFillCarFrontFill/> Curbside Pickup
                                            </p>
                                     
                                    </li>
                                 
                                }
                                 {
                                    storeDetails[0]?.CarParking ?
                                 
                                    <li className="amenties_list_items">
                                       
                                            <p className="m-0 amenities_list_item_paragrap listfontStyle">
                                            <AiFillCar/> Car Parking
                                            </p>
                                     
                                    </li>
                                   : null
                                }
                                 {
                                    storeDetails[0]?.Dogs_allowed ?
                                 
                                    <li className="amenties_list_items">
                                            <p className="m-0 amenities_list_item_paragrap listfontStyle">
                                              <GiSittingDog/> Dogs Allowed
                                            </p>
                                    </li>
                                     : null
                                }
                                 {
                                    storeDetails[0]?.Has_bar_on_site ?
                                 
                                    <li className="amenties_list_items">
                                       
                                            <p className="m-0 amenities_list_item_paragrap listfontStyle">
                                               <FaWineBottle/> Has Bar on Site
                                            </p>
                                     
                                    </li>
                                   : null
                                }
                                 {
                                    storeDetails[0]?.Has_gender_neutral_toilets ?
                                 
                                    <li className="amenties_list_items">
                                       
                                            <p className="m-0 amenities_list_item_paragrap listfontStyle">
                                              <FaToilet/> Has Gender Neutral Toilets
                                            </p>
                                     
                                    </li>
                                   : null
                                }
                                {
                                   storeDetails[0]?.Medical ?
                                       <li className="amenties_list_items">
                                          
                                                <p className="m-0 amenities_list_item_paragrap listfontStyle">
                                                <AiOutlinePlus/> Medical
                                                </p>
                                           
                                        </li>
                                   :
                                   null
                                }  
                                 {
                                   storeDetails[0]?.Minimum_21_years_or_older ?
                                       <li className="amenties_list_items">
                                          
                                                <p className="m-0 amenities_list_item_paragrap listfontStyle">
                                                <MdDoNotDisturb/> Minimum 21 years or older
                                                </p>
                                           
                                        </li>
                                   :
                                   null
                                } {
                                    storeDetails[0]?.StoreFront ?
                                        <li className="amenties_list_items">
                                           
                                                 <p className="m-0 amenities_list_item_paragrap listfontStyle">
                                                   <AiOutlinePlus/> Store Front
                                                 </p>
                                            
                                        </li>
                                    :
                                    null
                                 } 
                                {
                                    storeDetails[0]?.Security_Staff ?
                                       <li className="amenties_list_items">
                                       
                                                <p className="m-0 amenities_list_item_paragrap listfontStyle">
                                                <MdSecurity/> Security
                                                </p>
                                     
                                        
                                        </li>
                                        :
                                        null
                                   
                                }
                                {
                                    storeDetails[0]?.Cash_on_Delivery ?
                                
                                       <li className="amenties_list_items">
                                           
                                            
                                                <p className="m-0 amenities_list_item_paragrap listfontStyle">
                                                <BsCashCoin/> COD
                                                </p>
                                          
                                        
                                        </li>
                                   :
                                   null
                                }   

                                
                        </ol>
                    </div>

                </div>


            </div>
            <div className="row  my-2">
             
                <div className="col-lg-8 store_detail_container my-2">
            
                    <div className="row">
                        <div className="col-12 StoreDetail_paragraph fontStyle store_middle_content_top ">
                            <p>About Us</p>
                        </div>
                        <div  dangerouslySetInnerHTML={{__html: storeDetails[0]?.Stores_Description}}>
                        </div>
                        <div className="row">
                            {
                                storeDetails[0]?.Hours !== null &&  <div className="  col-md-4 col-12">
                                <Openingtime storeDetails={storeDetails} heading={"Store Hours"} type={'Hours'}/>
                             </div>
                            }
                           {
                                storeDetails[0]?.Hours !== null &&  <div className="  col-md-4 col-12">
                                <Openingtime storeDetails={storeDetails} heading={"CrubSide PickUp Hours"} type={'Hours'}/>
                             </div>
                            }
                           
                        </div>
                    </div>

                        

                </div>
                <div className="col-lg-4 storeDetail_container my-2">
                <div className="">
                    <h3 className="fontStyle store_detail_menu_heading">{storeDetails[0]?.Store_Name}</h3>
                    <div className="col-12 store_detail_SideMenuBar_container">

                        <ol className="store_detail_SideMenuBar_order_list">

                            
                                 
                                    <li className="StoreDetailSidemenuBarList">
                                      <CiGlobe/>
                                        
                                        <span className="StoreDetailSideMenu_listItems"> {storeDetails[0]?.Stores_Website}</span>
                                    </li>
                                    <li className="StoreDetailSidemenuBarList">
                                    <BsTelephone/>
                                        
                                        <span className="StoreDetailSideMenu_listItems"> {storeDetails[0]?.Stores_MobileNo}</span>
                                    </li>
                                    <li className="StoreDetailSidemenuBarList">
                                    <GrDeliver/>
                                        
                                        <span className="StoreDetailSideMenu_listItems"> {storeDetails[0]?.Order_Type}</span>
                                    </li>
                                    <li className="StoreDetailSidemenuBarList">
                                    <IoStorefrontSharp/>
                                        
                                        <span className="StoreDetailSideMenu_listItems"> {storeDetails[0]?.Store_Type}</span>
                                    </li>
                                    <li className="StoreDetailSidemenuBarList">
                                    <IoLocationOutline/>
                                        
                                        <span className="StoreDetailSideMenu_listItems"> {storeDetails[0]?.CurbSideStreet}</span>
                                    </li>
                                    <li className="StoreDetailSidemenuBarList">
                                    <TbTruckDelivery/>
                                        
                                        <span className="StoreDetailSideMenu_listItems"> { storeDetails[0]?.searchboxlocation !== null &&    storeDetails[0]?.searchboxlocation?.map((item)=>{
                                            let data =  item.Address.split(', ')
                                            return `${data[0]}, `
                                        })}</span>
                                    </li>
                                    {/* <li className="StoreDetailSidemenuBarList d-flex">
                                    <FaRegEnvelope/>
                                        
                                        <span className="StoreDetailSideMenu_listItems"> {storeDetails[0].Stores_Website}</span>
                                    </li>
                                    <li className="StoreDetailSidemenuBarList d-flex">
                                    <FaRegEnvelope/>
                                        
                                        <span className="StoreDetailSideMenu_listItems"> {storeDetails[0].Stores_Website}</span>
                                    </li>
                                    <li className="StoreDetailSidemenuBarList d-flex">
                                    <FaRegEnvelope/>
                                        
                                        <span className="StoreDetailSideMenu_listItems"> {storeDetails[0].Stores_Website}</span>
                                    </li> */}

                               
                        </ol>
                    </div>




                </div>

                </div>
            </div>
        </div>



        </React.Fragment>
    )
}
export default StoreDetail1