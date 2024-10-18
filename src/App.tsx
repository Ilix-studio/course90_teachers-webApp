import "./App.css";
import { Routes, Route } from "react-router-dom";
import Signup from "./pages/Auth/Signup";
import LoginPage from "./pages/Auth/LoginPage";
import Logout from "./pages/General/Logout";
import ForgotPassword from "./pages/Auth/ForgotPassword";

import PrivateRoute from "./components/PrivateRoute";
import CreateQuestion from "./pages/CreateQuestion/CreateQuestion";
import Profile from "./pages/Profile/Profile";
import Admin from "./ilix";

import Layout from "./components/layout";
import Home from "./pages/Home/Home";
import MyWallet from "./pages/Transactions/MyWallet";
import Notifications from "./pages/General/Notifications";
import QuestionsDeck from "./pages/QuestionDeck/QuestionsDeck";

function App() {
  return (
    <>
      <Routes>
        {/* Public routes */}
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<LoginPage />} />
        <Route path='/forgotPassword' element={<ForgotPassword />} />

        {/* Private routes with Layout (Header + Sidebar) */}
        <Route
          path='/'
          element={
            <PrivateRoute>
              <Layout />
            </PrivateRoute>
          }
        >
          {/* Nested routes within the layout */}
          <Route index element={<Home />} />
          <Route path='/questions-deck' element={<QuestionsDeck />} />
          <Route path='/create-question' element={<CreateQuestion />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/mywallet' element={<MyWallet />} />
          <Route path='/notifications' element={<Notifications />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/verify' element={<Admin />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
