import React from "react";
import { useNavigate } from "react-router-dom";
import CustomerList from './CustomerList'; 
import { Link } from 'react-router-dom';
import TaskerList3 from "./TaskerList3";


const AdminPanel = () => {
  const navigate = useNavigate();

  return (
    <div className="container mt-5">
      <h1 className="mb-4 text-center"> Admin Panel</h1>

      {/* Admin Dashboard Overview */}
      <div className="row mb-4">
        <div className="col-md-3">
          <div className="card text-center bg-info text-light">
            <div className="card-body">
              <h5 className="card-title">Total Users</h5>
              <p className="card-text fs-4">1,245</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-center bg-success text-light">
            <div className="card-body">
              <h5 className="card-title">Total Taskers</h5>
              <p className="card-text fs-4">345</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-center bg-warning text-dark">
            <div className="card-body">
              <h5 className="card-title">Active Tasks</h5>
              <p className="card-text fs-4">78</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-center bg-danger text-light">
            <div className="card-body">
              <h5 className="card-title">Pending Payments</h5>
              <p className="card-text fs-4">$12,435</p>
            </div>
          </div>
        </div>
      </div>

      {/* User Management Section */}
      <div className="card mb-4">
        <div className="card-header bg-dark text-light">
          <h5>User Management</h5>
        </div>
        <div className="card-body">
          <p>View and manage registered users and taskers:</p>
          <ul>
            <li>
            {/* <Link
                to="/admin/customers"
                className="text-decoration-none text-primary"
              >
                View Customers
              </Link> */}
              <a
                href=""
                onClick={() => navigate("/admin/customers")}
                className="text-decoration-none text-primary"
              >
                View Customers
              </a>



            </li>
            <li>
              {/* <a
                href=""
                onClick={() => navigate("/taskers")}
                className="text-decoration-none text-primary"
              >
                View Taskers
              </a> */}

              <a
                href=""
                onClick={() => navigate("/admin/taskers")}
                className="text-decoration-none text-primary"
              >
                View Taskers
              </a>



            </li>
            <li>
              <a
                // href="/admin/add-user"

                className="text-decoration-none text-primary"
              >
                Add New User
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Task Management Section */}
      <div className="card mb-4">
        <div className="card-header bg-dark text-light">
          <h5>Task Management</h5>
        </div>
        <div className="card-body">
          <p>Manage ongoing and completed tasks:</p>
          <ul>
            <li>
              <a
                href="/admin/active-tasks"
                className="text-decoration-none text-primary"
              >
                View Active Tasks
              </a>
            </li>
            <li>
              <a
                href="/admin/completed-tasks"
                className="text-decoration-none text-primary"
              >
                View Completed Tasks
              </a>
            </li>
            <li>
              <a
                href="/admin/task-reports"
                className="text-decoration-none text-primary"
              >
                Generate Task Reports
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Payment Management Section */}
      <div className="card mb-4">
        <div className="card-header bg-dark text-light">
          <h5>Payment Management</h5>
        </div>
        <div className="card-body">
          <p>Manage payments and track transactions:</p>
          <ul>
            <li>
              <a
                href="/admin/pending-payments"
                className="text-decoration-none text-primary"
              >
                View Pending Payments
              </a>
            </li>
            <li>
              <a
                href="/admin/transactions"
                className="text-decoration-none text-primary"
              >
                View All Transactions
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Feedback & Analytics Section */}
      <div className="card mb-4">
        <div className="card-header bg-dark text-light">
          <h5>Feedback & Analytics</h5>
        </div>
        <div className="card-body">
          <p>Monitor user feedback and site analytics:</p>
          <ul>
            <li>
              <a
                href="/admin/feedback"
                className="text-decoration-none text-primary"
              >
                View User Feedback
              </a>
            </li>
            <li>
              <a
                href="/admin/analytics"
                className="text-decoration-none text-primary"
              >
                View Site Analytics
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
