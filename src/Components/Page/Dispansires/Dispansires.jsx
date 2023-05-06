import React from "react";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import useStyles from "../../../Style";
import Map from "../../Component/Map/map"
import DispensoriesOpenResult from "./DispansiresComponent/DispensoriesOpenResult"
import Dispansires_MapTheme from "../../Component/Map/MapStyle"
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
                    <Typography>{children}</Typography>
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



    const [value, setValue] = React.useState(0);
    const DispensorShopLocation = [{ name: "Marijuana dispensaries", city: "in Aargau, AG" }]
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const classes = useStyles()
    return (
        <>
            <div className="container-fluid">

                <div className="row  dispensaries_centers">
                    <div className="col-12  col-md-10 col-sm-12">
                        {DispensorShopLocation.map((ele, index) => {
                            return (
                                <div className="d-flex" key={index}>
                                      <h1 className="dispensories_name">{ele.name}</h1><h1 className="dispensories_city">{ele.city}</h1>
                                </div>


                            )
                        })}

                    </div>
                    <div className="col-12 col-lg-10 col-md-10 col-sm-12 mx-auto dispensory_menu my-2">
                        <Box className={`dispensories_tabss ${classes.open_dispensory_tab_background}`} sx={{ width: '100%' }}>
                            <Box className={classes.open_dispensory_tab} sx={{ borderBottom: 1, borderColor: 'divider', }}>
                                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" >

                             <Tab label="Open" {...a11yProps(0)} />
                                    <Tab label="Storefronts" {...a11yProps(1)} />
                                    <Tab label="delivery" {...a11yProps(2)} />
                                    <Tab label="Order online" {...a11yProps(3)} />
                                    <Tab label=" License type" {...a11yProps(4)} />
                                    <Tab label="Curbside pickup " {...a11yProps(5)} />
                                    <Tab label=" Amenities" {...a11yProps(6)} />
                                    <Tab label="Amenities" {...a11yProps(7)} />
                                </Tabs>
                            </Box>

                            <TabPanel value={value} index={0}>
                                <DispensoriesOpenResult />
                            </TabPanel>
                            <TabPanel value={value} index={1}>
                                <DispensoriesOpenResult />
                            </TabPanel>
                            <TabPanel value={value} index={2}>
                                <DispensoriesOpenResult />
                            </TabPanel>
                            <TabPanel value={value} index={3}>
                                <DispensoriesOpenResult />
                            </TabPanel>
                            <TabPanel value={value} index={4}>
                                <DispensoriesOpenResult />
                            </TabPanel>
                            <TabPanel value={value} index={5}>
                                <DispensoriesOpenResult />
                            </TabPanel>
                            <TabPanel value={value} index={6}>
                                <DispensoriesOpenResult />
                            </TabPanel>
                            <TabPanel value={value} index={7}>
                                <DispensoriesOpenResult />
                            </TabPanel> 
                           <div className="Dispansires_map">
                                <Map height={"800px"} Theme={Dispansires_MapTheme.Dispansires_MapTheme}></Map>
                            </div>
                        </Box>

                    </div>

                </div>

            </div>

        </>
    )


}

