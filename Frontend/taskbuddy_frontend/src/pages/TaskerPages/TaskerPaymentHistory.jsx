import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// Utility function to filter payments based on date range
const filterPayments = (payments, range) => {
  const today = new Date();
  let filteredPayments = [];

  switch (range) {
    case 'last-week':
      const lastWeek = new Date(today.setDate(today.getDate() - 7));
      filteredPayments = payments.filter(payment => new Date(payment.paymentDate) >= lastWeek);
      break;
    case 'last-month':
      const lastMonth = new Date(today.setMonth(today.getMonth() - 1));
      filteredPayments = payments.filter(payment => new Date(payment.paymentDate) >= lastMonth);
      break;
    case 'last-3-months':
      const last3Months = new Date(today.setMonth(today.getMonth() - 3));
      filteredPayments = payments.filter(payment => new Date(payment.paymentDate) >= last3Months);
      break;
    case 'this-year':
      const startOfYear = new Date(today.getFullYear(), 0, 1);
      filteredPayments = payments.filter(payment => new Date(payment.paymentDate) >= startOfYear);
      break;
    default:
      filteredPayments = payments; // All payments if no filter is selected
  }

  return filteredPayments;
};

const TaskerViewPaymentHistory = () => {
  const [paymentHistory, setPaymentHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterRange, setFilterRange] = useState('all-time');

  // Hardcoded payment data (replace this with data from backend)
  const hardcodedPaymentData = [
    {
      id: 1,
      customerName: 'John Doe',
      paymentAmount: 50,
      paymentDate: '2025-01-15',
      status: 'Completed',
    },
    {
      id: 2,
      customerName: 'Jane Smith',
      paymentAmount: 75,
      paymentDate: '2025-01-10',
      status: 'Pending',
    },
    {
      id: 3,
      customerName: 'Michael Johnson',
      paymentAmount: 100,
      paymentDate: '2025-01-05',
      status: 'Completed',
    },
    {
      id: 4,
      customerName: 'Sarah Lee',
      paymentAmount: 200,
      paymentDate: '2024-12-20',
      status: 'Completed',
    },
  ];

  useEffect(() => {
    // Simulate fetching data from backend
    setTimeout(() => {
      setPaymentHistory(hardcodedPaymentData);
      setLoading(false);
    }, 1000);

    // Uncomment below for actual axios call when backend is ready
    // axios.get('/api/tasker/payment-history')
    //   .then((response) => {
    //     setPaymentHistory(response.data);
    //     setLoading(false);
    //   })
    //   .catch((error) => {
    //     console.error('Error fetching payment history:', error);
    //     setLoading(false);
    //   });
  }, []);

  // Filter payments based on the selected range
  const filteredPayments = filterPayments(paymentHistory, filterRange);

  if (loading) {
    return (
      <div className="container mt-4 d-flex justify-content-center">
        <div className="col-md-6 p-4 border rounded shadow bg-white">
          <h2 className="text-center">Payment History</h2>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-4 d-flex justify-content-center">
      <div className="col-md-8 p-4 border rounded shadow bg-white">
        <h2 className="text-center">Payment History</h2>

        {/* Filter Options */}
        <div className="mb-4">
          <label htmlFor="filterRange" className="form-label">
            Filter by Time Range:
          </label>
          <select
            id="filterRange"
            className="form-select"
            value={filterRange}
            onChange={(e) => setFilterRange(e.target.value)}
          >
            <option value="all-time">All Time</option>
            <option value="last-week">Last Week</option>
            <option value="last-month">Last Month</option>
            <option value="last-3-months">Last 3 Months</option>
            <option value="this-year">This Year</option>
          </select>
        </div>

        {/* Payment History Table */}
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Customer Name</th>
              <th>Payment Amount ($)</th>
              <th>Payment Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredPayments.length > 0 ? (
              filteredPayments.map((payment) => (
                <tr key={payment.id}>
                  <td>{payment.customerName}</td>
                  <td>{payment.paymentAmount}</td>
                  <td>{payment.paymentDate}</td>
                  <td>{payment.status}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center">
                  No payments found for the selected range.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TaskerViewPaymentHistory;
