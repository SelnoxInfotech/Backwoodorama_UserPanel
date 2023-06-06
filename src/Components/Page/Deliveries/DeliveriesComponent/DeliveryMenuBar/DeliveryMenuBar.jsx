import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import useStyles from '../../../../../Style';
import DeliveryItemsCard from "./DeliveryItemsCards";
import axios from 'axios';

const DeliveryMenuBar = () => {
    const [Deliverie, SetDelivery] = React.useState([])
    const [Pickup, SetPickup] = React.useState([])
    React.useEffect(() => {
        axios.get(
            'http://backend.sweede.net/UserPanel/Get-DeliveryStores/',
        ).then(response => {

            SetDelivery(response.data)
        }).catch(
            function (error) {

            })
        axios.get(
            'http://backend.sweede.net/UserPanel/Get-PickupStores/',
        ).then(response => {

            SetPickup(response.data)
        }).catch(
            function (error) {

            })
    }, [])
    const DeliveryItemsCardArray2 = [{
        imgurl: "/image/edibles.webp", item_name: "Jaderoom delivery Irvine",
        address: "Medical and recreational", address2: "Irvine", total_items: 1590,
        Number_of_items_type1: 68, Number_of_items_type2: 200, Number_of_items_type3: 320, Number_of_items_type4: 201, Number_of_items_type5: 100
    }]
    const DeliveryItemsCardArray3 = [{
        imgurl: "/image/cat_prod_5.jpg", item_name: "Jaderoom delivery Irvine",
        address: "Medical and recreational", address2: "Irvine", total_items: 1590,
        Number_of_items_type1: 68, Number_of_items_type2: 200, Number_of_items_type3: 320, Number_of_items_type4: 201, Number_of_items_type5: 100
    }]
    const DeliveryItemsCardArray4 = [{
        imgurl: "/image/wee_img1.jpeg", item_name: "Jaderoom delivery Irvine",
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
            <div className="col-lg-12 col-11 delivery_menuBar_container px-0 mt-2">

                <Box className={``} sx={{ width: '100%', typography: 'body1', }}>
                    <TabContext value={value}>
                        <Box className={`${classes.open_dispensory_tab_background} ${classes.open_dispensory_tab}`} sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList onChange={handleChange} aria-label="lab API tabs example">
                                <Tab label="Order Online" value="1" />
                                <Tab label="Order now" value="2" />
                                <Tab label="Best of Backwood aroma" value="3" />
                                <Tab label="Recreational" value="4" />

                            </TabList>
                        </Box>
                        <Box className={`${classes.deliverItemCardPadding}`}>
                            <TabPanel value="1" >
                                <DeliveryItemsCard Deliverie={Deliverie} />
                            </TabPanel>
                            <TabPanel value="2"><DeliveryItemsCard Deliverie={Deliverie} /></TabPanel>
                            <TabPanel value="3"><DeliveryItemsCard Deliverie={Deliverie} /></TabPanel>
                            <TabPanel value="4"><DeliveryItemsCard Deliverie={Deliverie} /></TabPanel>
                        </Box>
                    </TabContext>
                </Box>
            </div>


        </>
    )
}
export default DeliveryMenuBar