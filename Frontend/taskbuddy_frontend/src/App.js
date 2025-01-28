import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import TaskerList from "./pages/TaskerList";
import CustomerRegistration from "./pages/CustomerRegistration";
import TaskerProfile from "./pages/TaskerProfile";
import AdminPanel from "./pages/AdminPages/AdminPanel";
import ActiveTasksList from "./pages/AdminPages/ActiveTasksList";
import CompletedTasks from "./pages/AdminPages/CompletedTasks";
import CategoryForm from "./pages/AdminPages/CategoryForm";

function App() {
  return (
    <div className="">
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
        <Route path="/admin/taskersList" element={<ActiveTasksList />}></Route>
        <Route path="/taskerProfile/:id" element={<TaskerProfile />}></Route>
        <Route path="/admin/completedTask" element={<CompletedTasks />}></Route>
        <Route path="/admin/categoryForm" element={<CategoryForm />}></Route>
      </Routes>
    </div>
  );
}

export default App;
