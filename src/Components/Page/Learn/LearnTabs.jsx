import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import useStyles from '../../../Style';
import Learn from './Learn';
const LearnTabs = () => {
    const classes = useStyles()
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-12'>
                <Box className={``} sx={{ width: '100%', typography: 'body1', }}>
                    <TabContext value={value}>
                        <Box className={`${classes.learn_tab_background} ${classes.learn_tab}`} sx={{ marginLeft: "-5px", borderColor: 'divider' }}>
                            <TabList scrollButtons={false} variant="scrollable" onChange={handleChange} aria-label="lab API tabs example">
                                <Tab label="Learn" value="1" />
                                <Tab label="Product" value="2" />
                                <Tab label="History" value="3" />
                                <Tab label="Law" value="4" />

                            </TabList>
                        </Box>
                        <Box className={`${classes.learnTabPadding}`}>
                            <TabPanel value="1" >
                               <Learn/>
                            </TabPanel>
                            <TabPanel value="2">Product</TabPanel>
                            <TabPanel value="3">History</TabPanel>
                            <TabPanel value="4">Law</TabPanel>
                        </Box>
                    </TabContext>
                </Box>
                </div>

            </div>

        </div>
    )
}
export default LearnTabs