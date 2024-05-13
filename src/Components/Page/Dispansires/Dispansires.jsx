
'use server';

import React from "react";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import useStyles from "../../../Style";
import WeedDispansires from "./DispansiresComponent/Weed_Dispansires"
import Createcontext from "../../../Hooks/Context"
import { useLocation, useParams, useNavigate } from "react-router-dom";
import axios, { Axios } from "axios";
import { DespensioriesItem } from '../../../Api/Api';
import Wronglocation from "../../Component/Skeleton/Wronglocation";
function TabPanel(props) {

    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography variant="div">{children}</Typography>
                </Box>
            )}
        </div>
    );
}
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}
export default function Dispansires() {
    const [searchtext, setsearchtext] = React.useState("");
    const navigate = useNavigate()
    const Location = useLocation()
    const { state, dispatch } = React.useContext(Createcontext)
    const [value, setValue] = React.useState(0);
    const [Store, SetStore] = React.useState([]);
    const [loader, setloader] = React.useState(false);

    const DispensorShopLocation = [{ name: "Weed Dispensaries in", city: state.Location }]
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    React.useEffect(() => {
        document.documentElement.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant", // Optional if you want to skip the scrolling animation
        });
    }, [])


    function modifystr(str) {
        str = str.replace(/[^a-zA-Z0-9/ ]/g, "-");
        str = str.trim().replaceAll(' ', "-");
        let a = 0;
        while (a < 1) {
            if (str.includes("--")) {
                str = str.replaceAll("--", "-")
            } else if (str.includes("//")) {
                str = str.replaceAll("//", "/")
            } else if (str.includes("//")) {
                str = str.replaceAll("-/", "/")
            } else if (str.includes("//")) {
                str = str.replaceAll("/-", "/")
            } else {
                a++
            }
        }

        return str.toLowerCase()
    }


    React.useEffect(() => {
        const sendPostRequest = () => {
            axios.post(
                `https://api.cannabaze.com/UserPanel/Update-SiteMap/14`,
                {
                    j: 'https://www.weedx.io' + modifystr(Location?.pathname.replace(/\/+$/, ""))
                }
            ).then((res) => {
            }).catch((err) => {
            });
        };


        const timeoutId = setTimeout(sendPostRequest, 2000);

        return () => clearTimeout(timeoutId);
    }, [Location]);

    React.useEffect(() => {

        if (searchtext !== "") {
            const getData = setTimeout(() => {
                const json = {
                    "store": searchtext,
                    "City": state.City,
                    "Country": state.Country?.replace(/-/g, " "),
                    "State": state.State?.replace(/-/g, " "),
                }
                Axios.post(`https://api.cannabaze.com/UserPanel/FilterDispensaries/`,
                    json
                )
                    .then(function (response) {
                        setloader(() => true)

                        SetStore(response?.data);

                    })
                    .catch(function (error) {
                        setloader(() => true)

                        console.trace(error);
                        SetStore([]);

                    });
            }, 1000)
            return () => clearTimeout(getData)
        } else {
            const sendPostRequest = () => {
                try {
                    const object = { City: state.City.replace(/-/g, " "), "Country": state.Country?.replace(/-/g, " "), "State": state.State?.replace(/-/g, " "), }
                    state.Country !== "" && DespensioriesItem(object)
                        .then((res) => {
                            setloader(() => true)

                            if (res === "No Dispensary in your area") {
                                SetStore([])
                            }
                            else {
                                SetStore(res)
                            }
                        })
                } catch (error) {
                    console.log(error)
                }
            }
            const timeoutId = setTimeout(sendPostRequest, 1000);
            return () => clearTimeout(timeoutId);
        }
    }, [searchtext, state])



    function breadcrumCountry(country, state1, city) {
        if (Boolean(city)) {
            dispatch({ type: 'route', route: "" })
            dispatch({ type: 'Location', Location: state.City })
            navigate(`/weed-dispensaries/in/${modifystr(state.Country.toLowerCase())}/${modifystr(state.State.toLowerCase())}/${modifystr(state.City.toLowerCase())}`)
        }
        else if (Boolean(state1)) {
            dispatch({ type: 'Location', Location: state.State })
            dispatch({ type: 'City', City: "" })
            dispatch({ type: 'route', route: "" })
            navigate(`/weed-dispensaries/in/${modifystr(state.Country)}/${modifystr(state?.State)}`)
        }
        else if (Boolean(country)) {
            dispatch({ type: 'State', State: "" })
            dispatch({ type: 'City', City: "" })
            dispatch({ type: 'route', route: "" })
            dispatch({ type: 'Location', Location: state.Country })
            navigate(`/weed-dispensaries/in/${modifystr(state.Country.toLowerCase())}/`)
        }

    }
    const classes = useStyles()

    return (
        <div className="row  dispensaries_centers">
            <div className="col-12 col-sm-12">
                <div>

                    <span onClick={() => navigate("/")}>{"Home"}</span>
                    {Boolean(state.Country) && <span> {">"} <span onClick={() => breadcrumCountry("Country")}>{state.Country}</span></span>}
                    {Boolean(state.State) && <span> {">"} <span onClick={() => breadcrumCountry("Country", "state")}>{state.State}</span></span>}
                    {Boolean(state.City) && <span> {">"} <span onClick={() => breadcrumCountry("Country", "state", "City")}>{state.City}</span></span>}
                    {Boolean(state.route) && <span> {">"} <span>{state.route}</span></span>}
                </div>



                <div className="headerBoxdescription">
                    {DispensorShopLocation?.map((ele, index) => {
                        return (
                            <div key={index}>

                                <h1 className=" lh-1 m-0"> <span className="dispensories_name">{ele.name}</span> <span className="dispensories_city">{ele.city}</span></h1>
                            </div>
                        )
                    })}
                    <p>{`Find Nearby Dispensaries in ${state?.Location} for Recreational & Medical weed. Browse Top Cannabis Products and Place Orders from Trusted Local Dispensaries.`}</p>
                </div>
            </div>
            <div className="col-12 col-sm-12 dispensory_menu my-2">
                {
                    //   loader ?
                    (Boolean(Store?.length) ?
                        <Box className={`dispensories_tabss ${classes.dispensory_tab_background}`} sx={{ width: '100%' }}>
                            <Box className={classes.open_dispensory_tab} sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <Tabs scrollButtons={false} variant="scrollable" sx={{ justifyContent: 'space-around' }} value={value} onChange={handleChange} aria-label="basic tabs example">
                                    <Tab label="Open" {...a11yProps(0)} />
                                    <Tab label="Storefronts" {...a11yProps(1)} />
                                    <Tab label="delivery" {...a11yProps(2)} />
                                    <Tab label="Order online" {...a11yProps(3)} />
                                </Tabs>
                            </Box>
                            <Box sx={{ "& .MuiBox-root": { paddingLeft: "0px", paddingRight: "0px", paddingTop: "20px" } }}>
                                <TabPanel value={value} index={0}>
                                    <WeedDispansires Store={Store} SetStore={SetStore} searchtext={searchtext} setsearchtext={setsearchtext} />
                                </TabPanel>
                                <TabPanel value={value} index={1}>
                                    <WeedDispansires Store={Store} SetStore={SetStore} searchtext={searchtext} setsearchtext={setsearchtext} />
                                </TabPanel>
                                <TabPanel value={value} index={2}>
                                    <WeedDispansires Store={Store} SetStore={SetStore} searchtext={searchtext} setsearchtext={setsearchtext} />
                                </TabPanel>
                                <TabPanel value={value} index={3}>
                                    <WeedDispansires Store={Store} SetStore={SetStore} searchtext={searchtext} setsearchtext={setsearchtext} />
                                </TabPanel>
                            </Box>
                            {/* <div className="Dispansires_map">
                            </div> */}
                        </Box>
                        :
                
                        <Wronglocation title={' No dispensaries available'} description={'We apologize, but it appears that there are no dispensaries available in your location. Would you like to enter a different address to search for a nearby dispensary?'} />
                    )
                    // :
                    // <div className="loader_container">
                    //     <span className="newloader shine"><img src='/image/logo.png' alt="image" /></span>
                    // </div>
                }

            </div>

        </div>
    )


}




















// "https://www.weedx.io/weed-dispensaries/in/united-states/texas/el-paso",
// "https://www.weedx.io/weed-dispensaries/in/united-states/new-york/",
// "https://www.weedx.io/weed-dispensaries/in/united-states/district-of-columbia/washington",
// "https://www.weedx.io/weed-dispensaries/in/united-states/district-of-columbia/",
// "https://www.weedx.io/weed-dispensaries/in/united-states/new-york/niagara-falls",
// "https://www.weedx.io/weed-dispensaries/in/canada/new-brunswick/drummond-parish",
// "https://www.weedx.io/weed-dispensaries/in/united-states/new-york/plattsburgh",
// "https://www.weedx.io/weed-dispensaries/in/united-states/new-york/lenox",
// "https://www.weedx.io/weed-dispensaries/in/united-states/california/chula-vista",
// "https://www.weedx.io/weed-dispensaries/in/united-states/wisconsin/madison",
// "https://www.weedx.io/weed-dispensaries/in/united-states/virginia/richmond",
// "https://www.weedx.io/weed-dispensaries/in/canada/british-columbia/north-cowichan",
// "https://www.weedx.io/weed-dispensaries/in/canada/ontario/toronto",
// "https://www.weedx.io/weed-dispensaries/in/india/madhya-pradesh/bhopal",
// "https://www.weedx.io/weed-dispensaries/in/united-states/virginia/williamsburg",
// "https://www.weedx.io/weed-dispensaries/in/united-states/",
// "https://www.weedx.io/weed-dispensaries/in/united-states/south-carolina",
// "https://www.weedx.io/weed-dispensaries/in/united-states/california/",
// "https://www.weedx.io/weed-dispensaries/in/delhi",
// "https://www.weedx.io/weed-dispensaries/in/united-states/alabama/atmore",
// "https://www.weedx.io/weed-dispensaries/in/united-states/new-york/new-york",
// "https://www.weedx.io/weed-dispensaries/in/Kearny",
// "https://www.weedx.io/weed-dispensaries/in/united-states/new-jersey/kearny",
// "https://www.weedx.io/weed-dispensaries/in/india/madhya-pradesh/harda",
// "https://www.weedx.io/weed-dispensaries/in/united-states/california/san-diego",
// "https://www.weedx.io/weed-dispensaries/in/united-states/alabama/auburn",
// "https://www.weedx.io/weed-dispensaries/in/united-states/alabama/clanton",
// "https://www.weedx.io/weed-dispensaries/in/india/haryana/jhajjar",
// "https://www.weedx.io/weed-dispensaries/in/faroe-islands",
// "https://www.weedx.io/weed-dispensaries/in/united-states/alabama/bessemer",
// "https://www.weedx.io/weed-dispensaries/in/united-states/alabama/birmingham",
// "https://www.weedx.io/weed-dispensaries/in/indonesia/central-java/new-york",
// "https://www.weedx.io/weed-dispensaries/in/united-states/alabama/decatur",
// "https://www.weedx.io/weed-dispensaries/in/united-states/georgia/decatur",
// "https://www.weedx.io/weed-dispensaries/in/united-states/alabama/dothan",
// "https://www.weedx.io/weed-dispensaries/in/united-states/new-york/new-york",
// "https://www.weedx.io/weed-dispensaries/in/united-states/new-jersey/jersey-city",
// "https://www.weedx.io/weed-dispensaries/in/united-states/alabama/florence",
// "https://www.weedx.io/weed-dispensaries/in/united-states/alabama/fort-payne",
// "https://www.weedx.io/weed-dispensaries/in/united-states/alabama/gadsden",
// "https://www.weedx.io/weed-dispensaries/in/united-states/alabama/greenville",
// "https://www.weedx.io/weed-dispensaries/in/united-states/south-carolina/greenville",
// "https://www.weedx.io/weed-dispensaries/in/united-states/alabama/guntersville",
// "https://www.weedx.io/weed-dispensaries/in/united-states/new-york/new-york-city",
// "https://www.weedx.io/weed-dispensaries/in/united-states/new-york",
// "https://www.weedx.io/weed-dispensaries/in/united-kingdom/england/",
// "https://www.weedx.io/weed-dispensaries/in/united-states/minnesota",
// "https://www.weedx.io/weed-dispensaries/in/spain/andalusia/",
// "https://www.weedx.io/weed-dispensaries/in/uzbekistan",
// "https://www.weedx.io/weed-dispensaries/in/spain",
// "https://www.weedx.io/weed-dispensaries/in/united-states",
// "https://www.weedx.io/weed-dispensaries/in/united-arab-emirates",
// "https://www.weedx.io/weed-dispensaries/in/united-states/alaska/anchorage",
// "https://www.weedx.io/weed-dispensaries/in/spain/andalusia/c-c3-b3rdoba",
// "https://www.weedx.io/weed-dispensaries/in/united-states/alaska/fairbanks",
// "https://www.weedx.io/weed-dispensaries/in/united-states/michigan/",
// "https://www.weedx.io/weed-dispensaries/in/united-states/alaska/ketchikan",
// "https://www.weedx.io/weed-dispensaries/in/united-states/alaska/cordova",
// "https://www.weedx.io/weed-dispensaries/in/united-states/alaska/haines",
// "https://www.weedx.io/weed-dispensaries/in/united-states/alaska/homer",
// "https://www.weedx.io/weed-dispensaries/in/united-states/alaska/juneau",
// "https://www.weedx.io/weed-dispensaries/in/united-states/alaska/kodiak",
// "https://www.weedx.io/weed-dispensaries/in/united-states/alaska/kotzebue",
// "https://www.weedx.io/weed-dispensaries/in/united-states/alaska/nome",
// "https://www.weedx.io/weed-dispensaries/in/united-states/alaska/palmer",
// "https://www.weedx.io/weed-dispensaries/in/united-states/alaska/seward",
// "https://www.weedx.io/weed-dispensaries/in/united-states/alaska/sitka",
// "https://www.weedx.io/weed-dispensaries/in/united-states/new-york/queens",
// "https://www.weedx.io/weed-dispensaries/in/united-states/new-york/garden-city",
// "https://www.weedx.io/weed-dispensaries/in/australia/queensland/upper-mount-gravatt/kessels-road",
// "https://www.weedx.io/weed-dispensaries/in/united-states/new-york/geneva",
// "https://www.weedx.io/weed-dispensaries/in/switzerland/geneva/geneva",
// "https://www.weedx.io/weed-dispensaries/in/united-states/new-york/glens-falls",
// "https://www.weedx.io/weed-dispensaries/in/united-states/new-york/gloversville",
// "https://www.weedx.io/weed-dispensaries/in/united-states/new-york/johnstown",
// "https://www.weedx.io/weed-dispensaries/in/united-states/new-york/great-neck",
// "https://www.weedx.io/weed-dispensaries/in/united-states/new-york/north-hempstead",
// "https://www.weedx.io/weed-dispensaries/in/united-states/california",
// "https://www.weedx.io/weed-dispensaries/in/united-states/alaska/skagway",
// "https://www.weedx.io/weed-dispensaries/in/united-states/alaska/stikine-region",
// "https://www.weedx.io/weed-dispensaries/in/united-states/alaska/valdez",
// "https://www.weedx.io/weed-dispensaries/in/united-states/new-york/bhopal",
// "https://www.weedx.io/weed-dispensaries/in/united-states/michigan/detroit/forrer-street",
// "https://www.weedx.io/weed-dispensaries/in/united-states/new-york/hammondsport",
// "https://www.weedx.io/weed-dispensaries/in/united-states/new-york/urbana",
// "https://www.weedx.io/weed-dispensaries/in/united-states/nevada/las-vegas/south-las-vegas-boulevard",
// "https://www.weedx.io/weed-dispensaries/in/italy/tuscany/florence",
// "https://www.weedx.io/weed-dispensaries/in/united-states/arizona/florence",
// "https://www.weedx.io/weed-dispensaries/in/united-states/arizona/gila-bend",
// "https://www.weedx.io/weed-dispensaries/in/united-states/arizona/glendale",
// "https://www.weedx.io/weed-dispensaries/in/united-states/california/glendale",
// "https://www.weedx.io/weed-dispensaries/in/united-states/arizona/kingman",
// "https://www.weedx.io/weed-dispensaries/in/united-states/alabama/auburn/",
// "https://www.weedx.io/weed-dispensaries/in/united-states/new-york/new-york/harlem",
// "https://www.weedx.io/weed-dispensaries/in/united-states/new-york/hempstead",
// "https://www.weedx.io/weed-dispensaries/in/united-states/new-york/hempstead/harlem",
// "https://www.weedx.io/weed-dispensaries/in/united-states/new-york/herkimer",
// "https://www.weedx.io/weed-dispensaries/in/united-states/new-york/herkimer/harlem",
// "https://www.weedx.io/weed-dispensaries/in/united-states/new-york/new-york/hudson-yards",
// "https://www.weedx.io/weed-dispensaries/in/united-states/new-york/huntington/hudson-yards",
// "https://www.weedx.io/weed-dispensaries/in/united-states/new-york/hyde-park/hudson-yards",
// "https://www.weedx.io/weed-dispensaries/in/united-states/new-york/ilion/hudson-yards",
// "https://www.weedx.io/weed-dispensaries/in/united-states/new-york/ithaca/hudson-yards",
// "https://www.weedx.io/weed-dispensaries/in/united-states/new-york/jamestown",
// "https://www.weedx.io/weed-dispensaries/in/united-states/new-york/jamestown/hudson-yards",
// "https://www.weedx.io/weed-dispensaries/in/united-states/new-york/johnstown/hudson-yards",
// "https://www.weedx.io/weed-dispensaries/in/united-states/new-york/kingston",
// "https://www.weedx.io/weed-dispensaries/in/united-states/new-york/kingston/hudson-yards",
// "https://www.weedx.io/weed-dispensaries/in/united-states/arizona/nogales",
// "https://www.weedx.io/weed-dispensaries/in/india/madhya-pradesh/indore",
// "https://www.weedx.io/weed-dispensaries/in/india/madhya-pradesh/chhoti-gwaltoli"