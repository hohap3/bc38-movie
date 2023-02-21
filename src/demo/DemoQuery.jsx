import React from "react";
import { useParams, useSearchParams } from "react-router-dom";

function DemoQuery() {
  // localhost:3000/bc38
  // query param
  const params = useParams();

  // query string
  // useSearchParams như useState hook
  const [searchParams, setSearchParams] = useSearchParams();

  console.log(params.title);

  return (
    <div>
      <h1 className="text-center"> Demo query {params.title}</h1>
    </div>
  );
}

export default DemoQuery;
