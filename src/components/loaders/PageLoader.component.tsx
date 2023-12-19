import Loader from "react-js-loader";
import style from './Loaders.module.css';
import './Loaders.module.css'
import localization from "../../../localizationConfig";

export default function PageLoader() {

    return (
        <>
            <Loader type="spinner-cub" bgColor="gray" size={70} />
            <div className={style.loaderText}>{localization.loading}</div>
        </>
    );
}

