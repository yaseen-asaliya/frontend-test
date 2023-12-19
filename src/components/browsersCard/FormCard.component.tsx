import React from "react";
import PersonIcon from "../../assets/icons/PersonIcon.component";
import PeopleIcon from "../../assets/icons/PeopleIcon.component";
import localization from "../../../localizationConfig";
import Card from "./Card/Card.component";
import FormDataLabel from "../formDataLabel/FormDataLabel.component";

interface FormCardProps {
  createdBy: string;
  creationDate: string;
  title: string;
}
const FormCard: React.FC<FormCardProps> = ({
  createdBy,
  creationDate,
  title,
}) => {
  return (
    <Card size="sm" title={`${title}`}>
      <FormDataLabel
        icon={<PersonIcon />}
        text={`${localization.by} : ${createdBy}`}
      />
      <FormDataLabel
        icon={<PeopleIcon />}
        text={`${localization.creationDate} : ${creationDate}`}
      />
    </Card>
  );
};

export default FormCard;
