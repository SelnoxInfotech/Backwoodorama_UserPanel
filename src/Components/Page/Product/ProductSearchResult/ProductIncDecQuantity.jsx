import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { LazyLoadImage } from "react-lazy-load-image-component";

const style = {
    position: 'absolute',
    top: '30%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

const ProductIncDecQuantity = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>
            <Button onClick={handleOpen}>Buy now</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-6'>
                                <LazyLoadImage src="/image/cat_pro_7.jpg" alt="image not available" height={"100px"}/>
                            </div>
                            <div className='col-6'>
                                <div className='row'>
                                    <div className='col-12 prod_inc_dec_quant_heading'>
                                    <h1>Uraban flavour</h1>

                                    </div>
                                    <div className='col-12 prod_inc_dec_quant_heading'>
                                    <h1>by Tribe Tokes</h1>

                                    </div>
                                    <div className='col-12 product_inc_dec_quantity_btn_cont'>
                                        <button className='product_inc_dec_quantity_btn'>15% THC</button>
                                        <button className='product_inc_dec_quantity_btn'>0.2% CBD</button>
                                        <button className='product_inc_dec_quantity_btn'>Indica</button>


                                    </div>

                                </div>
                            </div>

                        </div>

                    </div>

                </Box>
            </Modal>
        </>
    )
}
export default ProductIncDecQuantity