import TextField from '@mui/material/TextField';
import useStyles from "../../../../Style"
import InputAdornment from '@material-ui/core/InputAdornment';
import { BsSearch } from "react-icons/bs"
import { IoLocationSharp } from "react-icons/io5"
import Autocomplete from '@mui/material/Autocomplete';
import Axios from "axios"
const SearchBar = () => {
    const classes = useStyles()
    async function Search(event) {
        await Axios.get(`http://backend.sweede.net/UserPanel/Get-HomePageFilter/`,
            {

                search: event.target.value
            }
        ).then(response => {
            const objKeys = Object.entries(response?.data)
            objKeys.forEach(key => console.log(key[1], key[0]))


        }).catch(
            function (error) {

            })
    }


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
                        options={topFilms().map((option) => option.label)}
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