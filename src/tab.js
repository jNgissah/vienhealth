import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

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

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: '#016450' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Map" {...a11yProps(0)} />
                    <Tab label="Street View" {...a11yProps(1)} />
                    <Tab label="Schools" {...a11yProps(2)} />
                    <Tab label="Shop & Eat" {...a11yProps(3)} />
                    <Tab label="Health & Hospital" {...a11yProps(4)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <div>


                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3577.1786795189914!2d-81.6331916849682!3d26.288306983400577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88db0469f8982073%3A0xf14ab078c5247cee!2sTwinEagles%20Club!5e0!3m2!1sen!2sgh!4v1631878761651!5m2!1sen!2sgh" width="100%" height="450" style={{ border: "none" }} allowfullscreen="" title="frame1" loading="lazy"></iframe>


                </div>
            </TabPanel>
            <TabPanel value={value} index={1}>


                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d136384.0781963153!2d-0.25405000373325726!3d5.589032903492826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9084b2b7a773%3A0xbed14ed8650e2dd3!2sAccra!5e0!3m2!1sen!2sgh!4v1631878943617!5m2!1sen!2sgh" width="100%" height="450" style={{ border: "none" }} allowfullscreen="" title="frame2" loading="lazy"></iframe>



            </TabPanel>
            <TabPanel value={value} index={2}>

                <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d254134.30668573934!2d-0.25405023065481147!3d5.589390104104314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sschools!5e0!3m2!1sen!2sgh!4v1631879668565!5m2!1sen!2sgh" width="100%" height="450" style={{ border: "none" }} title="frame3" allowfullscreen="" loading="lazy"></iframe>

            </TabPanel>
            <TabPanel value={value} index={3}>


                <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d254134.0244179539!2d-0.2540510186945601!3d5.590040342993614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sshop!5e0!3m2!1sen!2sgh!4v1631879827043!5m2!1sen!2sgh" width="100%" height="450" style={{ border: "none" }} title="frame4" allowfullscreen="" loading="lazy"></iframe>


            </TabPanel>
            <TabPanel value={value} index={4}>

                <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d254133.7421194224!2d-0.25405180673346905!3d5.590690577310331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1shospital!5e0!3m2!1sen!2sgh!4v1631879901124!5m2!1sen!2sgh" width="100%" height="450" style={{ border: "none" }} title="frame5"  allowfullscreen="" loading="lazy"></iframe>

            </TabPanel>
        </Box>
    );
}
