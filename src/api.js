import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    language: "ko-kr",
  },
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NjMyYjQxZTU1ZDhiODIxNTUwMDAzMjhmYTI3OTQ0MiIsIm5iZiI6MTczMDM0NzcyNy4yNDY5NTg1LCJzdWIiOiI2NzIxYjQ2MzgyNmZlNTc5OWNjNGE3NzkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.rGFNjkd9wK9wY5cf-_PWk43pAjEE_Vz3c0mTRLTL3x4",
  },
});

export const getMovie = (queryKey) => {
  const originData = queryKey[0];
  return instance.get(originData).then((res) => res.data);
};
// instance.get("movie/now_playing").then((res) => res.data);
// instance.get().then((res) => res.data);
// app에 queryKey에 넣을 수 있다
