import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const TaskerList = () => {
  const navigate = useNavigate();

  // Example taskers data
  const taskers = [
    {
      id: 1,
      name: "John Doe",
      profileImage: "https://via.placeholder.com/100",
      category: "Electrician",
      location: "New York, NY",
      hourlyRate: "150/hr",
      rating: 4.8,
    },
    {
      id: 2,
      name: "Jane Smith",
      profileImage: "https://via.placeholder.com/100",
      category: "Plumber",
      location: "Los Angeles, CA",
      hourlyRate: "200/hr",
      rating: 4.5,
    },
    {
      id: 3,
      name: "Tom Brown",
      profileImage: "https://via.placeholder.com/100",
      category: "Painter",
      location: "Chicago, IL",
      hourlyRate: "599/hr",
      rating: 4.6,
    },
    {
      id: 4,
      name: "Lucy Green",
      profileImage: "https://via.placeholder.com/100",
      category: "Cleaner",
      location: "Houston, TX",
      hourlyRate: "399/hr",
      rating: 4.7,
    },
    {
      id: 5,
      name: "Mike Johnson",
      profileImage: "https://via.placeholder.com/100",
      category: "Gardener",
      location: "Phoenix, AZ",
      hourlyRate: "299/hr",
      rating: 4.4,
    },
    {
      id: 6,
      name: "Sophia Lee",
      profileImage: "https://via.placeholder.com/100",
      category: "Carpenter",
      location: "Philadelphia, PA",
      hourlyRate: "999/hr",
      rating: 4.9,
    },
    {
      id: 7,
      name: "Chris Wilson",
      profileImage: "https://via.placeholder.com/100",
      category: "Mechanic",
      location: "San Antonio, TX",
      hourlyRate: "899/hr",
      rating: 4.6,
    },
    {
      id: 8,
      name: "Emily Davis",
      profileImage: "https://via.placeholder.com/100",
      category: "Tutor",
      location: "San Diego, CA",
      hourlyRate: "299/hr",
      rating: 4.8,
    },
    {
      id: 9,
      name: "Daniel Moore",
      profileImage: "https://via.placeholder.com/100",
      category: "Driver",
      location: "Dallas, TX",
      hourlyRate: "399/hr",
      rating: 4.3,
    },
    {
      id: 10,
      name: "Olivia Martinez",
      profileImage: "https://via.placeholder.com/100",
      category: "Chef",
      location: "San Jose, CA",
      hourlyRate: "199/hr",
      rating: 5.0,
    },
    {
      id: 11,
      name: "Daniel Moore",
      profileImage: "https://via.placeholder.com/100",
      category: "Driver",
      location: "Dallas, TX",
      hourlyRate: "399/hr",
      rating: 4.3,
    },
    {
      id: 12,
      name: "Olivia Martinez",
      profileImage: "https://via.placeholder.com/100",
      category: "Chef",
      location: "San Jose, CA",
      hourlyRate: "199/hr",
      rating: 5.0,
    },
  ];

  return (
    <div className="bg-body-secondary">
      <Navbar />

      <div className="container my-5 ">
        <h2 className="text-center mb-4">Tasker List</h2>
        <div className="row">
          {taskers.map((tasker) => (
            <div className="col-md-6 col-lg-4 mb-4" key={tasker.id}>
              <div className="card h-100">
                <div className="card-body d-flex align-items-center">
                  <div className="me-3">
                    <img
                      src={tasker.profileImage}
                      alt={`${tasker.name} Profile`}
                      className="rounded-circle"
                      width="60"
                      height="60"
                    />
                  </div>
                  <div>
                    <h5 className="card-title mb-1">
                      {tasker.name} <span></span>
                    </h5>
                    <p className="text-muted mb-1">{tasker.category}</p>
                    <p className="mb-1">
                      <strong>Location:</strong> {tasker.location}
                    </p>
                    <p className="mb-1">
                      <strong>Rate:</strong> {tasker.hourlyRate}
                    </p>
                    <p className="mb-2">
                      <strong>Rating:</strong> ⭐ {tasker.rating}
                    </p>
                    <button
                      className="btn btn-primary btn-sm"
                      onClick={() => navigate("/taskerProfile")}
                    >
                      View Profile
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskerList;
