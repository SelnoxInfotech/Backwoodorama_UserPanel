import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { LazyLoadImage } from "react-lazy-load-image-component";
import { IoMdStar } from "react-icons/io";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { GrFormSubtract } from "react-icons/gr"
import { MdAdd } from "react-icons/md"
import LoadingButton from '@mui/lab/LoadingButton';
import useStyles from '../../../../Style';


const style = {
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',

    "@media(max-width:800px)": {
        width: "80%",
        marginTop: '10%',

    },
    "@media(max-width:500px)": {
        width: "98%",
        marginTop: '30%',

    },

    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

const ProductIncDecQuantity = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [Data, SetData] = React.useState('');

    const handleChange = (event) => {
        SetData(event.target.value);
    };
    const classes=useStyles()
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
                            <div className='col-12 col-md-4  col-sm-6 productInc_dec_image_cont'>
                                <LazyLoadImage className='prod_inc_dec_image' src="/image/cat_pro_7.jpg" alt="image not available"/>
                            </div>
                            <div className='col-12 col-md-8 col-sm-6 productInc_dec_content'>
                                <div className='row'>
                                    <div className='col-12 prod_inc_dec_quant_heading'>
                                        <h1>Uraban flavour Delivery</h1>

                                    </div>
                                    <div className='col-12 prod_inc_dec_quant_heading'>
                                        <h2>by Tribe Tokes</h2>

                                    </div>
                                    <div className='col-12 product_inc_dec_quantity_btn_cont'>
                                        <button className='product_inc_dec_quantity_btn'>15% THC</button>
                                        <button className='product_inc_dec_quantity_btn'>0.2% CBD</button>
                                        <button className='product_inc_dec_quantity_btn_indica'>Indica</button>


                                    </div>
                                    <div className='col-12 d-flex gap-2'>
                                        <span><IoMdStar className={classes.disp_star_color} /></span><span className='prod_qunat_rating'>4.5</span><span className='prod_qunat_rating'>Rating</span>

                                    </div>
                                    <div className='col-lg-2 col-md-2 col-3 weight_font'>
                                        <p>weight</p>
                                    </div>
                                    <div className='col-lg-10 col-md-10 col-9 px-4'>
                                        <FormControl sx={{ m: 1, minWidth: 120,background:"#F2F2F2" }} size="small">
                                            <Select
                                                value={Data}
                                                onChange={handleChange}
                                                displayEmpty
                                                inputProps={{ 'aria-label': 'Without label' }}
                                            >
                                                <MenuItem value="">
                                                    select weight
                                                </MenuItem>
                                                <MenuItem value={"1gm"}>1gm</MenuItem>
                                                <MenuItem value={"2gm"}>2gm</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </div>
                                    <div className='col-lg-2 col-md-3 col-3 prod_quant_num'>

                                        <p>Quantity</p>
                                    </div>
                                    <div className='col-lg-10 col-md-9 col-9   px-4'>
                                        <div className='prod_inc_plus_minus mx-2 d-flex'>
                                            <div className='Prod_subtract_div '>
                                                <LoadingButton  className='subBtn1'>
                                                    <GrFormSubtract />

                                                </LoadingButton>
                                            </div>
                                            <div className='prod_digit'>
                                                1
                                            </div>
                                            <div className='prod_addition_div'>
                                                <LoadingButton  className='aaBtn2'>
                                                    <MdAdd />

                                                </LoadingButton>
                                            </div>
                                            <div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-12'>
                                      <span className='prod_price_font'>$80.00</span> <span className='mx-4 prod_quant_font'>PER 1Z</span>
                                    </div>

                                    <div className='col-12 my-2'>
                                <Box
                                    className={` boxWidth ${classes.loadingBtnTextAndBack}`}
                                >
                                    <LoadingButton style={{width:"50%",height:"25px"}} variant="outlined" >Buy now</LoadingButton>
                                </Box>
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