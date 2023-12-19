import { styled } from "@mui/material/styles";
import MuiAppBar, { AppBarProps as MuiTopBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Typography from "@mui/material/Typography";
import profileImage from "../../assets/images/userProfile.png";
import styles from "./Sidebar.component.module.css";
const drawerWidth = 240;

interface TopBarProps extends MuiTopBarProps {
  open?: boolean;
  handleDrawerOpen?: () => void;
  selectedItem?: string;
  notificationCount?: number;
}

const TopBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<TopBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  boxShadow: "none",
  ...(open && {
    marginRight: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Topbar = ({
  open,
  handleDrawerOpen,
  selectedItem,
  notificationCount = 0,
}: TopBarProps) => {
  return (
    <TopBar className={`${open ? styles.openSidebar : styles.closedSidebar}`}>
      <Toolbar className={styles.topbar}>
        {!open && (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerOpen}
            className={styles.menuButton}
          >
            <MenuIcon />
          </IconButton>
        )}
        <Typography
          variant="h6"
          noWrap
          component="div"
          className={styles.topBarTitle}
        >
          {selectedItem}
        </Typography>
        <div className={styles.profileInformationContainer}>
          <IconButton color="inherit">
            <NotificationsIcon className={styles.notificationsIcon} />
          </IconButton>
          {notificationCount > 0 && (
            <span className={styles.notificationCount}>
              {notificationCount}
            </span>
          )}
          <img
            className={styles.userProfileImage}
            src={profileImage}
            alt="User"
          />
          <Typography variant="body2" className={styles.userProfileName}>
            علا أبو خضر
          </Typography>
        </div>
      </Toolbar>
    </TopBar>
  );
};

export default Topbar;
