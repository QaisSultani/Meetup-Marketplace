import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import IMG01 from '../../../assets/images/doctor-thumb-02.jpg';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap-daterangepicker/daterangepicker.css';
import { useSelector } from "react-redux";
import { withRouter } from 'react-router-dom';

import { getWeeklyAvailability, createbooking } from "../../../../api";

const Booking = (props) => {
	// const mentorEmail = props.location.state && props.location.state.mentorEmail;
	// console.log("mentorEmail: ", mentorEmail)
	const [currentDate, setCurrentDate] = useState(new Date())
	const [startDate, setStartDate] = useState(null)
	const [endDate, setEndDate] = useState(null)
	const [weekDates, setWeekDates] = useState(null)
	const [mentorAvailability, setMentorAvailability] = useState(null)
	const [selectedBooking, setSelectedBooking] = useState(null)
	const [mentorEmail, setMentorEmail] = useState(null)

	// const menteeEmail = useSelector((state) => state.user.user.email);

	useEffect(() => {
		const mentor_email = props.location.state && props.location.state.mentorEmail;
		console.log("mentor_email: ", mentor_email)
		setMentorEmail(mentor_email)

		let start_date = new Date(currentDate)
		start_date.setDate(start_date.getDate() - start_date.getDay())
		setStartDate(start_date)

		let end_date = new Date(start_date)
		end_date.setDate(end_date.getDate() + 6)
		setEndDate(end_date)
	}, []);

	useEffect(() => {
		setWeekDates(getWeekDates(startDate, endDate))
		console.log("Qais")
		fetchAvailability()
	}, [startDate])

	const fetchAvailability = () => {
		const params = {
			startDate,
			endDate,
			mentorEmail: mentorEmail
		}
		console.log('userData---->>>>', params)
		if (startDate && endDate && mentorEmail) {
			getWeeklyAvailability({ params })
				.then((response) => {
					console.log("response: ", response)
					if (response.data) {
						console.log('Availability: ', response.data.availability)
						setMentorAvailability(response.data.availability)
					}
				})
				.catch((error) => console.log(error))
		}
	}

	const handleProceed = async () => {
		try {
			await createbooking({
				mentorEmail: 'qais.1601138@gmail.com',
				dateTime: selectedBooking,
				payment: 100,
			})
			// await axios.post('http://localhost:5000/api/bookings/new-booking', {
			// 	mentorEmail: 'qais.1601138@gmail.com',
			// 	dateTime: selectedBooking,
			// 	payment: 100,
			// });
			console.log('Booking updated successfully');
		} catch (error) {
			console.error('Error updating Booking:', error.response.data);
		}
		fetchAvailability()
		setSelectedBooking(null)
	};

	const handleWeekChange = (value) => {
		value = value === 'next' ? -7 : 7

		let start_date = new Date(startDate)
		start_date.setDate(start_date.getDate() - value)

		let end_date = new Date(start_date)
		end_date.setDate(end_date.getDate() + 6)

		setEndDate(end_date)
		setStartDate(start_date)
	}

	const handleDatePicker = (e) => {
		let start_date = new Date(e.target.value)
		start_date.setDate(start_date.getDate() - start_date.getDay())

		let end_date = new Date(start_date)
		end_date.setDate(end_date.getDate() + 6)

		setEndDate(end_date)
		setStartDate(start_date)
	}

	const handleSelectedBooking = (day, timeslot) => {
		setSelectedBooking(getTimeslotFormattedDate(day, timeslot))
	}

	const getTimeslotFormattedDate = (day, timeslot) => {
		const date = new Date(startDate)
		date.setDate(date.getDate() + day)

		let [hours, minute_format] = timeslot.split(':')
		let [minute, format] = minute_format.split(' ')
		hours = format === 'PM' ? 12 + parseInt(hours) : parseInt(hours)
		minute = parseInt(minute)

		const new_date = new Date(date)
		new_date.setHours(hours, minute, 0, 0)

		return new_date
	}

	const getWeekDates = (startDate, endDate) => {
		const week_dates = [];
		let currentDatePointer = new Date(startDate);
		while (currentDatePointer <= endDate) {
			week_dates.push(new Date(currentDatePointer));
			currentDatePointer.setDate(currentDatePointer.getDate() + 1);
		}
		return week_dates
	}

	const getDay = (date) => {
		return date.toLocaleDateString(undefined, { weekday: 'short' })
	}
	const getDate = (date) => {
		return date.toLocaleDateString(undefined, { day: '2-digit' })
	}
	const getMonth = (date) => {
		return date.toLocaleDateString(undefined, { month: 'short' })
	}
	const getYear = (date) => {
		return date.toLocaleDateString(undefined, { year: 'numeric' })
	}

	return (
		<div>
			<div className="breadcrumb-bar">
				<div className="container-fluid">
					<div className="row align-items-center">
						<div className="col-md-12 col-12">
							<nav aria-label="breadcrumb" className="page-breadcrumb">
								<ol className="breadcrumb">
									<li className="breadcrumb-item"><Link to="/home">Home</Link></li>
									<li className="breadcrumb-item active" aria-current="page">Booking</li>
								</ol>
							</nav>
							<h2 className="breadcrumb-title">Booking</h2>
						</div>
					</div>
				</div>
			</div>


			<div className="content">
				<div className="container">

					<div className="row">
						<div className="col-12">

							<div className="card">
								<div className="card-body">
									<div className="booking-doc-info">
										<Link to="/patient/doctor-profile" className="booking-doc-img">
											<img src={IMG01} alt="User" />
										</Link>
										<div className="booking-info">
											<h4><Link to="/patient/doctor-profile">Dr. Darren Elder</Link></h4>
											<div className="rating">
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star"></i>
												<span className="d-inline-block average-rating">35</span>
											</div>
											<p className="text-muted mb-0"><i className="fas fa-map-marker-alt"></i> Newyork, USA</p>
										</div>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-12 col-sm-4 col-md-6">
									<h4 className="mb-1">{currentDate.toLocaleDateString(undefined, { day: 'numeric', month: 'long', year: 'numeric' })}</h4>
									<p className="text-muted">{currentDate.toLocaleDateString(undefined, { weekday: 'long' })}</p>
								</div>
								<div className="col-12 col-sm-8 col-md-6 text-sm-right">

									<div className="datepicker-icon">
										<i className="far fa-calendar-alt mr-2"></i>
										<DateRangePicker
											initialSettings={{
												singleDatePicker: true,
												showDropdowns: true,
												autoApply: true
											}}
											onApply={(e) => handleDatePicker(e)}
										>
											<input type="text" className="form-control" />
										</DateRangePicker>
										<i className="fas fa-chevron-down ml-2"></i>
									</div>
								</div>
							</div>

							<div className="card booking-schedule schedule-widget">


								<div className="schedule-header">
									<div className="row">
										<div className="col-md-12">
											<div className="day-slot">
												<ul>
													<li className="left-arrow" onClick={() => handleWeekChange('last')}>
														<Link >
															<i className="fa fa-chevron-left"></i>
														</Link>
													</li>
													{weekDates && weekDates.map((date, index) => (
														<li key={index}>
															<span>{getDay(date)}</span>
															<span className="slot-date">{getDate(date)} {getMonth(date)} <small className="slot-year">{getYear(date)}</small></span>
														</li>
													))}
													<li className="right-arrow" onClick={() => handleWeekChange('next')}>
														<Link>
															<i className="fa fa-chevron-right"></i>
														</Link>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>

								<div className="schedule-cont">
									<div className="row">
										<div className="col-md-12">


											<div className="time-slot">
												<ul className="clearfix">
													{mentorAvailability && Object.keys(mentorAvailability).map((key, indexx) => (
														<li key={key} >
															{mentorAvailability[key].map((timeslot, index) => (
																<Link className={`${selectedBooking && (selectedBooking.getTime() === getTimeslotFormattedDate(indexx, timeslot).getTime() ? 'selected' : '')} timing`} key={index} onClick={() => handleSelectedBooking(indexx, timeslot)}>
																	<span>{timeslot}</span>
																</Link>
															))}
														</li>
													))}
												</ul>
											</div>


										</div>
									</div>
								</div>


							</div>
							<div>

							</div>
							<div className="submit-section proceed-btn text-right">
								<Link className="btn btn-primary submit-btn" onClick={() => handleProceed()}>Proceed to Pay</Link>
							</div>


						</div>
					</div>
				</div>

			</div>
		</div>
	)
}
export default Booking;