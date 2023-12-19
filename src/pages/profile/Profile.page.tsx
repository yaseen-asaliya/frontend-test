import { useEffect } from "react";
import localization from "../../../localizationConfig";

export default function Profile() {
  useEffect(() => {
    document.title = localization.profilePageTitle;
  }, []);

  return (
    <div>Profile</div>
  )
}
