import {useEffect, useState} from 'react';
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {useCartUI} from './CartUIProvider.client';
import MenuIcon from '@mui/icons-material/Menu';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import {Link} from '@shopify/hydrogen/client';

/**
 * A client component that specifies the content of the header on the website
 */

const drawerWidth = 240;

export default function Header({collections, storeName}) {
  const {isCartOpen} = useCartUI();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    console.log(collections, storeName);
  }, [isCartOpen]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <header className="h-20 lg:h-32" role="banner">
      <Box sx={{flexGrow: 1}}>
        <AppBar position="fixed" open={open}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{mr: 2}}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              Shrimp Lover {'&'} Tropical Fish
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer anchor={'left'} open={open} onClose={handleDrawerClose}>
          <List>
            {collections.map((collection, index) => (
              <ListItem button key={collection.id}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <Link to={`/collections/${collection.handle}`}>
                  <ListItemText primary={collection.title} />
                </Link>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Drawer>
      </Box>
    </header>
  );
}
