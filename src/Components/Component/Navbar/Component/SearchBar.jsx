import TextField from '@mui/material/TextField';
import useStyles from "../../../../Style"
import InputAdornment from '@material-ui/core/InputAdornment';
import { BsSearch } from "react-icons/bs"
import { IoLocationSharp } from "react-icons/io5"
import Autocomplete from '@mui/material/Autocomplete';
import Geocode from "react-geocode";
import Axios from "axios"
import React from 'react';
import { Menu, MenuItem } from '@mui/material';
import CircularProgress from "@material-ui/core/CircularProgress";
const SearchBar = () => {
    const [SearchData, SetSearchData] = React.useState([])
    const [SelctionOption, SetSelctionOption] = React.useState()
    const classes = useStyles()
    function Search(event) {
        SetSearchData([])
        Axios.post(`http://backend.sweede.net/UserPanel/Get-HomePageFilter/`,
            {

                search: event.target.value
            }
        ).then(response => {
            // const objKeys = Object.entries(response?.data)
            // let s 
            // let h
            // objKeys.forEach((key) => { s = key[1], h= key[0] })
            // SetSearchData(SearchData => ({ ...SearchData, s: h }))
            //    console.log(response?.data)
            if (response.status === 200) {
                // SetSearchData(Object?.entries(response?.data).map((data, index, value) => {
                //     return(data)
                // }))
                const o = Object?.entries(response?.data).map((data, index, value) => {
                    return (data)
                })
                const z = []
                const y = o?.map((data) => {
                    // console.log(data)
                    return data
                });
                // console.log(y)

                y.map((data1) => {
                    data1[1].map((data) => {
                        //  console.log(data?.images[0]?.image)
                        SetSearchData(SearchData => [...SearchData, { type: data1[0], value: data.name || data.Product_Name || data.Store_Name, id: data.id , image: data.Brand_Logo || data.categoryImages || data.Store_Image   || data.SubCategoryImage }]);
                    }

                    )


                })
                // SetSearchData(response?.data);
            }

            else (
                SetSearchData([])
            )

        }).catch(
            function (error) {

            })
    }

    const [open, setOpen] = React.useState(false);
    const [options, setOptions] = React.useState([]);
    const loading = open && options.length === 0;
      console.log(SearchData)

    return (
        <>
            <div className="col_Search">
                <div className=" nav_search_bar_div center ">
                    <Autocomplete
                        open={open}
                        onOpen={() => {
                            setOpen(true);
                        }}
                        onClick={Search}
                        filterOptions={x => x}
                        onClose={() => {
                            setOpen(false);
                        }}
                        getOptionLabel={(option) => option.value}
                        options={SearchData}
                        groupBy={(option) => option.type}
                        renderOption={(props, t) => {
                            return (
                                <div {...props} style={{ color: "green" }} >
                                    <ul>
                                        <li key={`${t.value}`} > {`${t.value}`} <img src={`http://backend.sweede.net/${t.image}` } style={{width:"50px" , height:"50px"}}></img> </li>
                                    </ul>
                                </div>
                            )
                        }}
                        loading={loading}
                        sx={{ width: "100%" }}
                        renderInput={(params) => <TextField
                            {...params}
                            size="small"

                            onChange={Search}
                            placeholder="Products Brands Retailers and more"
                            className={`SearchBar nav_search_bar_div  ${classes.SearchBar_Text}`}
                            style={{ borderRadius: " 16px 0px 0px 16px", top: "0px" }}
                            InputProps={{
                                ...params.InputProps,
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <BsSearch color="gray" />
                                    </InputAdornment>
                                ),
                                endAdornment: (
                                    <React.Fragment>
                                        {loading ? (
                                            <CircularProgress color="inherit" size={20} />
                                        ) : null}
                                    </React.Fragment>
                                ),
                            }}
                        />}
                    />
                    <div id="Boder_left"></div>

                    <Autocomplete
                        // open={open}
                        // onOpen={() => {
                        //     setOpen(true);
                        // }}
                        // filterOptions={x => x}
                        // onClose={() => {
                        //     setOpen(false);
                        // }}
                        // getOptionSelected={(SearchData) => SearchData}
                        // getOptionLabel={SearchData => SearchData}
                        options={SearchData}
                        loading={loading}
                        sx={{ width: "100%" }}

                        renderInput={(params) => <TextField
                            {...params}
                            style={{ borderRadius: "0px 16px 16px 0px", top: "0px" }}
                            size="small"
                            sx={{ width: "100%" }}
                            variant="outlined"
                            className={`sec_input_search SearchBar ${classes.SearchBar_Text}`}
                            type="text"
                            placeholder="location"
                            InputProps={{
                                ...params.InputProps,
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <IoLocationSharp color="gray" size={18} />
                                    </InputAdornment>
                                ),
                                endAdornment: (
                                    <React.Fragment>
                                        {loading ? (
                                            <CircularProgress color="inherit" size={20} />
                                        ) : null}
                                    </React.Fragment>
                                ),
                            }}
                        />}
                    />

                </div>
            </div>
        </>
    )
}
export default SearchBar


// https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyC_MQE9O7OW5sM2Pvyzs5zjotWyqdshhjA




// ,key[1].map((data) => {
// return data.name || data.Product_Name
// })
// (data[1]?.map((g)=>  data[0]+(g.name || g.Product_Name)))) 
