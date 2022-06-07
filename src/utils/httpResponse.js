const log = require("../utils/log");

exports.getErrorResponse = (error) => {
  return {
    status: error.response.status || 500,
    message: JSON.stringify({message: error.response.data["error"] || "Server Error"}),
  };
};