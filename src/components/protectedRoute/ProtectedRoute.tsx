import { Navigate, Outlet } from 'react-router-dom';
import PageNotFound from '../../pages/pageNotFound/PageNotFound.page';

export default function ProtectedRoute() {

  //if the user is not logged in
  if (false) {
    return <Navigate to='login' />;
  }
  //if (rule && userRule !== rule)
  else if (false) {
    return <PageNotFound />;
  }
  else {
    return <Outlet />;
  }
}
