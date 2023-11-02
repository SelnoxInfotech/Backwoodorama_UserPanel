import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import useStyles from '../../../../../Style';
import DeliveryItemsCard from "./DeliveryItemsCards";
import Createcontext from "../../../../../Hooks/Context"
import { Delivery } from '../../../../Component/ScoPage/Deliveries';
import { GetAllDelivery } from "../../../../../Api/Api"
import { useLocation } from 'react-router-dom';
const DeliveryMenuBar = () => {
    const { state } = React.useContext(Createcontext)
    const [Deliverie, SetDelivery] = React.useState([])
    React.useEffect(() => {

        if (state.City !== "") {
            const object = { City: state.City.replace(/-/g, " ") }
            GetAllDelivery(object).then((response) => {
                if (response?.length !== 0) {
                    SetDelivery(response)
                }
                else {
                    const object = { State: state.State.replace(/-/g, " ") }
                    GetAllDelivery(object).then((response) => {
                        if (response?.length !== 0) {
                            SetDelivery(response)

                        }
                        else {
                            const object = { Country: state.Country.replace(/-/g, " ") }
                            GetAllDelivery(object).then((response) => {
                                if (response?.length !== 0) {
                                    SetDelivery(response)
        
                                }

                            })
                        }
                    })
                }
            })
        }
        else {
            if (state.State !== "") {
                const object = { State: state.State }
                GetAllDelivery(object).then((response) => {
                  
                    if (response?.length !== 0) {
                        SetDelivery(response)
                    }
                    else {
                        const object = { Country: state.Country.replace(/-/g, " ") }
                        GetAllDelivery(object).then((response) => {
                            if (response?.length !== 0) {
                                SetDelivery(response)
                            }
                        })
                    }
                })
            }
            else {
                if (state.Country !== "") {
                    const object = { Country: state.Country.replace(/-/g, " ") }
                    GetAllDelivery(object).then((response) => {
                        if (response?.length !== 0) {
                            SetDelivery(response)
                        }
                    })
                }
            }
        }


        // GetAllDelivery().then((response) => {
      
        // })


        // axios.get(
        //     'https://api.cannabaze.com/UserPanel/Get-PickupStores/',
        // ).then(response => {

        //     SetPickup(response.data)
        // }).catch(
        //     function (error) {

        //     })
    }, [state])

    const classes = useStyles()
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    console.log(useLocation().pathname)
    return (
        <React.Fragment>
            <div className="col-lg-12 col-11 delivery_menuBar_container px-0 mt-4">
                <Delivery location={useLocation().pathname}></Delivery>
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