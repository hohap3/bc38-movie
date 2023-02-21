import https from "../../services/config";
import { movieService } from "../../services/movieServices";

/**
 *
 * redux thunk giúp gọi api trong action
 *
 * một Middleware cho phép bạn viết các Action trả về một function thay vì một plain javascript object bằng cách trì hoãn việc đưa action đến reducer. Redux Thunk được sử dụng để xử lý các logic bất đồng bộ phức tạp cần truy cập đến Store hoặc đơn giản là việc lấy dữ liệu như Ajax request.
 */

export function fetchBanner() {
  return async function (dispatch) {
    try {
      // const res = await axios({
      //   // url = domain + endpoint
      //   url: "https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachBanner",
      //   method: "GET",
      //   headers: {
      //     TokenCybersoft:
      //       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzOCIsIkhldEhhblN0cmluZyI6IjA2LzA4LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY5MTI4MDAwMDAwMCIsIm5iZiI6MTY2MjM5NzIwMCwiZXhwIjoxNjkxNDI3NjAwfQ.66mNB20qUNFA8TlIzjAq7Ekv1hVfR3hQB4I3_yLui8Y",
      //   },
      // });

      const res = await movieService.getBanners();

      dispatch({
        type: `SET_BANNER`,
        payload: res.data.content,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function fetchMovie(pageNum) {
  return async function (dispatch) {
    try {
      // const res = await axios({
      //   url: "https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhimPhanTrang",
      //   method: "GET",
      //   params: {
      //     maNhom: "GP07",
      //     soTrang: pageNum,
      //     soPhanTuTrenTrang: 10,
      //   },
      //   headers: {
      //     TokenCybersoft:
      //       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzOCIsIkhldEhhblN0cmluZyI6IjA2LzA4LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY5MTI4MDAwMDAwMCIsIm5iZiI6MTY2MjM5NzIwMCwiZXhwIjoxNjkxNDI3NjAwfQ.66mNB20qUNFA8TlIzjAq7Ekv1hVfR3hQB4I3_yLui8Y",
      //   },
      // });

      // const res = await https.get("/QuanLyPhim/LayDanhSachPhimPhanTrang", {
      //   params: {
      //     maNhom: "GP07",
      //     soTrang: pageNum,
      //     soPhanTuTrenTrang: 10,
      //   },
      // });

      const res = await movieService.getMoviePagination(10, pageNum);

      // console.log(res.data.content);

      dispatch({
        type: "SET_MOVIE",
        payload: res.data.content,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
