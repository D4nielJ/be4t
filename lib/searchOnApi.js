const searchOnApi = async (query) => {
  const headers = {
    Accept: '*/*',
    'User-Agent': 'Daniel Jaramillo (https://www.d4nielj.me)',
    Authorization: `Discogs token=${process.env.NEXT_PUBLIC_DISCOGS_URL}`,
  };

  try {
    const res = await fetch(query, {
      headers,
      method: 'GET',
    });
    const { pagination, results: entities } = await res.json();
    return { entities, pagination, error: null };
  } catch (e) {
    console.log(e);
    return { entities: null, pagination: null, error: e };
  }
};

export default searchOnApi;
