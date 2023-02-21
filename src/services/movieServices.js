import https from "./config";

export const movieService = {
  getBanners() {
    const url = "QuanLyPhim/LayDanhSachBanner";
    return https.get(url);
  },

  getMoviePagination(pageSize, pageIndex) {
    const url = "/QuanLyPhim/LayDanhSachPhimPhanTrang";
    return https.get(url, {
      params: {
        maNhom: "GP07",
        soTrang: pageIndex,
        soPhanTuTrenTrang: pageSize,
      },
    });
  },

  getScheduleByTheater() {
    const url = "/QuanLyRap/LayThongTinLichChieuHeThongRap";
    return https.get(url, {
      params: {
        maNhom: "GP01",
      },
    });
  },
};
