const API_KEY = process.env.API_KEY;
export default async function fetchMovie(id: string) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
  );
  return res;
}
