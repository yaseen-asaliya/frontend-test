import { Button } from "@mui/material";
import Loader from "react-js-loader";
import style from './Loaders.module.css';
import './Loaders.module.css'

export default function SmallButtonLoader({ buttonText, buttonWidth = "207px" }: { buttonText: string, buttonWidth?: string }) {

    const buttonStyle = {
        width: buttonWidth,
    };

    return (
        <Button style={buttonStyle} disabled className={`${style.smallButton} small-loader`} variant="contained" >
            <Loader type="spinner-cub" size={16} />
            <div className=".tab-label me-1 text-white-50">{buttonText}</div>
        </Button>
    );
}

