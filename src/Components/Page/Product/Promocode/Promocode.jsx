import React from "react"
import TextField from '@mui/material/TextField';
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import useStyles from "../../../../Style";
import InputAdornment from '@mui/material/InputAdornment';
import { RxCross1 } from "react-icons/rx";
import { AiOutlineCheck } from "react-icons/ai"
import Createcontext from "../../../../Hooks/Context"
import Cookies from 'universal-cookie';
import axios from "axios";
const PromoCode = () => {
    const { state, dispatch } = React.useContext(Createcontext);
    const classes = useStyles()
    const [promocode, Setpromocode] = React.useState(state.coupoun_code)
    const [error, SetError] = React.useState('')
    const [success, Setsuccess] = React.useState('')
    function handlechnage() {
        console.log(promocode)
        dispatch({ type: 'coupoun_code', coupoun_code: promocode })
        const cookies = new Cookies();
        const token_data = cookies.get('User_Token_access')
        const data = {
            "promocode": promocode,
            "store": 13,
            "date": "2024-04-30",
            "Time": ""
        }
        axios.post(` https://api.cannabaze.com/UserPanel/PromoCodeCheck/`,
            data,
            {
                headers: { Authorization: `Bearer ${token_data}` }
            },
        ).then((res) => {
            console.log(res.data)
            Setsuccess(res.data)
            SetError('')
            dispatch({ type: 'ApiProduct', ApiProduct: !state.ApiProduct })
        }).catch((error) => {
            Setsuccess('')
            SetError(error.response.data)
            dispatch({ type: 'ApiProduct', ApiProduct: !state.ApiProduct })

        })

        // return res;
    }
function clear(){
    Setpromocode('')
    SetError('')
}
    console.log(state.coupoun_code, state )

    return (
        <React.Fragment>
            <div className="col-12 promocode_container">
                <div className="col-12 promocodeLabelCol">
                    <label htmlFor="promocode" className="promoCode_label">Enter a promo code</label>
                </div>
                <div className="row promoCode_textfield_btn_Col">
                    <div className="col-8 promoCode_textfield_col">
                        <TextField
                            className={classes.textFieldFocusBorderColor}
                            placeholder="Enter a promo code"
                            size="small"
                            id="promocode"
                            onChange={(e) => Setpromocode((prevCode) => e.target.value)}
                            value={promocode}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">

                                        {Boolean(success) && <AiOutlineCheck color={"#31B655"} />}
                                    </InputAdornment>
                                ),
                                endAdornment: (
                                    <InputAdornment onClick={() => clear()} style={{ cursor: 'pointer' }} position="end">
                                        <RxCross1 />
                                    </InputAdornment>
                                )
                            }}
                            error={Boolean(error)}
                            helperText={Boolean(error) && error}
                            variant="outlined" fullWidth />
                    </div>
                    <div className="col-4 px-2 promoCodeBtn_Col">
                        <Box>
                            <LoadingButton className={`${classes.promoapplybtn}`} onClick={handlechnage} variant="outlined">Apply</LoadingButton>
                        </Box>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}
export default PromoCode