import { useEffect, useState } from "react";
import { styled, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import styles from "./Sidebar.component.module.css";
import { menuItems, getNavigationPath, getPathAction } from "./menuItems";
import Topbar from "./Topbar.component";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { closeDrawer, openDrawer } from "@/redux/reducers/SidebarReducer";
import localization from "../../../localizationConfig";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  right: 0,

  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": {
      ...openedMixin(theme),
      right: 0,
      left: "auto",
    },
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MiniDrawer() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState(localization.main);
  const open = useSelector((state: RootState) => state.open.open);

  useEffect(() => {
    const currentPath = window.location.pathname;
    const selectedItem = getPathAction(currentPath);
    setSelectedItem(selectedItem);
  }, []);

  const handleDrawerOpen = () => {
    dispatch(openDrawer());
  };

  const handleDrawerClose = () => {
    dispatch(closeDrawer());
  };

  const handleItemClick = (itemAction: string) => {
    if (itemAction !== localization.logout) {
      setSelectedItem(itemAction);
    }
    const navigationPath = getNavigationPath(itemAction);
    navigate(navigationPath);

    if (itemAction === localization.logout) {
      window.location.reload();
    }
  };

  return (
    <Box className={styles.root}>
      <CssBaseline />
      <Topbar
        open={open}
        handleDrawerOpen={handleDrawerOpen}
        selectedItem={selectedItem}
        notificationCount={4}
      />

      <Drawer
        variant="permanent"
        open={open}
        className={`${open ? styles.openDrawer : ""}`}
      >
        <DrawerHeader className={`${styles.drawerHeader} `}>
          <img src="/logo2.png" alt="logo" className={styles.drawerImage} />
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon className={styles.chevronIcon} />
          </IconButton>
        </DrawerHeader>
        <List
          className={`${styles.itemsList} ${!open ? styles.closedList : ""}`}
        >
          {!open && (
            <img src="/logo.png" alt="logo" className={styles.logoItemIcon} />
          )}
          {menuItems.map((item, index) => (
            <ListItem
              key={index}
              disablePadding
              className={`${
                selectedItem === item.action ? styles.listItemSelected : ""
              }`}
              onClick={() => handleItemClick(item.action)}
            >
              <ListItemButton className={styles.listItemButton}>
                <ListItemIcon
                  className={`${styles.listItemIcon} ${
                    selectedItem === item.action ? styles.selectedItemIcon : ""
                  }
                     ${!open ? styles.closedListItemIcon : ""}`}
                >
                  {item.icon}
                </ListItemIcon>
                {open && (
                  <ListItemText
                    primary={item.text}
                    className={`${styles.listItemText} ${
                      selectedItem === item.action
                        ? styles.selectedItemText
                        : ""
                    }`}
                  />
                )}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}
