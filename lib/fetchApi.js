const DISCOGS_URL = 'https://api.discogs.com/';

const fetchApi = async (query, method = 'GET') => {
  const headers = {
    Accept: '*/*',
    'User-Agent': 'Daniel Jaramillo (https://www.d4nielj.me)',
    Authorization: `Discogs token=${process.env.NEXT_PUBLIC_DISCOGS_URL}`,
  };

  try {
    const res = await fetch(`${DISCOGS_URL}${query}`, {
      headers,
      method,
    });
    const data = await res.json();
    return { data, error: null };
  } catch (e) {
    console.log(e);
    return {
      data: null,
      error: e,
    };
  }
};

export default fetchApi;
