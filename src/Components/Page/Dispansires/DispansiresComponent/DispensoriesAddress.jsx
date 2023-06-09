import * as React from 'react';
import { BiMap } from "react-icons/bi"
import LoadingButton from '@mui/lab/LoadingButton';
import useStyles from "../../../../Style"
import Box from '@mui/material/Box';
import styled from "styled-components";
import { useEffect, useState } from 'react';
import { Rating } from '@mui/material';
import { Link } from 'react-router-dom';
import Createcontext from '../../../../Hooks/Context';
import { ScrollContainer } from 'react-indiana-drag-scroll';
import Axios from "axios";

const DispensoriesAddress = () => {
    const ref = React.useRef(null);

    const { dispatch } = React.useContext(Createcontext)
    // const [Store, SetStore] = useState([])
    const [Store, SetStore] = React.useState([])
    React.useEffect(() => {

        Axios.get(
            'https://sweede.app/UserPanel/Get-Dispensaries/',
           
            ).then(response => {
                SetStore(response.data)
                
            }).catch(
                function (error) {
          
                   
                })
    }, [])
    // useEffect(() => {
    //     const fetchApiFun = async () => {
    //         const fetchApi = await fetch("https://sweede.app/UserPanel/Get-Stores/");
    //         const data = await fetchApi.json();
    //         SetStore(data)
    //         dispatch({ type: 'Dispensories', Dispensories: data })

    //     }
    //     fetchApiFun()
    // }, [])

    const classes = useStyles()
    return (
        <>
            <div className="container-fluid">
                <div className='row'>
                    <div className='col-12  mt-4'  style={{    padding: "0"}}>
                        <div className="disp_head" style={{top:"0"}}>
                            <h1>Shop Dispensaries  near you</h1>
                        </div>
                    </div >
               

        

            <div className="col-12 mt-3  recentViewProductSlider" id="width" ref={ref}>
                <ScrollContainer className="ScrollContainerRelative">

                    {Store.map((ele, index) => {
                        return (

                            <div className='dispensoriesContainer col-12  col-sm-6 col-md-6 col-lg-4 col-xl-3' key={index}>
                                <div className=' dispensoriesAddressBorder mx-3'>

                                    <div className='col-12 dispensories_image_containerss'>
                                        <Link to={`/DispensoriesProduct/${ele.id}/${"Menu"}`}>
                                            <img src={`https://sweede.app/${ele?.Store_Image}`} alt='img_not_found' className='img-responsive dispensories_image  center-block' />
                                        </Link>
                                    </div>
                                    <div className='dispensoriesContentContainer px-4'>
                                        <Link to={`/DispensoriesProduct/${ele.id}/${"Menu"}`}>
                                            <div className='col-12'>

                                                <div className=' col-10  dis_right_div'>
                                                    <p className='ellipsis'>{ele.Store_Name.charAt(0).toUpperCase() + ele.Store_Name.slice(1)}</p>
                                                </div>
                                            </div>
                                            <div className='col-12  '>

                                                <div className=' col-10 Dispensaries_card_discription'>
                                                    <div className='col-2'>
                                                        <span className='span_nav'><BiMap className={classes.disPen_Icons} /></span>
                                                    </div>

                                                    <div className='col-10'>
                                                        <p className='ellipsis'>{ele.Store_Address}</p>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                            <div className='col-12  '>
                                                <div className=' col-10 Dispensaries_card_discription'>
                                                    <span className='ellipsis'>{ele.Store_Type}</span>
                                                </div>
                                            </div>
                                            
                                            
                                        </Link>
                                        <div className='col-12  '>
                                            <div className=' col-10 Rating'>
                                                <div className='col-2 color'>
                                                    <span>Rating</span>
                                                </div>

                                                <div className='col-10 '>
                                                    <span className='mx-3'> <Rating className={classes.homePageStarIcons} color='green' name="read-only" value={4} readOnly /></span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='col-12  mt-4'>

                                            <Box
                                                className={`${classes.loadingBtnTextAndBack}`}
                                            >
                                                <LoadingButton style={{ width: "100%" }}>Order Pickup</LoadingButton>
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
            </div>

        </>
    )
}
export default DispensoriesAddress