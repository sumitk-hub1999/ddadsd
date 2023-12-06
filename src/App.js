import logo from "./logo.svg";
import "./App.css";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import AuthDetails from "./components/AuthDetails";
import Home from "./components/Home";
import {
  BrowserRouter,
  Routes,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      {/* <div className="App"> */}
      {/* <SignIn />
      <SignUp />
      <AuthDetails /> */}
      {/* </div> */}

      {/* <Switch></Switch> */}
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
