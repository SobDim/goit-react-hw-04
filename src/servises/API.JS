import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com/';

export const fetchImages = async args => {
  const response = await axios.get('search/photos/', {
    params: {
      ...args,
      // per_page: 10,
      client_id: 'SfnFzUCazYfDtbpWZ-0JmAbSqL4erZQ6cuPmG0awYDg',
    },
  });
  return response.data;
};

//Application ID 589932
//SfnFzUCazYfDtbpWZ-0JmAbSqL4erZQ6cuPmG0awYDg
//Bj861e2OLtj0khpy2MdSJfxWDDBN40BkTC_YBA7f4AM
//https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY
