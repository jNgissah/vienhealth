import React from 'react';

import  {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import './style.css';



import Main from './home';
import Footer from './footer';
import Chip from './chip';
import Logo from './img/logo.png';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Search from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Menu1 from '@material-ui/icons/Menu';


const useStyles = makeStyles((theme)=>({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
    displayer_small: {
        backgroundColor:" #F8F8F8",
        [theme.breakpoints.up('xs')]: {
        display:'flex',
        },
         [theme.breakpoints.up('sm')]: {
       display:'none',
        }
    },
    displayer_big:{
        [theme.breakpoints.up('xs')]: {
        display:'none',
        },
         [theme.breakpoints.up('sm')]: {
       display:'flex',
        }
    }
}));




const Menu = ()=>{
    
  const classes = useStyles();
  const [state, setState] = React.useState({top: false});

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {[<Link to="/">Home</Link>,<Link >Menu 1</Link>, <Link>Menu 2</Link>,  <Link >Menu 3</Link>].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon></ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      
    </div>
  );


        
 
 console.log()     
        
        
        

    return(
        
        <Router>
         <div className={classes.displayer_big}>
                <div className="nav-wrapper containe before" >
            
                <ul className="right hide-on-med-and-down">
        
                    
                        <li><Chip style={{ width: "100%" }} /></li>
                        <li style={{ textAlign: "left" }}             ><Button style={{ backgroundColor: "#016450", color: "white", marginLeft:"-50px", marginRight:"100px" }}> <Search /></Button></li>
                        <li><Link >Sell your properties</Link></li>
                        <li>   {['right'].map((anchor) => (
                            <React.Fragment key={anchor}>
                                <Button onClick={toggleDrawer(anchor, true)}><Menu1 /></Button>
                                <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                                    {list(anchor)}
                                </Drawer>
                            </React.Fragment>
                        ))}  </li>
               
                </ul>
                
        
         </div>
         </div>
        
        <div>
       
        
        
        <div className={classes.displayer_small} style={{textAlign:'left', padding:10}}>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}><Menu1 /></Button>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
      
      <span style={{marginLeft:'0'}}>
                        <Chip style={{ width: "100%" }} />
                    </span><Button style={{backgroundColor:"#016450" , color:"white"}}> <Search/></Button>
    </div>
        
        
        
        </div>
        
        
       
        
        <Switch>
          <Route path="/">
            <Main/>
          </Route>
        </Switch>
        
        <Footer/>
        </Router>
        
        
        
        
    )
    
}



export default Menu;
