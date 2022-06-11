exports.getErrorResponse = (error) => {
  return {
    status: error.status || 500,
    message: JSON.stringify({
      message: error.message || "Server Error",
    }),
  };
};