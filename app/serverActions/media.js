export async function getTrending(type, page, range) {
  if (!type) type = "tv";
  if (!page) page = 1;
  if (!range) range = "day";

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/trending/${type}/${range}?language=en-US&page=${page}&api_key=${process.env.TMDB_API_KEY}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
