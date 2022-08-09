const fetchCatDetail = async (id) => {
  const req = await fetch(
    `https://api.thecatapi.com/v1/images/search?breed_ids=${id}`,
    {
      headers: {
        "X-API-KEY": "038b076c-3ca6-4522-8f7d-b6c1b24a5df5",
        "Content-Type": "application/json",
      },
    }
  );
  const res = await req.json();
  return res;
};
export default fetchCatDetail;
