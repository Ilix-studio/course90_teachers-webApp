import { Routes, Route } from "react-router-dom";
import Signup from "./pages/Auth/Signup";
import LoginPage from "./pages/Auth/LoginPage";
import PrivateRoute from "./components/PrivateRoute";

import ForgotPassword from "./pages/Auth/ForgotPassword";
import Questions from "./pages/QuestionDeck/Questions";
import CreateQuestion from "./pages/CreateQuestion/CreateQuestion";
import Profile from "./pages/Profile/Profile";
import Admin from "./ilix";
import "./App.css";
import Layout from "./components/layout";
import Home from "./pages/Home/Home";
import MyWallet from "./pages/Transactions/MyWallet";
import Notifications from "./pages/General/Notifications";
import Logout from "./pages/General/Logout";

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
          <Route path='/questions-deck' element={<Questions />} />
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
