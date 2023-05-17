import TextField from '@mui/material/TextField';
import useStyles from "../../../../Style"
import InputAdornment from '@material-ui/core/InputAdornment';
import { BsSearch } from "react-icons/bs"
import { IoLocationSharp } from "react-icons/io5"
import Autocomplete from '@mui/material/Autocomplete';
import Geocode from "react-geocode";
import Axios from "axios"
import React from 'react';
const SearchBar = () => {
    const [SearchData , SetSearchData] =  React.useState([])
    const classes = useStyles()
    async function Search(event) {
        await Axios.post(`http://backend.sweede.net/UserPanel/Get-HomePageFilter/`,
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
            SetSearchData(response?.data.Brand)
              
        }).catch(
            function (error) {

            })
    }
    console.log(SearchData)
    // React.useEffect(() => {
    //     if (!geolocationAPI) {
    //         console.log("Geolocation API is not available in your browser!");
    //       } else {
    //         geolocationAPI.getCurrentPosition(
    //           (position) => {
    //             const { coords } = position;
    //             setLat(coords.latitude);
    //             setLong(coords.longitude);
    //             Geocode.setApiKey("AIzaSyC_MQE9O7OW5sM2Pvyzs5zjotWyqdshhjA");
    //             Geocode.setLanguage("en");
    //             Geocode.setRegion("es"); 
    //             Geocode.setLocationType("ROOFTOP");
    //             Geocode.enableDebug();
    //             Geocode.fromLatLng(coords.latitude, coords.longitude).then(
    //                 (response) => {
    //                   const address = response.results[0].formatted_address;
    //                   console.log(address);
    //                 },
    //                 (error) => {
    //                   console.error(error);
    //                 }
    //               );
    //           },
    //           (error) => {
    //             console.log("Something went wrong getting your position!");
    //           }
    //         );
    //       }
    // }, [geolocationAPI])


    const topFilms = () => [
        { label: 'The Shawshank Redemption', year: 1994 },
        { label: 'The Godfather', year: 1972 },
        { label: 'The Godfather: Part II', year: 1974 },
        { label: 'The Dark Knight', year: 2008 },
        { label: '12 Angry Men', year: 1957 },
        { label: "Schindler's List", year: 1993 },
        { label: 'Pulp Fiction', year: 1994 },
        {
            label: 'The Lord of the Rings: The Return of the King',
            year: 2003,
        },
        { label: 'The Good, the Bad and the Ugly', year: 1966 }
    ];
    return (
        <>
            <div className="col_Search">
                <div className=" nav_search_bar_div center ">
                    <Autocomplete
                        id="free-solo-demo"
                        variant="outlined"
                        freeSolo
                        size="small"
                        options={SearchData?.map((option) => option.name + "y")}
                        sx={{ width: "100%" }}
                        renderInput={(params) => <TextField
                            {...params}
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
                            }}
                        />}
                    />
                    <div id="Boder_left"></div>
                    <TextField
                        style={{ borderRadius: "0px 16px 16px 0px", top: "0px" }}
                        size="small"
                        sx={{ width: "100%" }}
                        variant="outlined"
                        className={`sec_input_search SearchBar ${classes.SearchBar_Text}`}
                        type="text"
                        placeholder="location"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <IoLocationSharp color="gray" size={18} />
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


// https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyC_MQE9O7OW5sM2Pvyzs5zjotWyqdshhjA