import React, { useState } from "react";
// import axios from "axios";

const TaskerReviews = () => {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      customerName: "John Doe",
      shortReview: "Excellent service, highly recommend!",
      fullReview: "I hired this tasker for sofa cleaning, and they did an amazing job. The sofa looks as good as new. The tasker was polite, efficient, and professional. Highly recommend them!",
      rating: 5,
      date: "2025-01-28",
      expanded: false,
    },
    {
      id: 2,
      customerName: "Jane Smith",
      shortReview: "Great work, but took longer than expected.",
      fullReview: "The tasker was good at electrical repairs, but the job took longer than expected. They could have communicated better regarding the time frame. However, the work done was satisfactory.",
      rating: 4,
      date: "2025-01-22",
      expanded: false,
    },
    {
      id: 3,
      customerName: "David Lee",
      shortReview: "Good service, but slightly overpriced.",
      fullReview: "The carpentry work was decent, but I feel it was a bit overpriced for the work done. The tasker was friendly and professional though. Would consider hiring again.",
      rating: 3,
      date: "2025-01-18",
      expanded: false,
    },
  ]);
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Axios call placeholder (provision for actual backend)
  const fetchReviews = async () => {
    try {
      setLoading(true);
      // Replace the following line with the actual axios request once the backend is available
      // const response = await axios.get("/api/reviews/taskerId"); 
      // setReviews(response.data);

      // Temporarily setting hardcoded data
      setLoading(false);
    } catch (err) {
      setError("Error fetching reviews");
      setLoading(false);
    }
  };

  const toggleReviewExpansion = (id) => {
    setReviews(reviews.map((review) =>
      review.id === id ? { ...review, expanded: !review.expanded } : review
    ));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }

  return (
    <div className="container mt-4">
      <h2>Tasker Ratings and Reviews</h2>

      {reviews.length === 0 ? (
        <p>No reviews yet. Be the first to rate!</p>
      ) : (
        reviews.map((review) => (
          <div key={review.id} className="review-card mb-3 p-3 border rounded">
            <h5>{review.customerName}</h5>
            <p>{review.shortReview}</p>
            <div className="d-flex align-items-center">
              <span>Rating: </span>
              <div className="stars ml-2">
                {Array(review.rating)
                  .fill("★")
                  .map((star, index) => (
                    <span key={index} style={{ color: "gold" }}>
                      {star}
                    </span>
                  ))}
              </div>
            </div>
            <p className="text-muted">Reviewed on: {review.date}</p>

            {/* Expand Button */}
            <button
              className="btn btn-link"
              onClick={() => toggleReviewExpansion(review.id)}
            >
              {review.expanded ? "Collapse" : "Expand"}
            </button>

            {/* Full Review */}
            {review.expanded && <p className="mt-2">{review.fullReview}</p>}
          </div>
        ))
      )}
    </div>
  );
};

export default TaskerReviews;
