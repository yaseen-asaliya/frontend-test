import React, { ReactNode } from "react";
import styles from "./FormDataLabel.module.css";

interface FormDataLabelProps {
  icon: ReactNode;
  text: string;
  whiteSpace?: "normal" | "nowrap";
}
const FormDataLabel: React.FC<FormDataLabelProps> = ({
  icon,
  text,
  whiteSpace = "nowrap",
}) => {
  return (
    <div className={styles.data}>
      {icon}
      <div className={styles.label} style={{ whiteSpace }}>
        {text}
      </div>
    </div>
  );
};

export default FormDataLabel;
