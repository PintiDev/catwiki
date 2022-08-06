const fetchSearch = async (query) => {
  const req = await fetch(
    `https://api.thecatapi.com/v1/breeds/search?q=${query}`,
    {
      headers: {
        "X-API-KEY": process.env.NEXT_PUBLIC_API_KEY,
        "Content-Type": "application/json",
      },
    }
  );
  const res = await req.json();
  return res;
};
export default fetchSearch;
