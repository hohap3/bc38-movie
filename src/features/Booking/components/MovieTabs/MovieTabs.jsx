import { Tabs } from "antd";
import React, { useEffect, useState } from "react";
import { movieService } from "../../../../services/movieServices";

function MovieTabs() {
  const [dataMovie, setDataMovie] = useState([]);

  useEffect(() => {
    async function fetchScheduleByTheater() {
      try {
        const res = await movieService.getScheduleByTheater();
        setDataMovie(res.data.content);

        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchScheduleByTheater();
  }, []);

  function renderHeThongRap() {
    return dataMovie.map((heThongRap) => ({
      key: heThongRap.maHeThongRap,
      label: <img className="w-16 h-16" src={heThongRap.logo} />,
      children: (
        <Tabs
          style={{ height: "600px", overflow: "hidden" }}
          tabPosition="left"
          items={heThongRap.lstCumRap.map((cumRap) => ({
            key: cumRap.maCumRap,
            label: (
              <div>
                <p>{cumRap.tenCumRap}</p>
              </div>
            ),
            children: cumRap.tenHeThongRap,
          }))}
        />
      ),
    }));
  }

  return (
    <div className="container mx-auto">
      <Tabs tabPosition="left" items={renderHeThongRap()} />
    </div>
  );
}

export default MovieTabs;
