import "./App.css";
import { Route, Routes} from "react-router-dom";
import loadable from "@loadable/component";
import Sidebar from "./components/bars/Sidebar.component.tsx";
import ProtectedRoute from './components/protectedRoute/ProtectedRoute.tsx'
import { useSelector } from "react-redux";
import { RootState } from "./redux/store.ts";


const CompleteTheProfile = loadable(() => import('./pages/completeTheProfile/CompleteTheProfile.page.tsx'));
const Dashboard = loadable(() => import('./pages/dashboard/Dashboard.page.tsx'));
const EmailVerification = loadable(() => import('./pages/emailVerification/EmailVerification.page.tsx'));
const ForgotPassword = loadable(() => import('./pages/forgotPassword/ForgotPassword.page.tsx'));
const FormsBrowser = loadable(() => import('./pages/formsBrowser/FormsBrowser.page.tsx'));
const FormsResponses = loadable(() => import('./pages/formsResponses/FormsResponses.page.tsx'));
const Login = loadable(() => import('./pages/login/Login.page'));
const Profile = loadable(() => import('./pages/profile/Profile.page.tsx'));
const ResetPassword = loadable(() => import('./pages/resetPassword/ResetPassword.page.tsx'));
const TemplatesBrowser = loadable(() => import('./pages/templateBrowser/TemplatesBrowser.page.tsx'));
const UsersManagment = loadable(() => import('./pages/usersManagment/UsersManagment.page.tsx'));
const PageNotFound = loadable(() => import('./pages/pageNotFound/PageNotFound.page.tsx'));


function App() {
  const sidebarRoutes = ["/dashboard", "/forms-browser", "/form-responses", "/profile", "/templates-browser", "/users-managment"];
  const isSidebarVisible = sidebarRoutes.includes(window.location.pathname);
  const openSidebar = useSelector((state: RootState ) => state.open.open);

  return (
    <div className={`pageContainer ${isSidebarVisible ? "pageContainerVisiblesidebar" : ""} ${isSidebarVisible && openSidebar ? "pageContainerOpenSidebar" : ""}`}>
       {isSidebarVisible && <Sidebar />}
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/reset-password" element={<ResetPassword />}></Route>
            <Route path="/email-verification" element={<EmailVerification />}></Route>
            <Route path="/forgot-password" element={<ForgotPassword />}></Route>
            <Route path="/complete-the-profile" element={<CompleteTheProfile />} ></Route>
            <Route path="*" element={<PageNotFound />}></Route>
            <Route element={<ProtectedRoute />}>
              <Route path="/dashboard" element={<Dashboard />}></Route>
            </Route>
            <Route element={<ProtectedRoute />}>
              <Route path="/forms-browser" element={<FormsBrowser />}></Route>
            </Route>
            <Route element={<ProtectedRoute />}>
              <Route path="/form-responses" element={<FormsResponses />} ></Route>
            </Route>
            <Route element={<ProtectedRoute />}>
              <Route path="/profile" element={<Profile />}></Route>
            </Route>
            <Route element={<ProtectedRoute />}>
              <Route path="/templates-browser" element={<TemplatesBrowser />} ></Route>
            </Route>
            <Route element={<ProtectedRoute />}>
              <Route path="/users-managment" element={<UsersManagment />} ></Route>
            </Route>
          </Routes>
    </div>  );
}

export default App;
