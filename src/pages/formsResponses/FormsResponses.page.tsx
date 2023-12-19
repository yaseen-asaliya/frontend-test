import { useEffect } from "react";
import localization from "../../../localizationConfig";

export default function FormsResponses() {
  useEffect(() => {
    document.title = localization.formResponsesPageTitle;
  }, []);
  
  return (
    <div>FormsResponses</div>
  )
}
