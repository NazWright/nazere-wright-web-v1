/**
 * @function standardHour
 * Returns the standard hour 1-12 of military time hours.
 * @param {Number} hour - the current hour {0 - 23}
 * @returns {Boolean} pm - is it PM or AM
 * @returns {Number} hour
 */
const standardHour = (hour) => {
  let pm = false;
  if (hour > 23 || hour < 0) {
    return;
  }
  // 1 - 12 AM or PM
  const numHours = 12;
  // only pm times
  if (parseInt(hour) > numHours) {
    pm = true;
    return hour % numHours;
  }
  return {
    hour,
    pm,
  };
};
