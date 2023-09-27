import * as React from 'react';
import { BiMap } from "react-icons/bi"
import LoadingButton from '@mui/lab/LoadingButton';
import useStyles from "../../../../Style"
import Box from '@mui/material/Box';


import { Rating } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { ScrollContainer } from 'react-indiana-drag-scroll';
import Axios from "axios";
import DispensoriesAddressSkeleton from '../../../Component/Skeleton/DashBoardSkeleton/DispensoriesAddressSkeleton';
const Dispensories = () => {
    const ref = React.useRef(null);
    const Navigate = useNavigate();
    // const { dispatch } = React.useContext(Createcontext)
    // const [Store, SetStore] = useState([])
    const [Store, SetStore] = React.useState([])
    const [Skeleton, SetSkeleton] = React.useState(true)
    React.useEffect(() => {

        Axios.get(
            'https://api.cannabaze.com/UserPanel/Get-Dispensaries/',

        ).then(response => {
            SetStore(response.data)
            SetSkeleton(false)

        }).catch(
        )
    }, [])

    const classes = useStyles()
    return (
        <React.Fragment>
            <div className="container-fluid">
                {!Skeleton ? <div className=''>
                    <div className='col-12  mt-4' style={{ padding: "0" }}>
                        <div className="disp_head" style={{ top: "0" }}>
                            <h3 className='section_main_title'>Shop Dispensaries  near you</h3>
                        </div>
                    </div >
                    <div className="col-12 mt-3  recentViewProductSlider" id="width" ref={ref}>
                        <ScrollContainer className="ScrollContainerRelative">

                            {Store.map((ele, index) => {
                                return (

                                    <div className='dispensoriesContainer  dispensoriesCard' key={index}>
                                        <div className=' dispensoriesAddressBorder'>
                                            <div className='dispensoriesAddresCardimg'>
                                                <Link  to={`/weed-dispensaries/${ele.Store_Name.replace(/\s/g,'-')}/${"menu"}/${ele.id}`}>
                                                    <img src={`https://api.cannabaze.com/${ele?.Store_Image}`} alt='img_not_found' className=' dispensories_image  center-block' />
                                                </Link>
                                            </div>
                                            <div className='dispensoriesContentContainer'>
                                                <Link className='dispensoriesLinkStyles' to={`/Weed-Dispensories/${ele.Store_Name.replace(/\s/g,'-')}/${"Menu"}/${ele.id}`}>
                                                    <div className='col-12'>

                                                        <div className=' dis_right_div'>
                                                            <p className='ellipsis dispensoriesHeadings'>{ele.Store_Name.charAt(0).toUpperCase() + ele.Store_Name.slice(1)}</p>
                                                        </div>
                                                    </div>
                                                    <div className='col-12 '>
                                                   
                                                        <div className=' Dispensaries_card_discription'>
                                                            <div className=''>
                                                                <span className='span_nav'><BiMap className={classes.disPen_Icons} /></span>
                                                            </div>

                                                            <div className='col-10'>
                                                                <p className='ellipsis mb-0'>{ele.Store_Address}</p>
                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div className='col-12  '>
                                                        <div className='    Dispensaries_card_discription'>
                                                            <span className='ellipsis'>{ele.Store_Type}</span>
                                                        </div>
                                                    </div>


                                                </Link>
                                                <div className=' dispensoriesAddressRatingCol '>
                                                    <span className='rating_title'>Rating</span>
                                                    <Rating className={classes.homePageStarIcons} color='green' name="read-only" value={4} readOnly />
                                                </div>

                                                <div className='col-12  mt-4'>

                                                    <Box
                                                        className={`${classes.loadingBtnTextAndBack}`}
                                                    >
                                                        <LoadingButton onClick={() => { Navigate(`/weed-dispensaries/${ele.Store_Name.replace(/\s/g,'-')}/${"menu"}/${ele.id}`) }} style={{ width: "100%" }}>Order Pickup</LoadingButton>
                                                    </Box>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                )
                            })}
                        </ScrollContainer >
                    </div >
                </div >
                    :
                    <DispensoriesAddressSkeleton></DispensoriesAddressSkeleton>}
            </div>

        </React.Fragment>
    )
}
export default Dispensories