import React, { ReactNode } from "react";
import styles from "./Card.module.css";
import TemplateIcon from "../../../assets/icons/TemplateIcon.component";
import BasicPopover from "../../common/BasicPopover/BasicPopover.component";

interface BodyCardProps {
  children: ReactNode;
  title: string;
  size?: "sm" | "lg";
}

const Card: React.FC<BodyCardProps> = ({ children, title, size = "sm" }) => {
  const cardStyle = {
    width: "100%",
    maxWidth: size === "sm" ? "514px" : "700px",
  };

  return (
    <div style={cardStyle} className={styles.card}>
      <div className={styles.icon}>
        <TemplateIcon />
      </div>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <div className={styles.title}>{title}</div>
          {size === "sm" && <BasicPopover />}
        </div>
        <div className={styles.information}> {children}</div>
      </div>
    </div>
  );
};

export default Card;
