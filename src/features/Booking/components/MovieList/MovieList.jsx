import React from "react";
import { useDispatch, useSelector } from "react-redux";
import MovieItem from "../MovieItem/MovieItem";
import { Pagination } from "antd";
import { fetchMovie } from "../../thunk";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

function MovieList() {
  const movieList = useSelector((state) => state.booking.movie);

  const [params, setParams] = useSearchParams();
  // const params = useParams();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  function handleChangePage(page) {
    setParams({ page });
    // dispatch(fetchMovie(page));
    // console.log(page);
    // navigate(`/${page}`);
  }

  return (
    <section className="container mx-auto">
      <h2 className="text-center text-6xl my-3">Movie List</h2>
      <div className="grid grid-cols-5 gap-8">
        {movieList?.items?.map((movieItem) => (
          <MovieItem key={movieItem.maPhim} item={movieItem} />
        ))}
      </div>
      {/* Phân trang */}
      <div className="my-4 flex justify-center">
        {movieList.totalPages && (
          <Pagination
            current={+params.get("page")}
            pageSize={10}
            total={movieList.totalCount}
            onChange={handleChangePage}
          />
        )}
      </div>
    </section>
  );
}

export default MovieList;
