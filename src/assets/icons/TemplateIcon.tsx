import { IconProps } from "./IconProps";

const TemplateIcon: React.FC<IconProps> = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.4444 0V1.6H15.117C15.6046 1.6 16 1.95596 16 2.39472V15.2053C16 15.6442 15.6045 16 15.117 16H0.883022C0.395342 16 0 15.6441 0 15.2053V2.39472C0 1.95581 0.395511 1.6 0.883022 1.6H3.55556V0H12.4444ZM3.55556 3.2H1.77778V14.4H14.2222V3.2H12.4444V4.8H3.55556V3.2ZM5.33333 11.2V12.8H3.55556V11.2H5.33333ZM5.33333 8.8V10.4H3.55556V8.8H5.33333ZM5.33333 6.4V8H3.55556V6.4H5.33333ZM10.6667 1.6H5.33333V3.2H10.6667V1.6Z"
        fill="currentColor"
        />
    </svg>
  );
};
export default TemplateIcon;
