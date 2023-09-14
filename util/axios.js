import axios from 'axios';

export default axios.create({
  baseURL: 'https://homework-13r9.vercel.app/api/',
  headers: {
    'Content-type': 'application/json',
  },
});
