import * as React from 'react';
import Box from '@mui/material/Box';
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

const ProductIncDecQuantity = ({ items, AddToCart }) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [SelectWeight, SetSelectWeight] = React.useState(items?.Prices[0]?.Price[0]?.id);
    // const [ Price ,  SetPrice] =  React.useState(parseInt(items?.Prices[0]?.Price[0]?.SalePrice))
    const [counter, setCounter] = React.useState(1);

    const handleChange = (event) => {
        SetSelectWeight(event.target.value);
        setCounter(count => count = 1);
    };
    const increase = () => {
        setCounter(count => count + 1);
      };
      const decrease = () => {
        if (counter > 1) {
            setCounter(count => count - 1);
          }
      };
    const classes = useStyles()
    return (
        <>
            <LoadingButton style={{ width: "60%", height: "30px", fontSize: "12px" }} onClick={handleOpen}>Add To Cart</LoadingButton>

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
                                <LazyLoadImage className='prod_inc_dec_image'
                                    src={`http://backend.sweede.net/${items?.images[0].image}`}

                                    alt="image not available" />
                            </div>
                            <div className='col-12 col-md-8 col-sm-6 productInc_dec_content'>
                                <div className='row'>
                                    <div className='col-12 prod_inc_dec_quant_heading'>
                                        <h1 className='ellipsis'>{items.Product_Name}</h1>

                                    </div>
                                    <div className='col-12 prod_inc_dec_quant_heading'>
                                        <h2 className='ellipsis'>by {items.StoreName}</h2>

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
                                        <FormControl sx={{ m: 1, minWidth: 120, background: "#F2F2F2" }} size="small">
                                            <Select
                                                value={SelectWeight}
                                                onChange={handleChange  }
                                                displayEmpty
                                                inputProps={{ 'aria-label': 'Without label' }}
                                            >
                                                <MenuItem value="">
                                                    select weight
                                                </MenuItem>
                                                {
                                                    items?.Prices[0]?.Price
                                                        .map((data) => {
                                                            return (<MenuItem key={data.id}  value={data.id}>{data.Weight}</MenuItem>)
                                                        })
                                                }
                                            </Select>
                                        </FormControl>
                                    </div>
                                    <div className='col-lg-2 col-md-3 col-3 prod_quant_num'>

                                        <p>Quantity</p>
                                    </div>
                                    <div className='col-lg-10 col-md-9 col-9   px-4'>
                                        <div className='prod_inc_plus_minus mx-2 d-flex'>
                                            <div className='Prod_subtract_div '>
                                                <LoadingButton className='subBtn1' onClick={decrease}>
                                                    <GrFormSubtract />

                                                </LoadingButton>
                                            </div>
                                            <div className='prod_digit'>
                                                {counter}
                                            </div>
                                            <div className='prod_addition_div'>
                                                <LoadingButton className='aaBtn2' onClick={increase}>
                                                    <MdAdd />

                                                </LoadingButton>
                                            </div>
                                            <div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-12'>
                                        {
                                            items?.Prices[0]?.Price.map((data) => {
                                                return (
                                                    SelectWeight === data.id &&
                                                    <>
                                                        <span className='prod_price_font'>${parseInt(data.SalePrice)}</span><span className='mx-4 prod_quant_font'>PER 1Z</span>
                                                    </>
                                                )
                                            })
                                        }

                                    </div>

                                    <div className='col-12 my-2'>
                                        <Box
                                            className={` boxWidth ${classes.loadingBtnTextAndBack}`}
                                        >
                                            <LoadingButton style={{ width: "50%", height: "25px" }} variant="outlined" onClick={() => { AddToCart(items,counter , SelectWeight)  }} >Buy now</LoadingButton>
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