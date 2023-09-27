import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import useStyles from '../../../Style';
import Products from './Product/Products';
import Learn from './Learn';
import History from './History/History';
import Laws from './Laws/Laws';
import { Link, useLocation , useNavigate} from 'react-router-dom';
const LearnTabs = () => {
    const Location = useLocation()
    const Naviagte =  useNavigate()
   
    const classes = useStyles()
    const [value, setValue] = React.useState(Location.pathname);
    const handleChange = (event, newValue) => {
       
        setValue(newValue);
        Naviagte(newValue)

    };
    React.useEffect(() => {
        window.scroll(0, 0)
    }, [])
    // /learn/laws-and-regulation/:State
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-12'>
                    <Box className={``} sx={{ width: '100%', typography: 'body1', }}>
                        <TabContext value={value}>
                            <Box className={`${classes.learn_tab_background} ${classes.learn_tab}`} sx={{ marginLeft: "-5px", borderColor: 'divider' }}>
                                <TabList scrollButtons={false} variant="scrollable" onChange={handleChange} aria-label="lab API tabs example">
                                    <Tab label="Learn" value="/learn" />
                                    <Tab label="Product" value="/Product" />
                                    <Tab label="History" value="/History" />
                                    <Tab label="Law" value="/learn/laws-and-regulation" />

                                </TabList>
                            </Box>
                            <Box className={`${classes.learnTabPadding}`}>
                                <TabPanel value="/learn" >
                                    <Learn />
                                </TabPanel>
                                <TabPanel value="/Product"><Products /></TabPanel>
                                <TabPanel value="/History"><History /></TabPanel>
                                <TabPanel value="/learn/laws-and-regulation"><Laws /></TabPanel>
                            </Box>
                        </TabContext>
                    </Box>
                </div>

            </div>

        </div>
    )
}
export default LearnTabs