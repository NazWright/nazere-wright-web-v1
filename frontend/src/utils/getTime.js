/**
 * @function getTime
 * Retrieves the time from a Date Object.
 * @param {Date} date - the Date object to parse the time from.
 * @returns {String} time - the time.
 */
export const getTime = (date) => {
  let currentDate = new Date();
  // hour is a number from 0 - 23, ex 16 returns
  let standardHour = parseInt(currentDate.getHours()) % 12;
  let newtime =
    currentDate.getHours() +
    ":" +
    currentDate.getMinutes() +
    ":" +
    currentDate.getSeconds();
};
