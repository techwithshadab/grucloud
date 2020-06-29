const _ = require("lodash");
const assert = require("assert");
const notAvailable = (name, field) => {
  assert(field);
  return `<< ${field} of ${name} not available yet >>`;
};

exports.notAvailable = notAvailable;

exports.getField = ({ resource, live }, field) =>
  _.get(live, field, notAvailable(resource.name, field));
