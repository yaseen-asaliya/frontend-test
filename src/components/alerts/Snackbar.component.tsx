import React, { useEffect } from "react";
import { useSnackbar } from "notistack";
import { AlertOptions } from "./Alert.component";

type SnackbarProps = AlertOptions;

const Snackbar: React.FC<SnackbarProps> = (props) => {
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    enqueueSnackbar({ ...props, variant: "alert" });
  }, [enqueueSnackbar, props]);

  return null;
};

export default Snackbar;
