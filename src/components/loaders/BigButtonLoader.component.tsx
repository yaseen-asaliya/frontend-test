import { Button } from "@mui/material";
import Loader from "react-js-loader";
import style from './Loaders.module.css';

export default function BigButtonLoader() {

    return (
        <Button disabled className={style.bigButton} variant="contained" >
            <Loader type="bubble-scale" size={50} />
        </Button>
    );
}

