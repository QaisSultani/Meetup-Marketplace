import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchList from './searchList';

const SearchDoctor = () => {
  const [mentors, setMentors] = useState([]);

  useEffect(() => {
    const fetchMentors = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/user/users/AllMentors');
        setMentors(response.data);
      } catch (error) {
        console.error('Failed to retrieve mentors:', error);
      }
    };

    fetchMentors();
  }, []);

  return (
    <div>
      <div className="breadcrumb-bar">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-8 col-12">
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="/home">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Search
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 col-lg-8 col-xl-9">
              <SearchList mentors={mentors} />
              <div className="load-more text-center">
                <a href="#0" className="btn btn-primary btn-sm">
                  Load More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchDoctor;
