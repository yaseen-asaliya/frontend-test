import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import style from './Buttons.module.css';

export default function NavigationButton({ text, navigateTo, buttonWidth = '560px', load }: { text: string, navigateTo: string, buttonWidth?: string, load?: boolean }) {
    const navigate = useNavigate();

    const navigateToUrl = function () {
        navigate(navigateTo);
        if (load) {
            window.location.reload();
        }
    };

    const buttonStyle = {
        width: buttonWidth,
    };

    return (
        <Button style={buttonStyle} className={`${style.navigationButton} tab-label`} onClick={navigateToUrl} variant="contained">{text}</Button>
    )
}
