import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import DotsHorizontalIcon from "../../../assets/icons/DotsHorizontalIcon.component";
import DataBaseLineIcon from "../../../assets/icons/DataBaseLineIcon.component";
import { IconButton } from "@mui/material";
import localization from "../../../../localizationConfig";
import styles from "./BasicPopover.module.css";
import { useNavigate } from "react-router-dom";
export default function BasicPopover() {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const navigate = useNavigate();
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleContentClick = () => {
    navigate("/form-responses");
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <IconButton aria-describedby={id} onClick={handleClick} sx={{ p: 0 }}>
        <DotsHorizontalIcon />
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <div className={styles.popover}>
          <div className={styles.button}>
            <IconButton
              onClick={handleContentClick}
              sx={{
                p: 1,
                gap: 1,
                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}
            >
              <DataBaseLineIcon />
              <Typography
                sx={{ fontWeight: 400, color: "black", fontSize: 14 }}
              >
                {localization.viewResults}
              </Typography>
            </IconButton>
          </div>
        </div>
      </Popover>
    </div>
  );
}
