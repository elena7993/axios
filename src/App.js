import { useEffect } from "react";
import { getMovie } from "./api";
import { useQuery } from "@tanstack/react-query";

const App = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["movie/now_playing", "", ""],
    queryFn: getMovie,
  });

  console.log(data);
  console.log(isLoading);

  return <div>app</div>;
};

export default App;
