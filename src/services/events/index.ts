import fetch from '@/services/fetch';

export const getEvents = async () => {
  const response = await fetch.get('');

  const data = response.data;
};
