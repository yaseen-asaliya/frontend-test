import React from "react";
import FormIcon from "../../assets/icons/FormIcon.component";
import PersonIcon from "../../assets/icons/PersonIcon.component";
import PeopleIcon from "../../assets/icons/PeopleIcon.component";
import localization from "../../../localizationConfig";
import Card from "./Card/Card.component";
import FormDataLabel from "../formDataLabel/FormDataLabel.component";
import { formatDynamicText } from "../../utils/cardUtils";

interface TemplateCardProps {
  formData: number;
  createdBy: string;
  permissions: string[];
  title: string;
}
const TemplateCard: React.FC<TemplateCardProps> = ({
  formData,
  createdBy,
  permissions,
  title,
}) => {
  return (
    <Card size="lg" title={title}>
      <FormDataLabel
        icon={<FormIcon />}
        text={`${formData} ${localization.form}`}
      />
      <FormDataLabel
        icon={<PersonIcon />}
        text={`${localization.by} : ${createdBy}`}
      />
      <FormDataLabel
        icon={<PeopleIcon />}
        text={`${localization.permissions} : ${formatDynamicText(permissions)}`}
        whiteSpace="normal"
      />
    </Card>
  );
};

export default TemplateCard;
