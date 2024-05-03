// import DeliveryPickupMenu from "./DeliveriesComponent/DeliveryPickupMenu"
import DeliveryMenuBar from "./DeliveriesComponent/DeliveryMenuBar/DeliveryMenuBar"
import Createcontext from "../../../Hooks/Context"
import React from "react"
import { useLocation } from "react-router-dom"
import axios from "axios"
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import useStyles from '../../../Style';
import DeliveryItemsCard from "./DeliveriesComponent/DeliveryMenuBar/DeliveryItemsCards";
import { Delivery } from '../../Component/ScoPage/Deliveries';
import { GetAllDelivery } from "../../../Api/Api"
import Wronglocation from "../../Component/Skeleton/Wronglocation"
const Deliveries=()=>{
    const { state } = React.useContext(Createcontext)
    const Location = useLocation()
    const [Deliverie, SetDelivery] = React.useState([])
    const [loader, setloader] = React.useState(false);

    React.useEffect(() => {
            const object = { City: state.City.replace(/-/g, " ") , State: state.State.replace(/-/g, " "), Country: state.Country.replace(/-/g, " ") }
            GetAllDelivery(object).then((response) => {
                setloader(true)
                if (Boolean(response)) {
                    SetDelivery(response)
                }
                else{
                    SetDelivery([])
                }
            })
    }, [state])
    const classes = useStyles()
    const [value, setValue] = React.useState('1');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    React.useEffect(()=>{
        document.documentElement.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant", // Optional if you want to skip the scrolling animation
        });
    },[])
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
        axios.post(`https://api.cannabaze.com/UserPanel/Update-SiteMap/11`,
                {
                    j:'https://www.weedx.io'+ modifystr(Location.pathname)
                },
            ).then((res) => {
              

            }).catch((err) => {
            })
    }, [Location])
    return(
        <React.Fragment>
        <div className="container-fluid">
            <div className="row  deliveries_centers">
                <div className="headerBoxdescription">
                   <h1 className="m-0">
                     <span className="dispensories_name">Weed Delivery In </span>
                    <span className="dispensories_city">{state.Location}</span></h1>
                     <p>{ `find Nearby Weed Delivery in  ${state.Location}  for Recreational & Medical Uses. Browse Top Cannabis Products and Place Orders from Trusted weed delivery near you.`}</p>
                 
                </div>
               
            <div className="col-lg-12 col-11 delivery_menuBar_container px-0 mt-4">
                <Delivery location={Location.pathname}></Delivery>

                {
                   loader? ( Boolean(Deliverie.length) ?
              
                    <Box className={``} sx={{ width: '100%', typography: 'body1', }}>
                        <TabContext value={value}>
                            <Box className={`${classes.open_dispensory_tab_background} ${classes.open_dispensory_tab}`} sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <TabList scrollButtons={false} variant="scrollable" onChange={handleChange} aria-label="lab API tabs example">
                                    <Tab label="Order Online" value="1" />
                                    <Tab label="Order now" value="2" />
                                    <Tab label="Best of WeedX" value="3" />
                                    {/* <Tab label="Recreational" value="4" /> */}

                                </TabList>
                            </Box>
                            <Box className={`${classes.deliverItemCardPadding}`}>
                                <TabPanel value="1" >
                                    <DeliveryItemsCard Deliverie={Deliverie} />
                                </TabPanel>
                                <TabPanel value="2"><DeliveryItemsCard Deliverie={Deliverie} /></TabPanel>
                                <TabPanel value="3"><DeliveryItemsCard Deliverie={Deliverie} /></TabPanel>
                            </Box>
                        </TabContext>
                    </Box>
                    :
                    <Wronglocation title={'No deliveries available'} description={`Delivery service isn't available at your location. Would you like to try a different address ?`}/>)  
                   : <div className="loader_container">
                    <span className="newloader"></span>
                </div>
              
              }
            </div>
     
            </div>

        </div>
        </React.Fragment>
    )
}
export default Deliveries