import React, { useState } from 'react';
import './index.css'

import { createReview } from '../../../../api'

const reviewMentor = () => {
  // const [userName, setUserName] = useState('');
  const [stars, setStars] = useState(1);
  const [recommended, setRecommended] = useState('false');
  const [feedback, setFeedback] = useState('');
  
  const mentorEmail = "abdullah.khan@devsinc.com"

  
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/user/review', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          mentorEmail,
          menteeName: 'test123',
          stars,
          recommended: recommended, // Assuming always recommended for now
          feedback,
        }),
      });

      if (response.ok) {
        // Review created successfully
        alert('Review created successfully');
        // Reset form fields
        // setMentorEmail('');
        // setUserName('');
        setStars(1);
        setFeedback('');
        setRecommended(false);
      } else {
        // Error creating review
        const errorData = await response.json();
        throw new Error(errorData.error);
      }
    } catch (error) {
      console.error('Error creating review:', error);
      alert('An error occurred while creating the review');
    }

    // try {
    //   // const response = await axios.post('http://localhost:5000/api/user/review', {
    //   //   mentorEmail,
    //   //   menteeName: 'test123',
    //   //   stars,
    //   //   recommended: recommended, // Assuming always recommended for now
    //   //   feedback,
    //   // }, {
    //   //   headers: {
    //   //     'Content-Type': 'application/json',
    //   //   },
    //   // });
    //   const response = await createReview({
    //     mentorEmail,
    //     menteeName: 'test123',
    //     stars,
    //     recommended: recommended, // Assuming always recommended for now
    //     feedback,
    //   })

    //   if (response.status === 200) {
    //     // Review created successfully
    //     alert('Review created successfully');
    //     // Reset form fields
    //     // setMentorEmail('');
    //     // setUserName('');
    //     setStars(1);
    //     setFeedback('');
    //     setRecommended(false);
    //   } else {
    //     // Error creating review
    //     throw new Error(response.data.error);
    //   }
    // } catch (error) {
    //   console.error('Error creating review:', error);
    //   alert('An error occurred while creating the review');
    // }

  };



  return (

    <div>
      <button type="button" className="btn btn-info btn-lg openmodal" data-toggle="modal" data-target="#myModal">
        Open Modal
      </button>

      <div id="myModal" className="modal fade" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h3>Feedback Request</h3>
              <button type="button" className="close" data-dismiss="modal" style={{ color: 'white' }}>
                &times;
              </button>
            </div>

            <div className="modal-body text-center">
              <i className="far fa-file-alt fa-4x mb-3 animated rotateIn icon1"></i>
              <h3>Your opinion matters</h3>
              <h5>
                Help us improve <strong>Give us your feedback.</strong>
              </h5>
              <h6>Your Rating</h6>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="form-check mb-4">
                <input
                  type="radio"
                  name="feedback"
                  checked={stars === 1}
                  onChange={() => setStars(1)}
                />
                <label className="ml-3">1 star</label>
              </div>
              <div className="form-check mb-4">
                <input
                  type="radio"
                  name="feedback"
                  checked={stars === 2}
                  onChange={() => setStars(2)}
                />
                <label className="ml-3">2 Stars</label>
              </div>
              <div className="form-check mb-4">
                <input
                  type="radio"
                  name="feedback"
                  checked={stars === 3}
                  onChange={() => setStars(3)}
                />
                <label className="ml-3">3 Stars</label>
              </div>
              <div className="form-check mb-4">
                <input
                  type="radio"
                  name="feedback"
                  checked={stars === 4}
                  onChange={() => setStars(4)}
                />
                <label className="ml-3">4 Stars</label>
              </div>
              <div className="form-check mb-4">
                <input
                  type="radio"
                  name="feedback"
                  checked={stars === 5}
                  onChange={() => setStars(5)}
                />
                <label className="ml-3">5 Stars</label>
              </div>

              <div className="text-center">
                <h4>What could we improve?</h4>
              </div>
              <textarea
                type="textarea"
                placeholder="Your Message"
                rows="3"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
              ></textarea>

              <div className="form-check mb-4">
                <input
                  type="checkbox"
                  name="recommended"
                  checked={recommended}
                  onChange={() => setRecommended(!recommended)}
                />
                <label className="ml-3">Recommend mentor</label>
              </div>

              <div className="modal-footer">
                <button type="submit" className="btn btn-primary">
                  Send <i className="fa fa-paper-plane"></i>
                </button>
                <button type="button" className="btn btn-outline-primary" data-dismiss="modal">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default reviewMentor

