const fetch = async (URL) => {
  const request = await fetch(URL);
  const data = await request.json();
  return data.results;
};

export default fetch;
