import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import TaskerList from "./pages/TaskerList";
import CustomerRegistration from "./pages/CustomerRegistration";
import TaskerProfile from "./pages/TaskerProfile";
import AdminPanel from "./pages/AdminPanel";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/taskers" element={<TaskerList />}></Route>
        <Route
          path="/CustomerRegister"
          element={<CustomerRegistration />}
        ></Route>
        <Route path="/CustomerRegistration" element={<TaskerList />}></Route>
        <Route path="/taskerProfile" element={<TaskerProfile />}></Route>
        <Route path="/adminPanel" element={<AdminPanel />}></Route>
      </Routes>
    </div>
  );
}

export default App;
