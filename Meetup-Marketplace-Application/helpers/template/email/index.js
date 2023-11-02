const resetCode = 1 + Math.floor(Math.random() * 100000);

const emailTemplate = `<h1>You requested for password reset </h1><p>\
If you have requested to reset your password then use the code below to reset password for your account<br/>\
This code will expire within 1 hour.</p><br/>\
<h1>${resetCode}</h1>`;

const acceptBookingTemplate = ({ user, date }) => `<p> </p>Dear ${user}<br/>\
<p>We are pleased to inform you that your booking request has been accepted for ${date}. We look forward to serving you and ensuring a delightful experience.</p><br/>\
<br/>\
<p>Regards</p>\
<p><strong>Meetup Marketplace</strong></p>`;

const rejectBookingTemplate = ({ user, date }) => `<p> </p>Dear ${user}<br/>\
<p>We regret to inform you that we are unable to proceed with your booking request for at this time for ${date}. We apologize for any inconvenience caused and appreciate your understanding.</p><br/>\
<br/>\
<p>Regards</p>\
<p><strong>Meetup Marketplace</strong></p>`;

const acceptMentorTemplate = ({ user }) => `<p> </p>Dear ${user}<br/>\
<p>We are pleased to inform you that your request for the mentor account has been approved by the admin. <br/>\
If you've signed up with google, your current email will be your password. Go to your profile settings in order to change the password.</p><br/>\
<br/>\
<p>Regards</p>\
<p><strong>Meetup Marketplace</strong></p>`;

const rejectMentorTemplate = ({ user }) => `<p> </p>Dear ${user}<br/>\
<p>We regret to inform you that your request for the mentor account has been declined by the admin. We apologize for any inconvenience caused and appreciate your understanding.</p><br/>\
<br/>\
<p>Regards</p>\
<p><strong>Meetup Marketplace</strong></p>`;

module.exports = {
  emailTemplate,
  resetCode,
  acceptBookingTemplate,
  rejectBookingTemplate,
  acceptMentorTemplate,
  rejectMentorTemplate,
};
