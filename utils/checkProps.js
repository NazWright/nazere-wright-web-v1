// takes a string array or comma delimited list
module.exports = (object, properties) => {
  if (typeof properties === "string") {
    properties = properties.split(",");
  }
  properties.forEach((property) => {
    let val = object[property];
    if (!val) {
      return false;
    }
  });
  return true;
};
