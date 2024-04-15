import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com/';

export const fetchImages = async args => {
  const response = await axios.get('search/photos/', {
    params: {
      ...args,
      per_page: 16,
      client_id: 'SfnFzUCazYfDtbpWZ-0JmAbSqL4erZQ6cuPmG0awYDg',
    },
  });
  return response;
};
