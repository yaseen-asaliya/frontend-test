import { forwardRef } from "react";
import MuiAlert, { AlertColor } from "@mui/material/Alert";
import { Typography } from "@mui/material";
import { SnackbarContent } from "notistack";
import styles from "./Alert.module.css";
import { theme } from '../../theme/Theme'

export type AlertOptions = {
  title: string;
  type: AlertColor;
  text: string;
};
type AlertProps = AlertOptions;

const Alert = forwardRef<HTMLDivElement, AlertProps>(
  ({ title, type, text }, ref) => {

    const style = { backgroundColor: '' };
    switch (type) {
      case "success":
        style.backgroundColor = theme.colorSchemes.light.palette.success.main;
        break;
      case "error":
        style.backgroundColor = theme.colorSchemes.light.palette.error.main;
        break;
      case "warning":
        style.backgroundColor = theme.colorSchemes.light.palette.warning.main;
        break;
    }

    return (
      <SnackbarContent ref={ref}>
        <MuiAlert
          style={style}
          severity={type}
          variant="filled"
          className={styles.alertContainer}
        >
          <Typography className={styles.alertTitle}>{title}</Typography>
          {text}
        </MuiAlert>
      </SnackbarContent>
    );
  }
);

Alert.displayName = "Alert";
export default Alert;
