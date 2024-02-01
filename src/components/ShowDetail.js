import React, { useState, useEffect } from 'react';
import './css/ShowDetail.css';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

function ShowDetail() {
  const { id } = useParams();
  const [show, setShow] = useState(null);

  useEffect(() => {
    const fetchShowDetail = async () => {
      try {
        const response = await axios.get(`https://api.tvmaze.com/shows/${id}`);
        setShow(response.data);
      } catch (error) {
        console.error('Error fetching show detail:', error);
      }
    };

    fetchShowDetail();
  }, [id]);


  return (
    <div className="showdetail-container">
      {show ? (
        <div className='show-content'>
          <img className="show-image" src={show.image ? show.image.original : 'No Image'} alt={`${show.name} image`} />
          <div className="show-text">
            <h2>{show.name}</h2>
            <p>{show.summary}</p>
            <div className="button-container">
              <Link to={`/book-ticket/${id}`}>
                <button className="book-ticket-button">Book Ticket</button>
              </Link>
              <Link to="/">
                <button className="back-button">Go Back</button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}

    </div>
  );
}

export default ShowDetail;














