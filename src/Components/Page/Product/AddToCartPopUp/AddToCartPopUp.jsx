import * as React from 'react';
import Stack from '@mui/joy/Stack';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import ModalDialog from '@mui/joy/ModalDialog';
import useStyles from '../../../../Style';
import Box from '@mui/material/Box';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import LoadingButton from '@mui/lab/LoadingButton';
import Createcontext from "../../../../Hooks/Context"
import Cookies from 'universal-cookie';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
const AddToCartPopUp = ({ CartClean, SetCartClean, NewData, SetAddToCard }) => {
    const classes = useStyles()
    const Navigate = useNavigate()
    const cookies = new Cookies();
    const token_data = cookies.get('Token_access')
    const { state ,dispatch } = React.useContext(Createcontext)
    const [Loading, SetLoading] = React.useState(false)
    const [layout, setLayout] = React.useState(CartClean);
    function CleanData() {
        if (state.login) {
            SetLoading(true)
            const config = {
                headers: { Authorization: `Bearer ${token_data}` }
            };

            axios.post("https://sweede.app/UserPanel/ClearAddtoCart/",
            NewData,
            config,
            ).then(response => {
                dispatch({ type: 'ApiProduct' })
                SetLoading(false)
                SetCartClean(false)


            }).catch(
                function (error) {
                    SetLoading(false)
                })
        }
        else {
            
            SetLoading(true)
            setTimeout(function () {
                localStorage.clear();
                dispatch({ type: 'ApiProduct' , ApiProduct:!state.ApiProduct })
                SetAddToCard([NewData])
                SetLoading(false)
                SetCartClean(false)
            }, 2000)

        }

    }
    function Redirect (){
    SetCartClean(false)
    Navigate("/AddToCart")
    
    }
    return (
        <React.Fragment>
            <Stack direction="row" spacing={1}>


            </Stack>
            <Modal open={!!layout} onClose={() => {  SetCartClean(false) }}>
                <ModalDialog
                    aria-labelledby="layout-modal-title"
                    aria-describedby="layout-modal-description"
                    layout={layout}
                    sx={{ width: "32rem", height: "40rem" }}
                >
                    <ModalClose />
                    <div className='container-fluid marginRow'>
                        <div className='row '>
                            <div className='col-12 AddToCartImageContainer'>
                                <div className='addToCartPopUpImage_background'>
                                    <LazyLoadImage src='/image/addtocart1.jpg' alt='not avail' height={"100px"} width={"100px"} />

                                </div>


                            </div>
                            <div className='col-12 AddToCartHeading'>
                                <p>Start a new Cart</p>

                            </div>
                            <div className='col-12 AddToCartParagraphHeight'>
                                <p>You have currently have a items in  you cart from other menu.You may  only add items from one menu.
                                    Would you like to finish your previous order,or start anew cart
                                </p>
                            </div>
                            <div className='col-12'>
                                <Box
                                    className={`  ${classes.loadingBtnTextAndBack}`}
                                >
                                    <LoadingButton variant="outlined" loading={Loading} onClick={CleanData} type={'submit'}>Start a new cart</LoadingButton>
                                </Box>
                            </div>
                            <div className='col-12 my-2'>
                                <Box
                                    className={`  ${classes.loadingBtnTextAndBack}`}
                                >
                                    <LoadingButton variant="outlined" loading={false} onClick={Redirect} type={'submit'}>Complete  previous order</LoadingButton>
                                </Box>
                            </div>

                        </div>

                    </div>


                </ModalDialog>
            </Modal>
        </React.Fragment>
    )
}
export default AddToCartPopUp