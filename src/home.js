import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Image1 from './img/Video.png';
import Image2 from './img/Rectangle379@2x.png';
import Image3 from './img/Rectangle381@2x.png';
import Image4 from './img/Rectangle382@2x.png';
import Image5 from './img/Rectangle383@2x.png';
import Image6 from './img/Rectangle384@2x.png';
import Image7 from './img/Rectangle385@2x.png';
import Property1 from './img/image@12x.png';
import Property2 from './img/image@2x.png';
import Property3 from './img/image.png';
import Property4 from './img/image3.png';
import Icon1 from './img/icons/real-estate-building-house.png';
import Icon2 from './img/icons/real-estate-action-building-dollar.png';
import Icon3 from './img/icons/temperature-snowflake.png';
import Icon4 from './img/icons/discount-dollar-dash.png';
import Icon5 from './img/icons/construction-house.png';
import Icon6 from './img/icons/bathroom-tub-towel.png';
import Icon7 from './img/icons/real-estate-dimensions-house-ruler.png';
import Icon8 from './img/icons/temperature-thermometer-high.png';
import Icon9 from './img/icons/real-estate-search-building.png';
import Imager1 from './img/icons/hotel-single-bed.png';
import Imager2 from './img/icons/bathroom-tub-towel1.png';
import Imager3 from './img/icons/currency-dollar.png';import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';
import Checkbox from '@material-ui/core/Checkbox';

import ArrowRightAlt from '@material-ui/icons/ArrowRightAlt';
import LocationOn from '@material-ui/icons/LocationOn';
import CheckCircle from '@material-ui/icons/CheckCircle';
import NavigateBefore from '@material-ui/icons/NavigateBefore';
import NavigateNext from '@material-ui/icons/NavigateNext';

import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Share from '@material-ui/icons/Share';
import HelpOutline from '@material-ui/icons/HelpOutline';
import Box from '@material-ui/core/Box';
import Tabs from './tab';
import Taxtable from './tax_table';
import Chart from './chart';
import Slider from '@material-ui/core/Slider';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';


import  {
  Link
} from 'react-router-dom';

const useStyles=makeStyles((theme)=>({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
  large: {
       [theme.breakpoints.down('sm')]: {
      width: theme.spacing(20),
    height: theme.spacing(20),
           marginLeft:'80%'
    }, [theme.breakpoints.up('lg')]: {
       width: theme.spacing(43),
    height: theme.spacing(43),
           marginLeft:'24%',
        marginTop:'14%'
    }
   
    },
   
    image: {
    position: 'relative',
    height: 300,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 0,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },

    root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    width: '100%',
    height: '100%',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
    
    
    
    caro:{ 
        
        backgroundRepeat: 'no-repeat', 
        backgroundSize:'cover',
        backgroundPosition:'center',  
        [theme.breakpoints.up('xs')]: {
        height:240,
            paddingTop: '15%'
    },   
      [theme.breakpoints.up('sm')]: {
      height:550,
          paddingTop: '15%'
         
    }
    }
}));

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

const LightTooltip = withStyles((theme) => ({
    tooltip: {
        backgroundColor: theme.palette.common.white,
        color: 'rgba(0, 0, 0, 0.87)',
        boxShadow: theme.shadows[1],
        fontSize: 11,
    },
}))(Tooltip);

function Example(props){
  
    const classes = useStyles();
    
    var items = [
        {
            name: "",
            image: Image1,
            description: ""
        }
    ]

    var properties = [
        {image: Property1},
        {image: Property2},
        {image: Property3},
        {image: Property4}    ]

  var images = [
        {image: Image2},
        {image: Image3},
        {image: Image4},
        {image: Image5},
        {image: Image6},
          { image: Image7 }
    ]

    var images_group = [
          {
              image: Image3,
              name: "Listing Agent"
          },   {
              image: Image3,
              name: "Premier Agent"
          },   {
              image: Image3,
              name: "Premier Agent"
          },  {
              image: Image3,
              name: "Premier Agent"
          }
             ]

    var description = [
        {
            name: "Bedrooms",
            number: 3
        },  {
            name: "Bethrooms",
            number: 3
        }
        ,  {
            name: "Balcony",
            number: 2
        }
        ,  {
            name: "furnishing",
            number: "furnished"
        }
        ,  {
            name: "Area",
            number: "2130 sqft"
        }
        ,  {
            name: "Parking",
            number: "2 covered"
        }
        ,  {
            name: "floor",
            number: "2/3"
        }
        ,  {
            name: "Units on floor",
            number: "1"
        }
        ,  {
            name: "Lift",
            number: "1"
        }
        ,  {
            name: "Water Availability",
            number: "24 hours"
        }  ,  {
            name: "Status of electricity",
            number: "No/Rare powercut"
        }

    ]
    
    
 
    const newvalue =520000

    
    const [loan, setLoan] = React.useState(30);

       const setloan = (e) => {
        setLoan(e.target.value)
    }
    return (
        
        <Container maxWidth="lg">
        
        

<br/>
            <div role="presentation" onClick={handleClick}>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="hover" color="inherit" href="/">
                        MUI
                    </Link>
                    <Link
                        underline="hover"
                        color="inherit"
                        href="/getting-started/installation/"
                    >
                        Core
                    </Link>
                    <Link
                        underline="hover"
                        color="text.primary"
                        href="/components/breadcrumbs/"
                        aria-current="page"
                    >
                        Breadcrumbs
                    </Link>
                </Breadcrumbs>
            </div>
            
            
            <br/>
            
            
            
                   {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
       

            <div style={{marginTop:10}}>
                <Grid container spacing={1}>

                    {images.map((item, key) => <Grid key={key}  item lg={2} md={2} xs={2}> <img src={item.image} alt={item.image} width="100%" sx={{ mt: 1 }} /></Grid>)}
                   
  
                </Grid>
            
           
            
              
    
    </div>

<br/>
            <Grid container spacing={2}>

                <Grid item lg={7} md={7} sm={12}>

                    <Grid container spacing={0} style={{ textAlign: "left" }}>
                    <Grid item lg={8} md={7} sm={12} >
                            <span style={{ fontSize: 12, color:"#707070" }}>Refference no: #1068</span>
                            <h2 style={{ marginTop:0, marginBottom:5}}>
                                <span style={{ fontSize: 25 }}> Logan, Twin Eagles Point </span>  <span>  <CheckCircle style={{ color:"#2196F3"}} /> </span>
                        </h2>
                </Grid>

                        <Grid item lg={4} md={5} sm={12}>
                            <Button variant="outlined" color="secondary" style={{marginTop:20}}>
                            Contact Agent
                        </Button>
                </Grid>
                </Grid>

                    <Grid container spacing={2} style={{ textAlign: "left" }}>
                        <Grid item lg={5} md={5} sm={4}>
                            <List className={classes.root}>
                                <ListItem>
                                   
                                        <LocationOn style={{ fontSize: 18 }} />
                                    
                                    <ListItemText style={{ fontSize: 12, marginLeft: 5 }} secondary=" Granger, AI 50109 " />

                                </ListItem>
                            </List>
                                                  </Grid>
                        <Grid item lg={3} md={3} sm={3}>

                            <List className={classes.root}>
                                <ListItem>

                                    <FavoriteBorder style={{ fontSize: 18}} />

                                    <ListItemText style={{ fontSize: 12, marginLeft: 5 }} secondary=" Save " />

                                </ListItem>
                            </List>
                                                  </Grid>
                        <Grid item lg={3} md={3} sm={3}>

                            <List className={classes.root}>
                                <ListItem>

                                    <Share style={{ fontSize: 18 }} />

                                    <ListItemText style={{ fontSize: 12, marginLeft:5 }} secondary=" Share "  />

                                </ListItem>
                            </List>

                           

                        </Grid>


                    </Grid>


                    <div style={{ textAlign: "left", marginTop: 20 }}>
                        {description.map((desc, key) => <button key={key} style={{ textAlign: "center", padding: 10, margin: 10, backroundColor: "#707070", border: "none", fontSize: 11, color: "#707070"  }}> {desc.name} <br /> <span style={{ fontSize: 16, color: "#016450", padding:30 }}>{desc.number}</span> </button>)}
                       
                    </div>

                    <div style={{ marginTop: 30, textAlign: "left" }}>
                        <span style={{ color: "#ff6500", paddingBottom:"40px" }}> PRICE </span>
                        <span style={{ fontSize: 36, fontWeight: "bold", marginTop:"10px" }}> $345,900 </span>
                        <br />

                        <p style={{ color: "#707070" }}>EMI. payment: <span style={{ color: "black", fontWeight: "bold" }}>$2,145/mo </span>
                            <LightTooltip title="Use our mortgage calculator to estimate your monthly mortgage payment. You can input a different home price, down payment, loan term and interest rate to see how your monthly payment changes." style={{backgroundColor:"white"}}>
                                <HelpOutline style={{ fontSize: 14 }} />
                            </LightTooltip>
 </p>

                    </div>


                    <div style={{ marginTop: 30, textAlign: "left" }}>
                       <h3>Descriptions</h3>
                        <p style={{ color: "#707070" }}>Welcome to Dynasty's Logan floorplan! This spacious home offers 2,661 square feet to 3,396 square feet of living space. The Logan foyer opens to a home office in the front of the home. The kitchen overlooks the back yard with rear facing window with an adjacent dinette that leads into the family room... <Link style={{ color: "#016450", fontWeight:"bold"  }} >Read more</Link></p>

                    </div>


                </Grid>

                <Grid item lg={5} md={5} sm={12}>
                    <Paper className="properties"  style={{paddingBottom:20}}>

                        <ButtonGroup variant="contained" style={{width:"100%"}} aria-label="outlined primary button group">
                            <Button style={{ width: "50%" }} >Schedule A Tour</Button>
                            
                            <Button style={{
                                width: "50%", backgroundColor: "#016450", color:"white" }} >Request Info</Button>
                        </ButtonGroup>


                        <Container style={{ marginTop: 20 }}>


                            <Grid container spacing={2}>
                                <Grid item lg={6} sm={6} md={6}>

                                    <TextField id="outlined-basic" fullWidth label="Name" variant="outlined" />

                            </Grid>



                                <Grid item lg={6} sm={6} md={6}>
                                    <TextField id="outlined-basic" fullWidth width="100%" label="Phone" variant="outlined" />


                            </Grid>




                            </Grid>
                            <TextField id="outlined-basic" label="email" type="email" variant="outlined" style={{ width: "100%", marginTop: 10 }} />



                            <TextField
                                id="outlined-multiline-static"
                                
                                multiline
                                rows={4}
                                style={{ width: "100%", marginTop: 10 }}
                                defaultValue="I am interested in Logan, Twin Eagles Point, Granger, IA 50109" 
                                variant="outlined"
                            />



                            <Button style={{ width: "100%", marginTop: 10, backgroundColor:"#FF6500" , color:"white" }} >Request info</Button>

                            <div style={{ textAlign: "left" }}>
                                <Checkbox aria-label='Checkbox demo' /> <span>I want to talk about financing</span>
                            </div>


                            <p style={{ textAlign: "left", fontSize:12 }}>

                                By pressing Request Info, you agree that Trulia and real estate professionals may contact you via phone/text about your inquiry, which may involve the use of automated means. You are not required to consent as a condition of purchasing any property, goods or services. Message/data rates may apply. You also agree to our <Link style={{ color: "#016450" }}>Terms of Use </Link> Trulia does not endorse any <Link style={{color:"#016450"}}> real estate professionals </Link>

                            </p>

                        </Container>
                        <Container maxWidth="sm" style={{ paddingLeft: 50,  paddingRight: 50 }}>

                            <Grid container spacing={2} style={{textAlign:"center"}}>
                                {images_group.map((item, key) => <Grid key={key} item lg={3} xs={3} md={3}>
                                    <img src={item.image}  alt={item.image} width="80%" /> <br />
                                    <span style={{ fontSize:12}}>{item.name}</span>
                                </Grid> )}
                               
 

                               
                            </Grid>
                        </Container>

                    </Paper>
                                    </Grid>


            </Grid>


            <div style={{ marginTop: 20, textAlign:"left" }}>
                <h3>Home Details for Logan, Twin Eagles Point</h3>
            </div>



            <Grid container>

                <Grid lg={4} md={4} sm={12}>
                    <List className={classes.root}>
                        <ListItem>
                            <ListItemAvatar>
                                <img src={Icon1}  alt={Icon1} width="40%"  />
                            </ListItemAvatar>
                            <ListItemText primary="Single family house"   />

                        </ListItem>
                    </List>

                    <List className={classes.root}>
                        <ListItem>
                            <ListItemAvatar>
                                <img src={Icon2}  alt={Icon2} width="40%"  />
                            </ListItemAvatar>
                            <ListItemText primary="$95/monthly HOA"   />

                        </ListItem>
                    </List>
 
                    <List className={classes.root}>
                        <ListItem>
                            <ListItemAvatar>
                                <img src={Icon3}  alt={Icon3} width="40%"  />
                            </ListItemAvatar>
                            <ListItemText primary="Cooling System: Central"   />

                        </ListItem>
                    </List>


                </Grid>
 
                <Grid lg={4} md={4} sm={12}>


                    <List className={classes.root}>
                        <ListItem>
                            <ListItemAvatar>
                                <img src={Icon4}  alt={Icon4} width="40%"  />
                            </ListItemAvatar>
                            <ListItemText primary="$230/sqft"  />

                        </ListItem>
                    </List>

                    <List className={classes.root}>
                        <ListItem>
                            <ListItemAvatar>
                                <img src={Icon5}  alt={Icon5} width="40%"  />
                            </ListItemAvatar>
                            <ListItemText primary="Built in 2002"  />

                        </ListItem>
                    </List>

                    <List className={classes.root}>
                        <ListItem>
                            <ListItemAvatar>
                                <img src={Icon6}  alt={Icon6} width="40%" />
                            </ListItemAvatar>
                            <ListItemText primary="Bathtub"  />

                        </ListItem>
                    </List>




                </Grid>
 
                <Grid lg={4} md={4} sm={12}>

                    <List className={classes.root}>
                        <ListItem>
                            <ListItemAvatar>
                                <img src={Icon7}  alt={Icon7} width="40%"  />
                            </ListItemAvatar>
                            <ListItemText primary="Lot SIze: 2,130 sqft"  />

                        </ListItem>
                    </List>

                    <List className={classes.root}>
                        <ListItem>
                            <ListItemAvatar>
                                <img src={Icon8} alt={Icon8} width="40%"  />
                            </ListItemAvatar>
                            <ListItemText primary="Heating: Forced Air, Gas"  />

                        </ListItem>
                    </List>

                    <List className={classes.root}>
                        <ListItem>
                            <ListItemAvatar>
                                <img src={Icon9}  alt={Icon9} width="40%"  />
                            </ListItemAvatar>
                            <ListItemText primary="Rooms: 10 Rooms"  />

                        </ListItem>
                    </List>




                </Grid>
                <Button variant="outlined">See All</Button>

             
            </Grid>


            <div style={{textAlign:"left", marginTop:80}}>
                <h3>Local Informations</h3>



             <Tabs/>


                <div>

                    <Grid container spacing={1}>

                        <Grid item lg={4} sm={4} md={4}>
                            <h5 style={{marginBottom:1}}> Restaurants and Bars </h5>
                            <span style={{color:"#707070" }}>0.1 km - Baris </span> <br/>
                            <span style={{ color: "#707070"  }}>0.3 km - Sagar Ratna </span> <br/>
                            <span style={{ color: "#707070"  }}>0.2 km - Pandan Asian Eats </span>


                            <h5 style={{ marginBottom: 1 }}> Shopping </h5>
                            <span style={{ color: "#707070" }}>0.1 km - Masjid Moth Commercial Complex </span> <br />
                            <span style={{ color: "#707070"  }}>0.3 km - G K More </span> <br/>
                            <span style={{ color: "#707070"  }}>0.2 km - Pandan Asian Eats  </span> <br/>



                        </Grid>


                        <Grid item lg={4} sm={4} md={4}>
                            <h5 style={{ marginBottom: 1 }}> Entertainment </h5>
                            <span style={{ color: "#707070" }}>0.1 km - Rashi Entertainment  </span> <br/>
                            <span style={{ color: "#707070" }}>0.14 km - Kronos Production </span> <br />
                            <br/>
                            


                            <h5 style={{ marginBottom: 1 }}> Health and Hospital </h5>
                            <span style={{ color: "#707070" }}>0.1 km - Madhukar Rainbow Children's Hospital </span> <br />
                            <span style={{ color: "#707070" }}>0.3 km - Max Multi Speciality Centre </span> <br/>
                            <span style={{ color: "#707070" }}>0.2 km - Pt. Madan Mohan Malaviya Hospital   </span> <br/>



                        </Grid>
  

                        <Grid item lg={4} sm={4} md={4}>
                            <h5 style={{ marginBottom: 1 }}> Public Transit </h5>
                            <span style={{ color: "#707070" }}>0.1 km - Pamposh Bus Stand   </span> <br/>
                            <span style={{ color: "#707070" }}>0.14 km - Nehru Enclave Metro </span> <br />
                            <br/>
                            


                            <h5 style={{ marginBottom: 1 }}> Sports and Wellness </h5>
                            <span style={{ color: "#707070" }}> 0.1 km - Wolfer Sports  </span> <br />
                            <span style={{ color: "#707070" }}> 0.14 km - AVM Sports World </span> <br/><br/>



                        </Grid>
 
                       
                    </Grid>

                </div>


            </div>

            <div style={{ textAlign:"left", marginTop:80 }}>
                <h3>Property Taxes and Assessment</h3>


                <Taxtable/>

            </div>


            <div style={{ textAlign: "left", marginTop: 80 }}>

                <h3>Affordability</h3>
                <p> Calculate your monthly mortgage payments </p>
                <p> Your est. payment: $2,441/month </p>

                <div style={{ backgroundColor:"#f8f8f8", padding:20, paddingTop:60, paddingBottom:60}}>

                    <Grid container spacing={2}>

                        <Grid item lg={4} sm={12} md={4}>

                            <Grid container>
                                <Grid xs={8}>
                                    <h5 style={{ textAlign: "left", margin: 0 }}>Home Price</h5>
                                </Grid>
                                <Grid xs={4} style={{ textAlign: "right" }}>
                                    <span style={{ padding: 5, backgroundColor: "white" }}>${newvalue}</span>
                                </Grid>
                                <Box width="100%">
                                    <Slider defaultValue={520000} id="irst" max={1000000} aria-label="Default" valueLabelDisplay="auto" />
                                </Box>
                            </Grid>

                        </Grid>

  <Grid item lg={4} sm={12} md={4}>

                            <Grid container>
                                <Grid xs={8}>
                                    <h5 style={{ textAlign: "left", margin: 0 }}>Down Payment</h5>
                                </Grid>
                                <Grid xs={4} style={{ textAlign: "right" }}>
                                    <span style={{ padding: 5, backgroundColor: "white" }}>${newvalue}</span>
                                    <span style={{ padding: 5, backgroundColor: "white", borderLeft: "solid", borderWidth: 1, borderColor:"#f0f0f0" }}>20%</span>
                                </Grid>
                                <Box width="100%">
                                    <Slider defaultValue={520000} id="irst" max={1000000} aria-label="Default" valueLabelDisplay="auto" />
                                </Box>
                            </Grid>

                        </Grid>
  <Grid item lg={4} sm={12} md={4}>

                            <Grid container>
                                <Grid xs={8}>
                                    <h5 style={{ textAlign: "left", margin: 0 }}>Interest Rate</h5>
                                </Grid>
                                <Grid xs={4} style={{ textAlign: "right" }}>
                                    <span style={{ padding: 5, backgroundColor: "white" }}>2.97%</span>
                                </Grid>
                                <Box width="100%">
                                    <Slider defaultValue={520000} id="irst" max={1000000} aria-label="Default" valueLabelDisplay="auto" />
                                </Box>
                            </Grid>

                        </Grid>

                    </Grid>
                    <div style={{ textAlign:"left", marginTop:20 }}>
                    <span>
                        Loan Type
                        </span> <br/>
                        <FormControl variant="outlined"  className={classes.formControl}>
                            <InputLabel id="demo-simple-select-outlined-label"  width={100}></InputLabel>
                            <Select
                                labelId="demo-customized-select-label"
                                id="demo-customized-select"
                                value={loan}
                                onChange={setloan}
                               >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>


                    </div>
                </div>

            </div>


            <div>

                <Chart />

                <Button style={{ backgroundColor: "#016450", padding: 15, color: "white" }}>Get Pre-Qualified</Button>
                <p>Or</p>
                <Link style={{color:"#016450"}}>See today’s mortgage rates</Link>


            </div>


            <div style={{ textAlign:"left", marginTop:80 }}>

                <h3 >Similar Property</h3>


                <Grid container spacing={4}>

                    {properties.map((items,key)=>

                        <Grid key={key} item lg={3} md={3} sm={12} >
                            <Paper className="properties">
                                <div style={{ height: 200, width: "100%", borderRadius: 8, backgroundImage: `url(${items.image})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }} >
                                    <div style={{ textAlign: "right" }}>
                                        < FavoriteBorder style={{ color: "white", margin: 10 }} />
                                    </div>

                                    <Grid container style={{ marginTop: "15%" }}>

                                        <Grid item xs={6} style={{ color: "white" }}>
                                            <NavigateBefore />
                                        </Grid>

                                        <Grid item xs={6} style={{ textAlign: "right", color: "white" }}>
                                            <NavigateNext />
                                        </Grid>

                                    </Grid>



                                </div>

                                <div style={{ paddingLeft: 10, paddingRight: 0 }}>
                                    <h3 style={{ marginBottom: 0 }}>2 BHK House 1400 sqft</h3>

                                    <Grid container>

                                        <Grid item xs={3}>

                                            <List className={classes.root}>
                                                <ListItem>
                                                    <img src={Imager1}  alt={Imager1} width="90%"  /><span style={{ marginLeft: 8 }}> 2</span>


                                                </ListItem>
                                            </List>
                                        </Grid>


                                        <Grid item xs={3}>

                                            <List className={classes.root}>
                                                <ListItem>
                                                    <img src={Imager2}  alt={Imager2} width="100%"  /> <span style={{ marginLeft: 8 }}>2 </span>

                                                </ListItem>
                                            </List>
                                        </Grid>


                                        <Grid item xs={6}>

                                            <List className={classes.root}>
                                                <ListItem>
                                                    <img src={Imager3}  alt={Imager3} width="18%"  /> <span style={{ color: "#FF6500", marginLeft: 5 }}>700</span>/month

                                                </ListItem>
                                            </List>
                                        </Grid>




                                    </Grid>




                                    <Grid container>

                                        <Grid item xs={9}>
                                            <List className={classes.root}>
                                                <ListItem>

                                                    <LocationOn style={{ fontSize: 18 }} />

                                                    <ListItemText style={{ fontSize: 12, marginLeft: 5 }} secondary="Evergreen Chemists" />

                                                </ListItem>
                                            </List>
                                        </Grid>

                                        <Grid item xs={3} style={{ textAlign: "right", marginTop: "24px" }}>
                                            <Button style={{ float: "right", position: "relative", backgroundColor: "#E6F0EE" }}><ArrowRightAlt /> </Button>
                                        </Grid>


                                    </Grid>


                                </div>




                            </Paper>
                        </Grid>


                    )}




                </Grid>


            </div>




            <div style={{ marginTop: 50, backgroundColor:"#F8F8F8", textAlign:"left"}}>

                <Grid container style={{padding:30}}>

                    <Grid lg={7} md={7} sm={12}>
                        <h2 style={{fontSize:50}}>  Are you a home owner?  </h2>
                        <p> Put your email address and get listed. </p>
                    </Grid>


                    <Grid lg={5} md={5} sm={12}>

                        <div style={{ backgroundColor: "white", borderRadius:"5px", padding:10, marginTop:53 }}>
                            <Grid container spacing={1}>

                                <Grid xs={9}>

                                    <TextField placeholder="Enter email address"  type="email" style={{ width: "100%", marginTop: 10, borderColor: "white" }} InputProps={{
                                        disableUnderline: true, 
                                    }} />


                                </Grid>

                                <Grid xs={3} style={{textAlign:"right"}}>
                                    <Button style={{ backgroundColor:"#016450", color:"white", padding:12}}>Get Listed</Button>
                                </Grid>

                            </Grid>
                        </div>

                    </Grid>

                </Grid>

            </div>



    </Container>

      
    )
}

function Item(props)



{
    const classes=useStyles()
    return (
        
        <div className={classes.caro} style={{ backgroundImage: `url(${props.item.image})` }}>
            <h1 style={{ color: "white", fontSize: "33px", marginTop: 30 }} ><span style={{ paddingLeft: 12, paddingRight: 12 }}>{props.item.name} </span></h1>
            <p style={{ color: "white", fontSize: "16px" }} >{props.item.description}</p>




        </div>



    

    )
}


export default Example


