import { Routes, Route } from "react-router-dom";
import Signup from "./pages/AuthPages/Signup";
import LoginPage from "./pages/AuthPages/LoginPage";

function App() {
  return (
    <>
      <Routes>
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
