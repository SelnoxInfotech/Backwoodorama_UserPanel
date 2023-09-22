import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import useStyles from '../../../../../Style';
import DeliveryItemsCard from "./DeliveryItemsCards";
import axios from 'axios';
import { Delivery } from '../../../../Component/ScoPage/Deliveries';

const DeliveryMenuBar = () => {
    const [Deliverie, SetDelivery] = React.useState([])
    const [Pickup, SetPickup] = React.useState([])
    React.useEffect(() => {
        axios.get(
            'https://sweede.app/UserPanel/Get-DeliveryStores/',
        ).then(response => {
            const k = response.data.reduce((acc, current) => {
                const x = acc.find(item => item.id === current.id);
                if (!x) {
                    const newCurr = {
                        Store_Name: current.Store_Name,
                        Category: [{ [current.Category]: current.ProductCount }],
                        id: current.id,
                        Store_Image: current.Store_Image,
                        Store_Address: current.Store_Address
                    }
                    return acc.concat([newCurr]);
                } else {
                    const currData = x.Category.filter(d => d === current.Category);
                    if (!currData.length) {
                        const newData = x.Category.push({ [current.Category]: current.ProductCount });
                        const newCurr = {
                            Store_Name: current.Store_Name,
                            Category: newData,
                            id: current.id,
                            Store_Image: current.Store_Image,
                            Store_Address: current.Store_Address
                        }
                        return acc;
                    } else {
                        return acc;
                    }
                    //   Category: [{ [y.Category]: y.ProductCount }] 
                }
            }, []);
            SetDelivery(k)
        }).catch(
            function (error) {

            })
        axios.get(
            'https://sweede.app/UserPanel/Get-PickupStores/',
        ).then(response => {

            SetPickup(response.data)
        }).catch(
            function (error) {

            })
    }, [])

    const classes = useStyles()
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <React.Fragment>
            <div className="col-lg-12 col-11 delivery_menuBar_container px-0 mt-4">
                <Delivery></Delivery>
                <Box className={``} sx={{ width: '100%', typography: 'body1', }}>
                    <TabContext value={value}>
                        <Box className={`${classes.open_dispensory_tab_background} ${classes.open_dispensory_tab}`} sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList scrollButtons={false} variant="scrollable" onChange={handleChange} aria-label="lab API tabs example">
                                <Tab label="Order Online" value="1" />
                                <Tab label="Order now" value="2" />
                                <Tab label="Best of WeedX" value="3" />
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


        </React.Fragment>
    )
}
export default DeliveryMenuBar