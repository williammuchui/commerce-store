import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import LayoutPage from "./pages/LayoutPage/LayoutPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import HomePage from "./pages/HomePage/HomePage";
import DashboardPage from "./pages/DashboardPage/DashboardPage"; 
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import AdminPage from "./pages/AdminPage/AdminPage";
import RecoverPasswordPage from "./pages/RecoverPasswordPage/RecoverPasswordPage"
import { ReactNode } from "react";

export default function App() {
  const isLoggedIn = localStorage.get("token")?.length > 0;

  type PrivateRouteProps = {
    children: ReactNode;
  };

  const PrivateRoute = ({ children }: PrivateRouteProps) => {
    return isLoggedIn ? children : <Navigate to="/login" />;
  } 

  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutPage />}>
            <Route index element={<HomePage />} />
            <Route path="home" element={<HomePage />} />
            <Route path="dashboard" element={<PrivateRoute><DashboardPage/></PrivateRoute>} />
            <Route path="login" element={<LoginPage />} />
            <Route path="signup" element={<SignupPage />} />
            <Route path="admin" element={<PrivateRoute><AdminPage /></PrivateRoute>} />
            <Route path="recover-password" element={<RecoverPasswordPage />}/>
            <Route path="*" element={<ErrorPage />}/>
          </Route>
      </Routes>
      </BrowserRouter>
    </Fragment>
  )
}