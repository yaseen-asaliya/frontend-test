import { useEffect } from "react";
import localization from "../../../localizationConfig";
import BigButton from "../../components/common/navigationButtons/NavigationButton.component";
import TextButton from "@/components/common/navigationButtons/TextButton.component";

export default function Login() {
  useEffect(() => {
    document.title = localization.loginPageTitle;
  }, []);

  return (
    <>
      <div>Login</div>
      <BigButton text={localization.login} navigateTo="/dashboard" load={true}/>

      <TextButton text={localization.forgetPassword} navigateTo="/forgot-password" />
    </>
  )
}
