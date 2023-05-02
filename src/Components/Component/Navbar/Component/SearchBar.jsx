import { CiSearch } from "react-icons/ci"
import { TextField } from "@material-ui/core";
import useStyles from "../../../../Style"
import InputAdornment from '@material-ui/core/InputAdornment';
import { BsSearch } from "react-icons/bs"
import {IoLocationSharp} from "react-icons/io5"
const SearchBar = () => {
    const classes = useStyles()
    return (
        <>
            <div className="col_Search">
                <div className=" nav_search_bar_div ">
                    <TextField
                    style={{ borderRadius:" 16px 0px 0px 16px",top:"0px"}}
                     size="small" 
                     type="text" variant="outlined"
                     placeholder="Products Brands Retailers and more"
                      className={`SearchBar nav_search_bar_div  ${classes.SearchBar_Text }`} 
                      InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <BsSearch color="gray" /> 
                            </InputAdornment>
                        ),
                    }}
                      />
                    <div id="Boder_left"></div>
                    <TextField 
                    style={{borderRadius: "0px 16px 16px 0px",top:"0px"}}
                    size="small" 
                    variant="outlined"
                     className={`sec_input_search SearchBar ${classes.SearchBar_Text}` } 
                     type="text" 
                     placeholder="location" 
                     InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <IoLocationSharp  color="gray" size={18}/> 
                            </InputAdornment>
                        ),
                    }}
                     />

                </div>
            </div>
        </>
    )
}
export default SearchBar