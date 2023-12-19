import { useEffect } from "react";
import localization from "../../../localizationConfig";

export default function TemplatesBrowser() {
  useEffect(() => {
    document.title = localization.templatesBrowserPageTitle;
  }, []);

  return (
    <div>TemplatesBrowser</div>
  )
}
