import { useEffect } from "react";
import localization from "../../../localizationConfig";
import BigButton from "../../components/common/navigationButtons/NavigationButton.component";
import BackButton from "../../components/common/navigationButtons/BackButton.component";

export default function ForgetPassword() {
  useEffect(() => {
    document.title = localization.forgetPasswordPageTitle;
  }, []);

  return (
    <>
      <div>ForgetPassword</div>

      <BigButton text={localization.send} navigateTo="/email-verification" />

      <BackButton />
    </>
  )
}
