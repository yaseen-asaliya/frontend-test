import localization from "../../../localizationConfig";
import { useEffect } from "react";

export default function Dashboard() {
  useEffect(() => {
    document.title = localization.dashboardPageTitle;
  }, []);
  return (
    <>
      <div>Dashboard</div>
    </>
  );
}
