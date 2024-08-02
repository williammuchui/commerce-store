import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import LayoutPage from "./pages/LayoutPage/LayoutPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import HomePage from "./pages/HomePage/HomePage";
import DashboardPage from "./pages/DashboardPage/DashboardPage"; 
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import AdminPage from "./pages/AdminPage/AdminPage";
import RecoverPasswordPage from "./pages/RecoverPasswordPage/RecoverPasswordPage"

export default function App() {

  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutPage />}>
            <Route index element={<HomePage />} />
            <Route path="home" element={<HomePage />} />
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="signup" element={<SignupPage />} />
            <Route path="admin" element={<AdminPage />} />
            <Route path="recover-password" element={<RecoverPasswordPage />}/>
            <Route path="*" element={<ErrorPage />}/>
          </Route>
      </Routes>
      </BrowserRouter>
    </Fragment>
  )
}