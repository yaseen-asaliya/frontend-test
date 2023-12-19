import { useEffect } from "react";
import localization from "../../../localizationConfig";
import BigButton from "../../components/common/navigationButtons/NavigationButton.component";

export default function ResetPassword() {
  useEffect(() => {
    document.title = localization.resetPasswordPageTitle;
  }, []);

  return (
    <>
      <div>ResetPassword</div>

      <BigButton text={localization.reset} navigateTo="/login" />
    </>
  )
}
