import React from "react";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import useStyles from "../../../Style";
import Map from "../../Component/Map/map"
import DispensoriesOpenResult from "./DispansiresComponent/DispensoriesOpenResult"
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

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const classes = useStyles()
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-lg-10 col-md-10 col-sm-12 mx-auto dispensory_menu">
                        <Box className={classes.open_dispensory_tab_background} sx={{ width: '100%' }}>
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
                              <DispensoriesOpenResult/>
                            </TabPanel>
                            <TabPanel value={value} index={1}>
                            <DispensoriesOpenResult/>
                            </TabPanel>
                            <TabPanel value={value} index={2}>
                            <DispensoriesOpenResult/>
                            </TabPanel>
                            <TabPanel value={value} index={2}>
                            <DispensoriesOpenResult/>
                            </TabPanel>
                            <TabPanel value={value} index={2}>
                            <DispensoriesOpenResult/>
                            </TabPanel>
                            <TabPanel value={value} index={2}>
                            <DispensoriesOpenResult/>
                            </TabPanel>
                            <TabPanel value={value} index={2}>
                            <DispensoriesOpenResult/>
                            </TabPanel>
                         <div style={{position: "relative" , bottom: "623px" }}>
                         <Map height={"800px"}></Map>
                         </div>
                        </Box>

                    </div>

                </div>

            </div>

        </>
    )


}

