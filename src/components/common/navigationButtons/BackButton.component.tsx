import { Avatar, IconButton } from '@mui/material';
import style from './Buttons.module.css';

export default function BackButton() {
  const navigateTo = function () {
    window.history.back();
  };

  return (
    <IconButton onClick={navigateTo}>
      <Avatar className={style.backButton}>
        <i className={`fa-solid fa-arrow-right ${style.backButtonIcon}`}></i>
      </Avatar>
    </IconButton>
  );
}
