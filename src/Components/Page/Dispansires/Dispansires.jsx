import React from "react";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import useStyles from "../../../Style";
import WeedDispansires from "./DispansiresComponent/Weed_Dispansires"
import Createcontext from "../../../Hooks/Context"
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
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
    const params = useParams()
    const Location = useLocation()
    const { state } = React.useContext(Createcontext)
    const [value, setValue] = React.useState(0);
    const DispensorShopLocation = [{ name: "Weed Dispensaries in", city: state.Location }]
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    React.useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
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
    console.log(params, modifystr(Location.pathname))


    React.useEffect(() => {
        axios.get(`https://api.cannabaze.com/UserPanel/Get-SitemapbyId/14`,
        ).then((res) => {
            let api = true
            const json = typeof res.data[0].Xml === "object" ? res.data[0].Xml : [res.data[0].Xml]
            // console.log(json, json[0] !== 'https://www.weedx.io' + modifystr(Location.pathname))
            const result = json.find(item => item.includes('https://www.weedx.io' + modifystr(Location.pathname)))
            if (result)
                 console.log(result)
            else{

                json.push('https://www.weedx.io' + modifystr(Location.pathname));
                api = false
            }
            !api && axios.post(`https://api.cannabaze.com/UserPanel/Update-SiteMap/14`,
                {
                    Xml: json
                },
            ).then((res) => {
                console.log(res)

            }).catch((err) => {
                console.log(err)
            })

            // console.log(json)
        }).catch(() => {
        })
    }, [Location])



    const classes = useStyles()
    return (
        <React.Fragment>
            <div className="container-fluid">

                <div className="row  dispensaries_centers">
                    <div className="col-12  col-md-10 col-sm-12">
                        {DispensorShopLocation.map((ele, index) => {
                            return (
                                <div key={index}>
                                    <h1 className="d-flex"> <span className="dispensories_name">{ele.name}</span> <span className="dispensories_city">{ele.city}</span></h1>
                                </div>
                            )
                        })}
                    </div>
                    <div className="col-12 col-lg-10 col-md-10 col-sm-12 dispensory_menu my-2">
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
                                    <WeedDispansires />
                                </TabPanel>
                                <TabPanel value={value} index={1}>
                                    <WeedDispansires />
                                </TabPanel>
                                <TabPanel value={value} index={2}>
                                    <WeedDispansires />
                                </TabPanel>
                                <TabPanel value={value} index={3}>
                                    <WeedDispansires />
                                </TabPanel>
                            </Box>
                            <div className="Dispansires_map">
                                {/* <Map height={"740px"} Theme={Dispansires_MapTheme.Dispansires_MapTheme}></Map> */}
                            </div>
                        </Box>

                    </div>

                </div>
            </div>

        </React.Fragment>
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