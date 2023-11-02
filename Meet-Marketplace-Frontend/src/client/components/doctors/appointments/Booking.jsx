import React, { useState } from "react"
import { Link } from 'react-router-dom';
import {
    formatDate,
    formatTime,
} from "../../../../helpers/customFunctions";
import { IMG01 } from './img'
import ViewBookingModal from "../dashboard/users/modal/view";
import BookingActionModal from "../dashboard/users/modal/changeStatus";
const Booking = ({ booking, check, setCheck }) => {
    const { userDetails, dateTime, payment, statusValue, userEmail } = booking

    const [openModal, setOpen] = useState(false)
    const [show, setShow] = useState("");
    const [current, setCurrent] = useState({});


    const handleShow = ({ action, email, dateTime, record }) => {
        setShow(action);
        setCurrent({ email, dateTime });
    };

    console.log('Booking: ', userDetails)
    return (
        <>
            <div className="appointment-list">
                <div className="profile-info-widget">
                    <Link to="/doctor/patient-profile" className="booking-doc-img">
                        {userDetails.profileImage ?
                            <img src={userDetails.profileImage} alt="User" /> :
                            <img src={IMG01} alt="User" />}
                    </Link>
                    <div className="profile-det-info">
                        <h3><Link to="/doctor/patient-profile">{userDetails.name}</Link></h3>
                        <div className="patient-details">
                            <h5><i className="far fa-clock"></i> {formatDate(dateTime) + " " + formatTime(dateTime)}</h5>
                            <h5><i className="fas fa-map-marker-alt"></i> {userDetails.location}</h5>
                            <h5><i className="fas fa-envelope"></i> {userDetails.email}</h5>
                            <h5 className="mb-0"><i className="fas fa-phone"></i> {userDetails.contact}</h5>
                        </div>
                    </div>
                </div>
                <div className="appointment-action">
                    <Link to="#0" className="btn btn-sm bg-info-light" onClick={() => setOpen(!openModal)}>
                        <i className="far fa-eye"></i> View
                    </Link>
                    {
                        statusValue === 'pending' ?
                            (<>
                                <button
                                    className="btn btn-sm bg-success-light"
                                    onClick={() =>
                                        handleShow({
                                            action: "Accept",
                                            email: userEmail,
                                            dateTime,
                                            booking,
                                        })
                                    }
                                >
                                    <i className="fas fa-check"></i> Accept
                                </button>

                                <button
                                    className="btn btn-sm bg-danger-light"
                                    onClick={() =>
                                        handleShow({
                                            action: "Reject",
                                            email: userEmail,
                                            dateTime,
                                        })
                                    }
                                >
                                    <i className="fas fa-times"></i> Reject
                                </button>
                            </>) : (
                                <button disabled className="btn btn-sm">
                                    <i className="fa fa-check-square"></i> approved
                                </button>
                            )
                    }
                </div>
            </div>
            <ViewBookingModal
                open={openModal}
                setOpen={setOpen}
                booking={booking}
            />

            <BookingActionModal
                show={show}
                setShow={setShow}
                current={current}
                setOpen={setOpen}
                check={check}
                setCheck={setCheck}
            />
        </>
    )
}
export default Booking