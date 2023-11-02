import moment from "moment";

export const percentage = (number, percent) => (number * percent) / 100;

export const formatDate = (date) => {
  return moment(date).format("DD MMM YYYY");
};

export const formatTime = (date) => {
  return moment(date).format("hh:mm A");
};
