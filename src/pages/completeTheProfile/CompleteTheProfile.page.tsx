import { useEffect } from "react";
import localization from "../../../localizationConfig";
import BigButton from "../../components/common/navigationButtons/NavigationButton.component";

export default function CompleteTheProfile() {
  useEffect(() => {
    document.title = localization.completeYourProfilePageTitle;
  }, []);

  return (
    <BigButton text={localization.register} navigateTo="/login" />
  )
}
