import * as React from 'react';
import Button from '@mui/joy/Button';
import Stack from '@mui/joy/Stack';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import ModalDialog from '@mui/joy/ModalDialog';
import Typography from '@mui/joy/Typography';
import useStyles from '../../../../Style';
import Box from '@mui/material/Box';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import LoadingButton from '@mui/lab/LoadingButton';

const AddToCartPopUp = () => {
    const classes = useStyles()
    const [layout, setLayout] = React.useState(undefined);
    return (
        <React.Fragment>
            <Stack direction="row" spacing={1}>
                <Button
                    variant="outlined"
                    color="neutral"
                    onClick={() => {
                        setLayout('center');
                    }}
                >
                   Add To Cart
                </Button>

            </Stack>
            <Modal open={!!layout} onClose={() => setLayout(undefined)}>
                <ModalDialog
                    aria-labelledby="layout-modal-title"
                    aria-describedby="layout-modal-description"
                    layout={layout}
                    sx={{ width: "32rem", height: "40rem" }}
                >
                    <ModalClose/>
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
                                     <LoadingButton variant="outlined" loading={false} type={'submit'}>Start a new cart</LoadingButton>
                                </Box>
                            </div>
                            <div className='col-12 my-2'>
                            <Box
                                    className={`  ${classes.loadingBtnTextAndBack}`}
                                >
                                     <LoadingButton variant="outlined" loading={false} type={'submit'}>Complete  previous order</LoadingButton>
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