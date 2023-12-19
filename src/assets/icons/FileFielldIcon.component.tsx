import { IconProps } from "./IconProps";


const FileFielldIcon: React.FC<IconProps> = ({ width = 150, height = 150, color = '#D9D9D9' }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height}>
            <g clipPath="url(#clip0_353_1819)">
                <path d="M75 12.5L75.7313 12.5437C77.1264 12.7083 78.4254 13.338 79.4187 14.3313C80.412 15.3246 81.0417 16.6236 81.2063 18.0187L81.25 18.75V43.75L81.2813 44.6875C81.5049 47.6636 82.786 50.4614 84.8929 52.5752C86.9998 54.689 89.7934 55.9792 92.7688 56.2125L93.75 56.25H118.75L119.481 56.2938C120.876 56.4583 122.175 57.088 123.169 58.0813C124.162 59.0746 124.792 60.3736 124.956 61.7688L125 62.5V118.75C125 123.533 123.173 128.134 119.892 131.614C116.611 135.094 112.124 137.188 107.35 137.469L106.25 137.5H43.75C38.9674 137.5 34.3655 135.673 30.8859 132.392C27.4062 129.111 25.3118 124.624 25.0313 119.85L25 118.75V31.25C24.9997 26.4674 26.827 21.8655 30.108 18.3859C33.389 14.9062 37.8757 12.8118 42.65 12.5313L43.75 12.5H75ZM65.6938 69.625C64.4422 68.8801 62.9698 68.5957 61.5309 68.8208C60.092 69.046 58.7769 69.7666 57.8127 70.8583C56.8486 71.9499 56.2959 73.3439 56.2503 74.7996C56.2046 76.2554 56.6687 77.6813 57.5625 78.8313L58.0813 79.4187L66.1563 87.5L58.0813 95.5813L57.5625 96.1687C56.6303 97.3713 56.1689 98.8727 56.2647 100.391C56.3605 101.91 57.007 103.341 58.0829 104.417C59.1588 105.493 60.5902 106.139 62.1088 106.235C63.6273 106.331 65.1287 105.87 66.3313 104.938L66.9188 104.419L75 96.3438L83.0813 104.419L83.6688 104.938C84.8713 105.87 86.3727 106.331 87.8912 106.235C89.4098 106.139 90.8412 105.493 91.9171 104.417C92.993 103.341 93.6395 101.91 93.7353 100.391C93.8311 98.8727 93.3697 97.3713 92.4375 96.1687L91.9188 95.5813L83.8438 87.5L91.9188 79.4187L92.4375 78.8313C93.3697 77.6287 93.8311 76.1273 93.7353 74.6088C93.6395 73.0902 92.993 71.6588 91.9171 70.5829C90.8412 69.507 89.4098 68.8605 87.8912 68.7647C86.3727 68.6689 84.8713 69.1303 83.6688 70.0625L83.0813 70.5813L75 78.6562L66.9188 70.5813L66.3313 70.0625L65.6938 69.625Z" fill={color} />
                <path d="M118.75 43.7499H93.75L93.7438 18.7437L118.75 43.7499Z" fill={color} />
            </g>
        </svg>
    )
}

export default FileFielldIcon