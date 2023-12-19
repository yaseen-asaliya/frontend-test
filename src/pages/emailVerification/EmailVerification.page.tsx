import { useEffect } from "react";
import localization from "../../../localizationConfig";
import BigButton from "../../components/common/navigationButtons/NavigationButton.component";
import BackButton from "../../components/common/navigationButtons/BackButton.component";

export default function EmailVerification() {
  useEffect(() => {
    document.title = localization.emailVerificationPageTitle;
  }, []);

  return (
    <>
      <div>EmailVerification</div>

      <BigButton text={localization.confirm} navigateTo="/reset-password" />

      <BackButton />
    </>
  )
}
