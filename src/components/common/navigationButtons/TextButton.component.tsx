import { Link } from 'react-router-dom';
import style from './Buttons.module.css';

export default function TextButton({ text, navigateTo }: { text: string, navigateTo: string }) {

    return (
        <div>
            <Link className={`${style.textNavigation} text-decoration-none label`} to={navigateTo}>{text}</Link>
        </div>
    );
}