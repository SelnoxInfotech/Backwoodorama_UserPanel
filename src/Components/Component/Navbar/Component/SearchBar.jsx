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
                    console.log(data)
                    return data
                });
                SetSearchData(y);
            }

            else (
                SetSearchData([])
            )

        }).catch(
            function (error) {

            })
    }

    // React.useEffect(async ()=>{
    //    await Search()
    // },[])
    // console.log( Object?.entries(SearchData))
    // console.log(Object.keys(SearchData))
    // const y  =  SearchData.forEach((value, index, array) => {
    //    return ( 
    //     value[0]
    // const y  =  SearchData?.map((data, index, value) => {
    //     return(data)
    // })
    //    )
    // `prop` is the property name
    // `data[prop]` is the property value
    //   });

    // for (const key in SearchData) {
    //     console.log(`${key}: ${SearchData}`);
    // }
    // const sortKeys = (obj) => {
    //     return Object.assign(...Object.entries(obj).sort().map(([key, value]) => {
    //        return {
    //           [key]: value
    //        }
    //     }));
    //  };
    const [open, setOpen] = React.useState(false);
    const [options, setOptions] = React.useState([]);
    const loading = open && options.length === 0;


    // SearchData.map((key, value, index) => {

    // })
    // console.log(SearchData.ma   
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
    const top100Films = [
        { title: 'The Shawshank Redemption', year: 1994 },
        { title: 'The Godfather', year: 1972 },
        { title: 'The Godfather: Part II', year: 1974 },
        { title: 'The Dark Knight', year: 2008 },
        { title: '12 Angry Men', year: 1957 },
        { title: "Schindler's List", year: 1993 },
        { title: 'Pulp Fiction', year: 1994 },
        { title: 'The Lord of the Rings: The Return of the King', year: 2003 },
        { title: 'The Good, the Bad and the Ugly', year: 1966 },
        { title: 'Fight Club', year: 1999 },
        { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },
        { title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980 },
        { title: 'Forrest Gump', year: 1994 },
        { title: 'Inception', year: 2010 },
    ];
    return (
        <>
            <div className="col_Search">
                <div className=" nav_search_bar_div center ">
                    <Autocomplete
                        open={open}
                        onOpen={() => {
                            setOpen(true);
                        }}
                        filterOptions={x => x}
                        onClose={() => {
                            setOpen(false);
                        }}
                        getOptionSelected={(option) => (option && option[1].map((data) => data.name || data.Product_Name || data.Store_Name ) )}

                        getOptionLabel={(option) => (option && option[1].map((data) => data.name))}
                        options={SearchData}
                        disableClearable
                        renderOption={(props, t) => {
                        console.log(t)
                            return (
                                <div {...props}>
                                    <div style={{ color: "red" }} >
                                        {t[0]}

                                        <ol>
                                        {t[1]?.map((data) => {
                                            return  <li>{data?.name || data.Product_Name || data.Store_Name }</li>
                                        })}
                                        </ol>
                                    </div>
                                 
                                </div>
                            )
                                    }}
                            //     <div {...props}>
                            //       {t[0]}
                            //         {t[1].map((data) => {
                            //             return <p> {data.name || data.Product_Name} <br></br></p>
                            //         })}
                            //     </div>
                            // );
                      
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

                    {/* <Autocomplete
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
                    /> */}

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
