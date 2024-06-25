// import DeliveryPickupMenu from "./DeliveriesComponent/DeliveryPickupMenu"
import DeliveryMenuBar from "./DeliveriesComponent/DeliveryMenuBar/DeliveryMenuBar"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Createcontext from "../../../Hooks/Context"
import React from "react"
import { useLocation, useNavigate , Link } from "react-router-dom"
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
import Loader from "../../Component/Loader/Loader";
const Deliveries = () => {
    const { state, dispatch } = React.useContext(Createcontext)
    const Location = useLocation()
    const navigate = useNavigate()
    const [Deliverie, SetDelivery] = React.useState([])
    const [loader, setloader] = React.useState(false);
    const [contentdata, setcontentdata] = React.useState([])
    React.useEffect(() => {
        const object = { City: state.City.replace(/-/g, " "), State: state.State.replace(/-/g, " "), Country: state.Country.replace(/-/g, " ") }
       if(state.Country !== ''){
         GetAllDelivery(object).then((response) => {
           
                    SetDelivery(()=>response)
                    setloader(true)
            
        }).catch((error) => {
            setloader(true)   
        })
      
            axios.post(`https://api.cannabaze.com/UserPanel/Get-WebpageDescriptionDeliveries/`, { ...object }).then((res) => {
                setcontentdata(res.data)
            })
        }

    }, [state.City, state.State, state.Country])
    const classes = useStyles()
    const [value, setValue] = React.useState('1');
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
        // Define a function to send the POST request
        const sendPostRequest = () => {
            axios.post(
                `https://api.cannabaze.com/UserPanel/Update-SiteMap/11`,
                {
                    j: 'https://www.weedx.io' + modifystr(Location.pathname.replace(/\/+$/, ""))
                }
            ).then((res) => {
                // Handle response if needed
            }).catch((err) => {
                // Handle error if needed
            });
        };

        // Call the sendPostRequest function after 2 seconds
        const timeoutId = setTimeout(sendPostRequest, 2000);

        // Cleanup function to clear the timeout if the component unmounts or Location changes
        return () => clearTimeout(timeoutId);
    }, [Location]);

    function breadcrumCountry(country, state1, city) {
        if (Boolean(city)) {
            dispatch({ type: 'route', route: "" })
            dispatch({ type: 'Location', Location: state.City })
            navigate(`/weed-deliveries/in/${modifystr(state.Country.toLowerCase())}/${modifystr(state.State.toLowerCase())}/${modifystr(state.City.toLowerCase())}`)
        }
        else if (Boolean(state1)) {
            dispatch({ type: 'Location', Location: state.State })
            dispatch({ type: 'City', City: "" })
            dispatch({ type: 'route', route: "" })
            navigate(`/weed-deliveries/in/${modifystr(state.Country)}/${modifystr(state?.State)}`)
        }
        else if (Boolean(country)) {
            dispatch({ type: 'State', State: "" })
            dispatch({ type: 'City', City: "" })
            dispatch({ type: 'route', route: "" })
            dispatch({ type: 'Location', Location: state.Country })
            navigate(`/weed-deliveries/in/${modifystr(state.Country.toLowerCase())}/`)
        }

    }
    return (
        <React.Fragment>
            <div style={{cursor:"pointer"}}>
                <span onClick={() => navigate("/")}>{"Home"}</span>
                {Boolean(state.Country) && <span> {">"} <span onClick={() => breadcrumCountry("Country")}>{state.Country}</span></span>}
                {Boolean(state.State) && <span> {">"} <span onClick={() => breadcrumCountry("Country", "state")}>{state.State}</span></span>}
                {Boolean(state.City) && <span> {">"} <span onClick={() => {Boolean(state.route) && breadcrumCountry("Country", "state", "City")}}>{state.City}</span></span>}
                {Boolean(state.route) && <span> {">"} <span>{state.route}</span></span>}

            </div>
            <div className="container-fluid">
                <div className="row  deliveries_centers">
                    <div className="headerBoxdescription">
                        <h1 className="m-0">
                            <span className="dispensories_name">Weed Delivery In </span>
                            <span className="dispensories_city">{state.Location}</span></h1>
                        <p className="m-0">{`Find Nearby Weed Delivery in  ${state.Location}  for Recreational & Medical Uses. Browse Top Cannabis Products and Place Orders from Trusted weed delivery near you.`}</p>

                    </div>

                    <div className="col-lg-12 col-11 delivery_menuBar_container px-0 mt-4">
                        <Delivery location={Location.pathname}></Delivery>

                        {
                            loader ?
                                (Boolean(Deliverie?.length) ?

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
                                                <TabPanel value="1"><DeliveryItemsCard Deliverie={Deliverie} /></TabPanel>
                                                <TabPanel value="2"><DeliveryItemsCard Deliverie={Deliverie} /></TabPanel>
                                                <TabPanel value="3"><DeliveryItemsCard Deliverie={Deliverie} /></TabPanel>
                                            </Box>
                                        </TabContext>
                                    </Box>
                                    :
                                    <Wronglocation title={'No deliveries available'} description={`Delivery service isn't available at your location. Would you like to try a different address ?`} />)
                                :
                                <Loader/>

                        }
                    </div>
                        <div className="col-12 webContent">
                            <h2 className="section_main_title">{contentdata?.Title}</h2>
                            <div dangerouslySetInnerHTML={{ __html: contentdata?.Content }} />
                        </div>
                        {contentdata.length !== 0 &&
                        contentdata?.Faq[0]?.title !== '' &&
                        <>  <h3 className="section_main_title">FAQs</h3>

                            <div className="row">
                                {
                                    contentdata?.Faq?.map((item) => {
                                        return <div className="col-lg-6 webContent my-2"> <Accordion>
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel1-content"
                                                id="panel1-header"
                                            >
                                                <h3 >{item.title}</h3>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <p>{item.answer}</p>
                                            </AccordionDetails>
                                        </Accordion></div>
                                    })
                                }

                        </div></>}


                           {Boolean(Deliverie.length) && <div className="col-12 webContent">
                                <h2 className="section_main_title">Fast and Reliable Cannabis Delivery in {state.Location} </h2>
                                <div>
                                <p>At Weedx.io, we connect you with the best cannabis delivery services in {state.Location}. Our platform helps you find the most reliable delivery options, read reviews, and discover top products, all from the comfort of your home.
                                </p>
                                <h2>Top-Rated Delivery Services According to Users in {state.Location}</h2>


                                <h3>Top  Delivery Services in {state.Location}:</h3>
                                   { Boolean(Deliverie?.length) &&  <ul>
                                        {
                                            Deliverie?.filter((item)=> item.rating >= 4)?.map((items)=>{
                                                return <li><Link to={`/weed-deliveries/${items.Store_Name.replace(/\s/g,'-').toLowerCase()}/${"review"}/${items.id}`}>{items.Store_Name}</Link></li>
                                            })
                                        }
                                         
                                       </ul>
                                    }

                                    <h3>Top Selling Delivery Products in {state.Location}:</h3>
                                    { Boolean(Deliverie?.length) &&  <ul>
                                        {
                                            Deliverie?.filter((item)=> item.rating > 4)?.map((items)=>{
                                                return <li><Link to={`/weed-deliveries/${items.Store_Name.replace(/\s/g,'-').toLowerCase()}/${"review"}/${items.id}`}>{items.Store_Name}</Link></li>
                                            })
                                        }
                                         
                                       </ul>
                                    }
                                    <h3>Neighborhood Locations Near {state.Location}:</h3>
                                    <p> Nearby Location 1 | Nearby Location 2 | Nearby Location 3 </p>

                                    <h3>Zip Codes in {state.Location} Area:</h3>
                                    <p> Zip Code 1 | Zip Code 2 </p>

                                    <h3>Popular Searches in {state.Location}</h3>
                                    <ul>
                                        <li>Newest Cannabis Delivery Services in {state.Location}</li>
                                        <li>Delivery Services in {state.Location} with Curbside Pickup</li>
                                        <li>Delivery Services in {state.Location} with Daily Deals</li>
                                        <li>Delivery Services in {state.Location} Open Late</li>
                                        <li>Medical Cannabis Delivery Services in {state.Location}</li>
                                        <li>Recreational Cannabis Delivery Services in {state.Location}</li>
                                    </ul>

                                </div>
                            </div>}
                  
                            { Boolean(Deliverie.length) &&
                                <>
                                <h3 className="section_main_title">FAQs</h3>
                                <div className="row">
                                            <div className="col-lg-6 webContent my-2">
                                                <Accordion>
                                                    <AccordionSummary
                                                        expandIcon={<ExpandMoreIcon />}
                                                        aria-controls="panel1-content"
                                                        id="panel1-header"
                                                    >
                                                        <h3 >{`What are the best cannabis delivery services in ${state.Location} ?`}</h3>
                                                    </AccordionSummary>
                                                    <AccordionDetails>
                                                        <p> Top-rated cannabis delivery services in {state.Location} include  <Link to={`/weed-deliveries/${Deliverie[0]?.Store_Name.replace(/\s/g,'-').toLowerCase()}/${"review"}/${Deliverie[0]?.id}`}>{Deliverie[0]?.Store_Name}</Link>, <Link to={`/weed-deliveries/${Deliverie[1]?.Store_Name.replace(/\s/g,'-').toLowerCase()}/${"review"}/${Deliverie[1]?.id}`}>{Deliverie[1]?.Store_Name}</Link> , and <Link to={`/weed-deliveries/${Deliverie[2]?.Store_Name.replace(/\s/g,'-').toLowerCase()}/${"review"}/${Deliverie[2]?.id}`}>{Deliverie[2]?.Store_Name}</Link>.  Best Delivery Services in {state.Location}.</p>
                                                    </AccordionDetails>
                                                </Accordion>
                                            </div>
                                            <div className="col-lg-6 webContent my-2">
                                                <Accordion>
                                                    <AccordionSummary
                                                        expandIcon={<ExpandMoreIcon />}
                                                        aria-controls="panel1-content"
                                                        id="panel1-header"
                                                    >
                                                        <h3 >{`Which delivery services in ${state.Location} offer the fastest delivery? `}</h3>
                                                    </AccordionSummary>
                                                    <AccordionDetails>
                                                        <p> For quick cannabis delivery in {state.Location}, try <Link to={`/weed-deliveries/${Deliverie[0]?.Store_Name.replace(/\s/g,'-').toLowerCase()}/${"review"}/${Deliverie[0]?.id}`}>{Deliverie[0]?.Store_Name}</Link>, <Link to={`/weed-deliveries/${Deliverie[1]?.Store_Name.replace(/\s/g,'-').toLowerCase()}/${"review"}/${Deliverie[1]?.id}`}>{Deliverie[1]?.Store_Name}</Link>, and <Link to={`/weed-deliveries/${Deliverie[2]?.Store_Name.replace(/\s/g,'-').toLowerCase()}/${"review"}/${Deliverie[2]?.id}`}>{Deliverie[2]?.Store_Name}</Link>.  Fast Delivery Services in {state.Location}.</p>
                                                    </AccordionDetails>
                                                </Accordion>
                                            </div>
                                            <div className="col-lg-6 webContent my-2">
                                                <Accordion>
                                                    <AccordionSummary
                                                        expandIcon={<ExpandMoreIcon />}
                                                        aria-controls="panel1-content"
                                                        id="panel1-header"
                                                    >
                                                        <h3 >{`What delivery services have the best customer reviews in ${state.Location}? `}</h3>
                                                    </AccordionSummary>
                                                    <AccordionDetails>
                                                        <p> Highly reviewed cannabis delivery services in {state.Location} include <Link to={`/weed-deliveries/${Deliverie[0]?.Store_Name.replace(/\s/g,'-').toLowerCase()}/${"review"}/${Deliverie[0]?.id}`}>{Deliverie[0]?.Store_Name}</Link>, <Link to={`/weed-deliveries/${Deliverie[1]?.Store_Name.replace(/\s/g,'-').toLowerCase()}/${"review"}/${Deliverie[1]?.id}`}>{Deliverie[1]?.Store_Name}</Link>, and <Link to={`/weed-deliveries/${Deliverie[2]?.Store_Name.replace(/\s/g,'-').toLowerCase()}/${"review"}/${Deliverie[2]?.id}`}>{Deliverie[2]?.Store_Name}</Link>.  Top Reviewed Delivery Services in {state.Location}.</p>
                                                    </AccordionDetails>
                                                </Accordion>
                                            </div>
                                            <div className="col-lg-6 webContent my-2">
                                                <Accordion>
                                                    <AccordionSummary
                                                        expandIcon={<ExpandMoreIcon />}
                                                        aria-controls="panel1-content"
                                                        id="panel1-header"
                                                    >
                                                        <h3 >{`Which delivery services in ${state.Location} offer a wide range of products? `}</h3>
                                                    </AccordionSummary>
                                                    <AccordionDetails>
                                                        <p> Delivery services with a diverse product range in {state.Location} include <Link to={`/weed-deliveries/${Deliverie[0]?.Store_Name.replace(/\s/g,'-').toLowerCase()}/${"review"}/${Deliverie[0]?.id}`}>{Deliverie[0]?.Store_Name}</Link>, <Link to={`/weed-deliveries/${Deliverie[1]?.Store_Name.replace(/\s/g,'-').toLowerCase()}/${"review"}/${Deliverie[1]?.id}`}>{Deliverie[1]?.Store_Name}</Link>, and <Link to={`/weed-deliveries/${Deliverie[2]?.Store_Name.replace(/\s/g,'-').toLowerCase()}/${"review"}/${Deliverie[2]?.id}`}>{Deliverie[2]?.Store_Name}</Link>.  Wide Range Product Delivery Services in {state.Location}.</p>
                                                    </AccordionDetails>
                                                </Accordion>
                                            </div>
                                            <div className="col-lg-6 webContent my-2">
                                                <Accordion>
                                                    <AccordionSummary
                                                        expandIcon={<ExpandMoreIcon />}
                                                        aria-controls="panel1-content"
                                                        id="panel1-header"
                                                    >
                                                        <h3 >{`What delivery services in ${state.Location} offer the best prices? `}</h3>
                                                    </AccordionSummary>
                                                    <AccordionDetails>
                                                        <p> Affordable cannabis delivery services in {state.Location} include <Link to={`/weed-deliveries/${Deliverie[0]?.Store_Name.replace(/\s/g,'-').toLowerCase()}/${"review"}/${Deliverie[0]?.id}`}>{Deliverie[0]?.Store_Name}</Link>, <Link to={`/weed-deliveries/${Deliverie[1]?.Store_Name.replace(/\s/g,'-').toLowerCase()}/${"review"}/${Deliverie[1]?.id}`}>{Deliverie[1]?.Store_Name}</Link>, and <Link to={`/weed-deliveries/${Deliverie[2]?.Store_Name.replace(/\s/g,'-').toLowerCase()}/${"review"}/${Deliverie[2]?.id}`}>{Deliverie[2]?.Store_Name}</Link>.  Affordable Delivery Services in {state.Location}.</p>
                                                    </AccordionDetails>
                                                </Accordion>
                                            </div>
                                            <div className="col-lg-6 webContent my-2">
                                                <Accordion>
                                                    <AccordionSummary
                                                        expandIcon={<ExpandMoreIcon />}
                                                        aria-controls="panel1-content"
                                                        id="panel1-header"
                                                    >
                                                        <h3 >{`Which delivery services in ${state.Location} have the best selection of edibles? `}</h3>
                                                    </AccordionSummary>
                                                    <AccordionDetails>
                                                        <p> For a great selection of edibles, try <Link to={`/weed-deliveries/${Deliverie[0]?.Store_Name.replace(/\s/g,'-').toLowerCase()}/${"review"}/${Deliverie[0]?.id}`}>{Deliverie[0]?.Store_Name}</Link>, <Link to={`/weed-deliveries/${Deliverie[1]?.Store_Name.replace(/\s/g,'-').toLowerCase()}/${"review"}/${Deliverie[1]?.id}`}>{Deliverie[1]?.Store_Name}</Link>, and <Link to={`/weed-deliveries/${Deliverie[2]?.Store_Name.replace(/\s/g,'-').toLowerCase()}/${"review"}/${Deliverie[2]?.id}`}>{Deliverie[2]?.Store_Name}</Link>.  Edible Delivery Services in {state.Location}.</p>
                                                    </AccordionDetails>
                                                </Accordion>
                                            </div>
                                            <div className="col-lg-6 webContent my-2">
                                                <Accordion>
                                                    <AccordionSummary
                                                        expandIcon={<ExpandMoreIcon />}
                                                        aria-controls="panel1-content"
                                                        id="panel1-header"
                                                    >
                                                        <h3 >{`What are the best delivery services for medical cannabis in ${state.Location}? `}</h3>
                                                    </AccordionSummary>
                                                    <AccordionDetails>
                                                        <p> Top medical cannabis delivery services in {state.Location} include <Link to={`/weed-deliveries/${Deliverie[0]?.Store_Name.replace(/\s/g,'-').toLowerCase()}/${"review"}/${Deliverie[0]?.id}`}>{Deliverie[0]?.Store_Name}</Link>, <Link to={`/weed-deliveries/${Deliverie[1]?.Store_Name.replace(/\s/g,'-').toLowerCase()}/${"review"}/${Deliverie[1]?.id}`}>{Deliverie[1]?.Store_Name}</Link>, and <Link to={`/weed-deliveries/${Deliverie[2]?.Store_Name.replace(/\s/g,'-').toLowerCase()}/${"review"}/${Deliverie[2]?.id}`}>{Deliverie[2]?.Store_Name}</Link>.  Medical Cannabis Delivery Services in {state.Location}.</p>
                                                    </AccordionDetails>
                                                </Accordion>
                                            </div>
                                            <div className="col-lg-6 webContent my-2">
                                                <Accordion>
                                                    <AccordionSummary
                                                        expandIcon={<ExpandMoreIcon />}
                                                        aria-controls="panel1-content"
                                                        id="panel1-header"
                                                    >
                                                        <h3 >{`Which delivery services in ${state.Location} are available 24/7? `}</h3>
                                                    </AccordionSummary>
                                                    <AccordionDetails>
                                                        <p> For 24/7 cannabis delivery in {state.Location}, check out <Link to={`/weed-deliveries/${Deliverie[0]?.Store_Name.replace(/\s/g,'-').toLowerCase()}/${"review"}/${Deliverie[0]?.id}`}>{Deliverie[0]?.Store_Name}</Link>, <Link to={`/weed-deliveries/${Deliverie[1]?.Store_Name.replace(/\s/g,'-').toLowerCase()}/${"review"}/${Deliverie[1]?.id}`}>{Deliverie[1]?.Store_Name}</Link>, and <Link to={`/weed-deliveries/${Deliverie[2]?.Store_Name.replace(/\s/g,'-').toLowerCase()}/${"review"}/${Deliverie[2]?.id}`}>{Deliverie[2]?.Store_Name}</Link>.  24/7 Delivery Services in {state.Location}.</p>
                                                    </AccordionDetails>
                                                </Accordion>
                                            </div>
                                    </div>
                                </>
                            }
                </div>
            </div>
        </React.Fragment>
    )
}
export default Deliveries