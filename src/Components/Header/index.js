import { Texts, Colors, Links } from "../../Constants"
import {useState, useEffect} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import Menu from '@mui/material/Menu';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const HeaderComponent = () =>  {
    const [drawer, setDrawer] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

      const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
      }; 
      
      const toggleDrawer = (value) => () => {
        setDrawer(value);
      };


      const handleClose = () => {
        setAnchorEl(null);
      };

      const DrawerList = (
        <Box sx={{ width: 250}} role="presentation" onClick={toggleDrawer(false)}>
          <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      );

      return (<Box  width={"100%"} >
        <AppBar sx={{ boxShadow:"none", flexGrow: 1, bgcolor: Colors.Transparent}} position="absolute" color="inherit" >
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Drawer  open={drawer} onClose={toggleDrawer(false)}>{DrawerList}</Drawer>
            <Typography href="#home" variant="h6" component="div" sx={{ flexGrow: 1 }}>
              LOGO
            </Typography>
              <div>

              <IconButton
                  size="large"
                  aria-label="whatsapp"
                  href={Links.WhatsApp}
                  target="_blank"
                  color="inherit"
                >
                  <WhatsAppIcon />
                </IconButton>
              <IconButton
                  size="large"
                  aria-label="linkedin"
                  href={Links.Linkedin}
                  target="_blank"
                  color="inherit"
                >
                  <LinkedInIcon />
                </IconButton>
                <IconButton
                  size="large"
                  aria-label="instagram"
                  href={Links.Instagram}
                  target="_blank"
                  color="inherit"
                >
                  <InstagramIcon />
                </IconButton>
              </div>
          </Toolbar>
        </AppBar>
      </Box>)

}

export default HeaderComponent