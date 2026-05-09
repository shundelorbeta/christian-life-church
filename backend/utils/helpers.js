// Utility functions

const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

const generateSlug = (text) => {
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-');
};

const sanitizeInput = (input) => {
  return input.replace(/[<>]/g, '');
};

const paginate = (page, limit) => {
  const currentPage = parseInt(page) || 1;
  const currentLimit = parseInt(limit) || 10;
  const skip = (currentPage - 1) * currentLimit;

  return { skip, limit: currentLimit, page: currentPage };
};

const createResponse = (success, message, data = null, error = null) => {
  return {
    success,
    message,
    data,
    error,
    timestamp: new Date().toISOString()
  };
};

module.exports = {
  formatDate,
  generateSlug,
  sanitizeInput,
  paginate,
  createResponse
};