import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";

import CarouselComponent from "./components/Carousel/Carousel";
import MovieList from "./components/MovieList/MovieList";
import MovieTabs from "./components/MovieTabs/MovieTabs";
import { fetchBanner, fetchMovie } from "./thunk";

function Home() {
  const dispatch = useDispatch();
  const [params, setParams] = useSearchParams();

  // function defaultPage() {
  //   if (!params.get("page")) params.set("page", 1);
  //   return params.get("page");

  // const params = useParams();
  // }

  useEffect(() => {
    dispatch(fetchBanner());
  }, []);

  // xử lý giữ trạng thái bằng params , query url
  useEffect(() => {
    dispatch(fetchMovie(params.get("page")));
  }, [params.get("page")]);

  return (
    <div>
      <CarouselComponent />
      <MovieList />
      <MovieTabs />
    </div>
  );
}

export default Home;
