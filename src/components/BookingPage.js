// Import necessary dependencies from React and React Router
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './css/BookingPage.css';

function BookingPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [show, setShow] = useState(null);
  const [formData, setFormData] = useState({
    movieName: '',
    name: '',
    contact: '',
  });

  useEffect(() => {
    const fetchShowDetail = async () => {
      try {
        const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
        const showData = await response.json();
        setShow(showData);

        setFormData({
          movieName: showData.name,
          name: userDetails?.name || '',
          contact: userDetails?.contact || '',
        });
      } catch (error) {
        console.error('Error fetching show detail:', error);
      }
    };

    const userDetails = JSON.parse(localStorage.getItem('userDetails'));

    fetchShowDetail();
  }, [id]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Store user details in local storage
    localStorage.setItem('userDetails', JSON.stringify(formData));

    // Navigate to a confirmation page (you can replace this with your logic)
    navigate(`/confirmation/${id}`);
  };

  return (
    <div className="booking-container">
      {show ? (
        <div>
          <h1 className='booking-heading'>Booking Page</h1>
          <div className="form-container">
            <label className="form-label" htmlFor="movieName">
              Movie Name
            </label>
            <input
              className="form-input"
              type="text"
              id="movieName"
              name="movieName"
              value={formData.movieName}
              readOnly
            />

            <label className="form-label" htmlFor="name">
              Name
            </label>
            <input
              className="form-input"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />

            <label className="form-label" htmlFor="contact">
              Contact Detail
            </label>
            <input
              className="form-input"
              type="text"
              id="contact"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
            />

            <button className="form-button" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default BookingPage;
