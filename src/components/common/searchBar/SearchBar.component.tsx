import SearchIcon from '../../../assets/icons/SearchIcon.component';
import style from './SearchBar.module.css'
import { OutlinedInput, InputAdornment, IconButton, OutlinedInputProps, } from '@mui/material';
import localization from '../../../../localizationConfig';
const SearchBar:React.FC<OutlinedInputProps> = (props) => {
  return (
    <OutlinedInput className={style.searchBar}
    { ...props}
      placeholder={props.placeholder || localization.search}
      type='text'
      startAdornment={
        <InputAdornment position="start">
          <IconButton edge="start" disableRipple>
            <SearchIcon />
          </IconButton>
        </InputAdornment>
      }
    />
  );
};

export default SearchBar