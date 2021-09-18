import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Instagram from '@material-ui/icons/Instagram';
import Facebook from '@material-ui/icons/Facebook';
import Twitter from '@material-ui/icons/Twitter';
import {
 
  Link
} from 'react-router-dom';


const useStyles=makeStyles((theme)=>({
    caro:{ 
        
           color:'#707070',
        padding:'50px',
       
    },
    back:{ 
        backgroundColor:"white",
      color:'#707070',
        padding:'10px',
        fontSize:14
       
    }
}));




function Example(props){
    const classes=useStyles()
    return (
        
        <div className={classes.back}>
        <div className={classes.caro}>
        <Grid container spacing={8}>
        <Grid item xs={12} sm={3} md={3} >
         <h2 style={{textAlign:'left'}}> </h2>

                
                    </Grid>


                    <Grid item xs={12} sm={2} md={2} style={{ textAlign: 'left' }}>
    <h4> Support</h4>
        <Link>E-Books</Link><br/>
        <Link>Presentation</Link><br/>
        <Link>Dashboard</Link><br/>
        <Link>Managment</Link><br/>
        <Link>Privacy Policy</Link><br/>
           
        </Grid>
        
        
        
                    <Grid item xs={12} sm={2} md={2} style={{ textAlign: 'left' }} >
        <h2 > Team</h2>

                        <Link>E-Books</Link><br/>
                        <Link>Presentation</Link><br/>
                        <Link>Dashboard</Link><br/>
                        <Link>Managment</Link><br/>
                        <Link>Privacy Policy</Link><br/>


              </Grid>
        
         
                    <Grid item xs={12} sm={2} md={2} style={{ textAlign: 'left' }} >
        <h2> Product</h2>

                        <Link>E-Books</Link><br/>
                        <Link>Presentation</Link><br/>
                        <Link>Dashboard</Link><br/>
                        <Link>Managment</Link><br/>
                        <Link>Privacy Policy</Link><br/>


              </Grid>
         
                    <Grid item xs={12} sm={3} md={3} style={{ textAlign: 'left' }} >
        <h2> Address</h2>

                        Counter Delivery, Carters Beach PostCentre, Westport

                        <br />
                        <br />

                        <IconButton aria-label="" style={{ backgroundColor: "white", color: "#016450", margin:5 }}>
                            <Facebook />
                        </IconButton>
                        <IconButton style={{ backgroundColor: "#016450", color:"white" , margin:5}}>
                            <Instagram />
                        </IconButton>
                        <IconButton aria-label="" style={{ backgroundColor: "white", color: "#016450", margin:5}}>
                            <Twitter />
                        </IconButton>

              </Grid>
        
        

      </Grid>
 </div>
     <p style={{textAlign:'center', fontSize:11}}>
      Copyright 2021 JOSEPH NGISSAH NTORI all rights reserved <br/>
      Powered by <a  href="http://joseph.ravinlead.com">Ntori Joseph Ngissah</a>
</p>
        </div>
        
   
        
        
    

    )
}


export default Example


