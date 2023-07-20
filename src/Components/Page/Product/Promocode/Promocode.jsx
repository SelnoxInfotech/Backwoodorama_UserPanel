import React from "react"
import TextField from '@mui/material/TextField';
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import useStyles from "../../../../Style";
import InputAdornment from '@mui/material/InputAdornment';
import { RxCross1 } from "react-icons/rx";
import { AiOutlineCheck } from "react-icons/ai"
const PromoCode = () => {
    const classes = useStyles()
    return (
        <React.Fragment>
            <div className="col-12 promocode_container">
                <div className="col-12 promocodeLabelCol">
                    <label htmlFor="promocode" className="promoCode_label">Enter a promo code</label>
                </div>
                <div className="col-12 promoCode_textfield_btn_Col">
                    <div className="col-7 promoCode_textfield_col">
                        <TextField
                            className={classes.textFieldFocusBorderColor}
                            placeholder="Enter a promo code"
                            size="small"
                            id="promocode"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <RxCross1 />
                                    </InputAdornment>
                                ),
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <AiOutlineCheck />
                                    </InputAdornment>
                                )
                            }}
                            variant="outlined" fullWidth />
                    </div>
                    <div className="col-5 px-2 promoCodeBtn_Col">
                        <Box className={`${classes.loadingBtnTextAndBack}`}>
                            <LoadingButton variant="outlined">Remove</LoadingButton>
                        </Box>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}
export default PromoCode