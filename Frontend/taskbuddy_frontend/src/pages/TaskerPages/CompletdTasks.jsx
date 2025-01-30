import React from "react";

const CompletedTasks = () => {
  // Example task data
  const tasks = [
    {
      id: 1,
      name: "Plumbing Repair",
      customer: "John Doe",
      address: "123 Main St, Springfield",
      status: "Completed",
      completionDate: "2025-01-20",
    },
    {
      id: 2,
      name: "House Cleaning",
      customer: "Jane Smith",
      address: "45 Elm St, Springfield",
      status: "Completed",
      completionDate: "2025-01-22",
    },
    {
      id: 3,
      name: "Electrical Repair",
      customer: "Mike Johnson",
      address: "78 Maple Ave, Springfield",
      status: "Active",
      completionDate: null,
    },
  ];

  // Filter only completed tasks
  const completedTasks = tasks.filter((task) => task.status === "Completed");

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Completed Tasks</h2>
      <div className="card">
        <div className="card-header bg-dark text-light">
          <h5>Task List</h5>
        </div>
        <div className="card-body">
          {completedTasks.length > 0 ? (
            <ul className="list-group list-group-flush">
              {completedTasks.map((task) => (
                <li key={task.id} className="list-group-item">
                  <div className="d-flex justify-content-between">
                    <div>
                      <h5>{task.name}</h5>
                      <p className="mb-1">
                        <strong>Customer:</strong> {task.customer}
                      </p>
                      <p className="mb-1">
                        <strong>Address:</strong> {task.address}
                      </p>
                      <p className="mb-1">
                        <strong>Status:</strong> {task.status}
                      </p>
                      <p className="mb-0">
                        <strong>Completion Date:</strong> {task.completionDate}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-center">No completed tasks at the moment.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CompletedTasks;
