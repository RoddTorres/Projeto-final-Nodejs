// exports.getErrorResponse = (error) => {
//   return {
//     status: error.response.status || 500,
//     message: JSON.stringify({
//       message: error.response.data["error"] || "Server Error",
//     }),
//   };
// };

exports.getErrorResponse = (error) => {
  return {
    status: error.status || 500,
    message: JSON.stringify({
      message: error.message || "Server Error",
    }),
  };
};