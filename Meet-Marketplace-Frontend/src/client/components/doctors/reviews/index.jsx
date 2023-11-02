import React, { useEffect, useState } from "react";
import DoctorSidebar from "../sidebar";
import { IMG01 } from "./img";
import { useSelector } from "react-redux";

import { getReviews } from '../../../../api'

const Review = () => {
  const [reviews, setReviews] = useState([]);
  const mentorEmail = useSelector((state) => state.user.user.email);
  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    // try {
    //   // const response = await fetch(`http://localhost:5000/api/user/review/${mentorEmail}`);
    //   // const response = await getReviews(mentorEmail);
    //   if (response.ok) {
    //     const reviewsData = await response.json();
    //     setReviews(reviewsData);
    //   } else {
    //     throw new Error('Failed to fetch reviews');
    //   }
    // } catch (error) {
    //   console.error('Error fetching reviews:', error);
    // }

    try {
      const response = await getReviews(mentorEmail);
      console.log(response)
      if (response.status === 200) {
        const reviewsData = response.data;
        setReviews(reviewsData);
      } else {
        throw new Error('Failed to fetch reviews');
      }
    } catch (error) {
      console.error('Error fetching reviews:', error);
    }
  };

    return (
      <>
        <div className="breadcrumb-bar">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-md-12 col-12">
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="/home">Home</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Reviews
                    </li>
                  </ol>
                </nav>
                <h2 className="breadcrumb-title">Reviews</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
                <DoctorSidebar />
              </div>
              <div className="col-md-7 col-lg-8 col-xl-9">
              <div className="doc-review review-listing">
        <ul className="comments-list">
          {reviews.map((review, index) => (
            <li key={index}>
              <div className="comment">
                <img className="avatar rounded-circle" alt="User" src={IMG01} />
                <div className="comment-body">
                  <div className="meta-data">
                    <span className="comment-author">{review.menteeName}</span>
                    <div className="review-count rating">
                      {Array.from(Array(review.stars), (_, i) => (
                        <i key={i} className="fas fa-star filled"></i>
                      ))}
                      {Array.from(Array(5 - review.stars), (_, i) => (
                        <i key={i} className="fas fa-star"></i>
                      ))}
                    </div>
                  </div>
                  <p className="recommended">
                    {review.recommended
                      ? <i className="far fa-thumbs-up"></i>
                      : <i style={{ color: 'red' }} className="far fa-thumbs-down"></i>}
                    {review.recommended ? 'I recommend the mentor' : <span style={{ color: 'red' }}> Not recommended </span>}
                  </p>
                  <p className="comment-content">
                    {review.feedback}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>              </div>
            </div>
          </div>
        </div>
      </>
    );
  }


export default Review;
