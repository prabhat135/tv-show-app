import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Card from './Card';
import './css/ShowList.css'

function ShowList() {
    const [shows, setShows] = useState([]);

    useEffect(() => {
        const fetchShows = async () => {
            try {
                const response = await axios.get('https://api.tvmaze.com/search/shows?q=all');
                setShows(response.data);
                console.log(response.data)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchShows();
    }, []);

    return (
        <div className='main'>
            <div className='heading'>
                <h1>Shows List</h1>
            </div>

            <div className="showlist-container ">
                {
                    shows.length > 0 && shows.map((data, index) => {
                        return (<Card type="show" id={data.show.id} key={data.show.id} title={data.show.name} desc={""} imgSrc={`/images/${index}.jpg`} />)

                    })
                }
            </div>
        </div>

    );
}

export default ShowList;
