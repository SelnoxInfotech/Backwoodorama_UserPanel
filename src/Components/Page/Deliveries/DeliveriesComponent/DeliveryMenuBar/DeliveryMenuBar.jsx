import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import useStyles from '../../../../../Style';
import DeliveryItemsCard from "./DeliveryItemsCards"
const DeliveryMenuBar = () => {
    const DeliveryItemsCardArray1 = [
        {
            imgurl: "/image/cat_prod_6.jpg", item_name: "Jaderoom delivery Irvine",
            address: "Medical and recreational", address2: "Irvine", total_items: 1390,
            Number_of_items_type1: 68, Number_of_items_type2: 200, Number_of_items_type3: 320, Number_of_items_type4: 201, Number_of_items_type5: 100
        }, {
            imgurl: "/image/weed_img2.jpeg", item_name: "Jaderoom delivery Irvine",
            address: "Medical and recreational", address2: "Irvine", total_items: 1390,
            Number_of_items_type1: 68, Number_of_items_type2: 200, Number_of_items_type3: 320, Number_of_items_type4: 201, Number_of_items_type5: 100
        }, {
            imgurl: "/image/cat_prod_6.jpg", item_name: "Jaderoom delivery Irvine",
            address: "Medical and recreational", address2: "Irvine", total_items: 1390,
            Number_of_items_type1: 68, Number_of_items_type2: 200, Number_of_items_type3: 320, Number_of_items_type4: 201, Number_of_items_type5: 100
        }
    ]
    const DeliveryItemsCardArray2 = [{
        imgurl: "/image/edibles.webp", item_name: "Jaderoom delivery Irvine",
        address: "Medical and recreational", address2: "Irvine", total_items: 1590,
        Number_of_items_type1: 68, Number_of_items_type2: 200, Number_of_items_type3: 320, Number_of_items_type4: 201, Number_of_items_type5: 100
    }]
    const classes = useStyles()
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <div className="container-fluid">
                <div className="row ">
                    <div className="col-lg-12 col-12 delivery_menuBar_container">

                        <Box className={`px-0 ${classes}`} sx={{ width: '100%', typography: 'body1' }}>
                            <TabContext value={value}>
                                <Box className={`${classes.open_dispensory_tab_background} ${classes.open_dispensory_tab}`} sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                                        <Tab label="Order Online" value="1" />
                                        <Tab label="Order now" value="2" />
                                        <Tab label="Best of Backwood aroma" value="3" />
                                        <Tab label="Recreational" value="4" />
                                        <Tab label="Medical" value="5" />

                                    </TabList>
                                </Box>
                                <Box className={`${classes.deliverItemCardPadding}`}>
                                    <TabPanel value="1" >
                                        <DeliveryItemsCard DeliveryItemsCardArray={DeliveryItemsCardArray1} />
                                    </TabPanel>
                                    <TabPanel value="2"><DeliveryItemsCard DeliveryItemsCardArray={DeliveryItemsCardArray2} /></TabPanel>
                                    <TabPanel value="3">Best of Backwood aroma</TabPanel>
                                    <TabPanel value="4">Recreational</TabPanel>
                                    <TabPanel value="5">Medical</TabPanel>
                                </Box>
                            </TabContext>
                        </Box>
                    </div>

                </div>

            </div>
        </>
    )
}
export default DeliveryMenuBar