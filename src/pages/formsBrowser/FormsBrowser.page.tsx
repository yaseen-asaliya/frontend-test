import { useEffect } from "react";
import localization from "../../../localizationConfig";
import FormCard from "@/components/browsersCard/FormCard.component";

export default function FormsBrowser() {
  useEffect(() => {
    document.title = localization.formBrowserPageTitle;
  }, []);

  return (
    <>
        <div>FromsBrowser</div>
        <FormCard createdBy={"عمر"} title={"حضور و غياب"} creationDate={"12/12/2023"} />
    </>
  )
}
