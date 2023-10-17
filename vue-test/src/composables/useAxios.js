import axios from 'axios';

const instance = axios.create({
  headers: { 'Content-Type': 'application/json' },
});

export const useApi = () => {
  return instance;
};
