import { Routes, Route } from "react-router-dom";
import Signup from "./pages/Auth/Signup";
import LoginPage from "./pages/Auth/LoginPage";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./pages/Home/Home";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import Questions from "./pages/QuestionDeck/Questions";
import CreateQuestion from "./pages/CreateQuestion/CreateQuestion";
import Profile from "./pages/Profile/Profile";

function App() {
  return (
    <>
      <Routes>
        {/* Public routes */}
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<LoginPage />} />
        <Route path='/forgotPassword' element={<ForgotPassword />} />
        <Route
          path='/'
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path='/question-deck'
          element={
            <PrivateRoute>
              <Questions />
            </PrivateRoute>
          }
        />
        <Route
          path='/create-question'
          element={
            <PrivateRoute>
              <CreateQuestion />
            </PrivateRoute>
          }
        />
        <Route
          path='/profile'
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
