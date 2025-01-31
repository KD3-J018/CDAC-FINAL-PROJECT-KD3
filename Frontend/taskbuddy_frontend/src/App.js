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
import CustomerList from "./pages/AdminPages/CustomerList";
import TaskerListHorizontal from "./pages/AdminPages/TaskerListHorizontal";
import TaskerPanel from "./pages/TaskerPages/TaskerPanel";
import ActiveTasks from "./pages/TaskerPages/ActiveTasks";
import TaskerRegistration from "./pages/TaskerPages/TaskerRegistration" ; 
import TaskerEditProfile from "./pages/TaskerPages/TaskerEditProfile" ; 
import TaskerViewRating from "./pages/TaskerPages/TaskerViewRating" ; 
import TaskerPaymentHistory from "./pages/TaskerPages/TaskerPaymentHistory" ; 
import CustomerPanel from "./pages/CustomerPages/CustomerPanel" ; 
import CustomerEditProfile from "./pages/CustomerPages/CustomerEditProfile" ; 

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        {/* <Route path="/taskers" element={<TaskerList />}></Route> */}
        <Route
          path="/CustomerRegister"
          element={<CustomerRegistration />}
        ></Route>
        <Route path="/CustomerRegister" element={<TaskerList />}></Route>
        <Route path="/taskerProfile" element={<TaskerProfile />}></Route>
        <Route path="/adminPanel" element={<AdminPanel />}></Route>
        <Route path="/admin/taskersList" element={<ActiveTasksList />}></Route>
        <Route path="/taskerProfile/:id" element={<TaskerProfile />}></Route>
        <Route path="/admin/completedTask" element={<CompletedTasks />}></Route>
        <Route path="/admin/categoryForm" element={<CategoryForm />}></Route>
        <Route path="/admin/viewCutomer" element={<CustomerList />}></Route>
        <Route
          path="/admin/takserListHori"
          element={<TaskerListHorizontal />}
        ></Route>

        <Route path="/taskerProfile/:taskerId" element={<TaskerProfile />} />
        <Route path="/services/:service" element={<TaskerList />} />
        <Route path="/taskerPanel" element={<TaskerPanel />}></Route>
        <Route path="/tasker/activeTasks" element={<ActiveTasks />}></Route>
        <Route
          path="/tasker/completedTasks"
          element={<CompletedTasks />}
        ></Route>
        <Route path="/taskers/:service" element={<TaskerList />} />
        <Route path="/tasker/Registration" element={<TaskerRegistration />}></Route>
        <Route path="/tasker/editProfile" element={<TaskerEditProfile />}></Route>
        <Route path="/tasker/viewRatings" element={<TaskerViewRating/>}></Route>
        <Route path="/tasker/paymentHistory" element={<TaskerPaymentHistory/>}></Route>
        <Route path="/Customer/CustomerPanel" element={<CustomerPanel/>} ></Route>
        <Route path="/Customer/CustomerEditProfile" element={<CustomerEditProfile/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
