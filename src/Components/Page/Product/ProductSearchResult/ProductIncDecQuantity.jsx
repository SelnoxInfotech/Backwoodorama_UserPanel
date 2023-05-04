import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { LazyLoadImage } from "react-lazy-load-image-component";
import { IoMdStar } from "react-icons/io";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
const style = {
    position: 'absolute',
    top: '30%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    "@media(min-width:800px)": {
        width: "50%",
        top: '30%',


    },
    "@media(max-width:800px)": {
        width: "90%",
        top: '30%',

    },
    "@media(max-width:500px)": {
        width: "95%",
        top: '30%',

    },

    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

const ProductIncDecQuantity = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
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
                            <div className='col-6 productInc_dec_image_cont'>
                                <LazyLoadImage className='prod_inc_dec_image' src="/image/cat_pro_7.jpg" alt="image not available" height={"100px"} />
                            </div>
                            <div className='col-6 productInc_dec_content'>
                                <div className='row'>
                                    <div className='col-12 prod_inc_dec_quant_heading'>
                                        <h1>Uraban flavour flavour</h1>

                                    </div>
                                    <div className='col-12 prod_inc_dec_quant_heading'>
                                        <h1>by Tribe Tokes</h1>

                                    </div>
                                    <div className='col-12 product_inc_dec_quantity_btn_cont'>
                                        <button className='product_inc_dec_quantity_btn'>15% THC</button>
                                        <button className='product_inc_dec_quantity_btn'>0.2% CBD</button>
                                        <button className='product_inc_dec_quantity_btn'>Indica</button>


                                    </div>
                                    <div className='col-12 d-flex gap-2'>
                                        <span><IoMdStar /></span><span>4.5</span><span>Rating</span>

                                    </div>
                                    <div className='col-2'>
                                        <p>weight</p>
                                    </div>
                                    <div className='col-10'>
                                        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                                            <Select
                                                value={age}
                                                onChange={handleChange}
                                                displayEmpty
                                                inputProps={{ 'aria-label': 'Without label' }}
                                            >
                                                <MenuItem value="">
                                                    select weight
                                                </MenuItem>
                                                <MenuItem value={10}>Ten</MenuItem>
                                                <MenuItem value={20}>Twenty</MenuItem>
                                                <MenuItem value={30}>Thirty</MenuItem>
                                            </Select>
                                        </FormControl>
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