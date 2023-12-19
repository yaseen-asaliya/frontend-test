import { useEffect } from "react";
import localization from "../../../localizationConfig";

export default function UserManagment() {
  useEffect(() => {
    document.title = localization.usersManagmentPageTitle;
  }, []);

  return (
    <div>UserManagment</div>
  )
}
