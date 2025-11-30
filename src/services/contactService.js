import apiClient from './api';

const contactService = {
  /**
   * Get feedback list
   * @returns {Promise}
   */
  getContact: async () => {
    try {
      const response = await apiClient.get('/contact');
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  /**
   * Submit feedback
   * @param {Object} payload - { name, email, rating, message, anonymous }
   * @returns {Promise}
   */
  submitContact: async (payload) => {
    try {
      const response = await apiClient.post('/contact', payload);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },
};

export default contactService;
