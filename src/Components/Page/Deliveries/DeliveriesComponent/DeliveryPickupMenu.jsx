import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import useStyles from "../../../../Style"
import DeliveryMenuBar from "./DeliveryMenuBar/DeliveryMenuBar"
const DeliveryPickupMenu = () => {
    const classes=useStyles()
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <div className="col-lg-10 col-12">
                <Box sx={{ width: '100%', typography: 'body1' }}>
                    <TabContext value={value}>
                        <Box className={`deliveries_pickup_menu_fontSize ${classes.open_dispensory_tab}`} sx={{ borderBottom: 0, borderColor: 'divider' }}>
                            <TabList onChange={handleChange} aria-label="lab API tabs example">
                                <Tab label="Delivery" value="1"/>
                                <Tab label="Pickup" value="2"/>
                            </TabList>
                        </Box>
                        <Box className={classes.delivery_menuBar}>
                        <TabPanel value="1">
                            <DeliveryMenuBar/>
                        </TabPanel>
                        <TabPanel value="2">Pickup</TabPanel>
                        </Box>
                    </TabContext>
                </Box>

            </div>
        </>
    )
}
export default DeliveryPickupMenu