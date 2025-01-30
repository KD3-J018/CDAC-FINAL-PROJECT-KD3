import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import TaskerList from "./pages/TaskerList";
import CustomerRegistration from "./pages/CustomerRegistration";
import TaskerProfile from "./pages/TaskerProfile";
import AdminPanel from "./pages/AdminPanel";
import CustomerList from "./pages/CustomerList";

import TaskerList3 from "./pages/TaskerList3";


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
        <Route path="/admin/customers" element={<CustomerList />} />
        <Route path="/admin/taskers" element={<TaskerList3 />} />

        <Route path="/taskerProfile/:taskerId" element={<TaskerProfile />} />   
        <Route path="/services/:service" element={<TaskerList />} />
        
        <Route path="/taskers/:service" element={<TaskerList />} />

        
        

      </Routes>
    </div>
  );
}

export default App;
