import { IconProps } from "./IconProps";

const EmptyWindowIcon: React.FC<IconProps> = ({ width = 150, height = 150, color = '#D9D9D9' }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height}>
            <path fillRule="evenodd" clipRule="evenodd" d="M37.5 37.5H65.625V46.875H37.5V75H28.125V46.875H0V37.5H28.125V9.375H37.5V37.5ZM9.375 135.938V84.375H18.75V131.25H131.25V65.625H75V56.25H131.25V37.5H75V28.125H135.938L140.625 32.8125V135.938L135.938 140.625H14.0625L9.375 135.938Z" fill={color} />
        </svg>
    )
}

export default EmptyWindowIcon