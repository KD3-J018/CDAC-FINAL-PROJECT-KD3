import React from "react";
import Navbar from "../Navbar";

const ActiveTasks = () => {
  // Sample active tasks data (replace with API data or props)
  const activeTasks = [
    {
      id: 1,
      name: "Plumbing Repair",
      customer: "John Doe",
      address: "123 Main St, Springfield",
      status: "In Progress",
      startDate: "2025-01-25",
    },
  ];

  return (
    <div className=" ">
      <div className="">
        <Navbar></Navbar>
      </div>
      <div className="container mt-4">
        <h2 className="text-center mb-4">Active Tasks</h2>
        <div className="card">
          <div className="card-header bg-dark text-light">
            <h5>Task List</h5>
          </div>
          <div className="card-body">
            {activeTasks.length > 0 ? (
              <ul className="list-group">
                {activeTasks.map((task) => (
                  <li
                    key={task.id}
                    className="list-group-item d-flex justify-content-between align-items-center"
                  >
                    <div>
                      <h5>{task.name}</h5>
                      <p className="mb-1">
                        <strong>Customer:</strong> {task.customer}
                      </p>
                      <p className="mb-1">
                        <strong>Address:</strong> {task.address}
                      </p>
                      <p className="mb-0">
                        <strong>Status:</strong> {task.status}
                      </p>
                      <p className="mb-0">
                        <strong>Start Date:</strong> {task.startDate}
                      </p>
                    </div>
                    <div className="d-flex gap-2">
                      <button className="btn btn-success btn-sm">
                        Mark as Completed
                      </button>
                      <button className="btn btn-primary btn-sm">
                        View Details
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No active tasks at the moment.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActiveTasks;
