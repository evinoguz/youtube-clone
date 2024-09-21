import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import VideoCard from "../components/VideoCard";
import { useSearchParams } from "react-router-dom";
import api from "../utils/api";

const Results = () => {
  const [page, setPage] = useState(1);
  const [token, setToken] = useState(null);
  const [data, setData] = useState([]);

  const [searchParams] = useSearchParams();
  const query = searchParams.get("search_query");

  useEffect(() => {
    const params = {
      query: query,
      token: page > 1 ? token : undefined,
    };
    api.get(`/search`, { params }).then((res) => {
      setToken(res.data.continuation);
      setData((prev) => prev.concat(res.data.data));
    });
  }, [query, page]);
  console.log(data);

  return (
    <div className="flex gap-3">
      <Sidebar />
      <div className="mx-auto h-[90vh] overflow-auto p-5 m-5">
        <h2 className="text-xl my-5">
          "<span className="font-bold">{query}</span>" için sonuçlar
        </h2>
        <div  className="flex flex-col justify-center">
          {data?.map((item) => item.type === "video" && <VideoCard key={item.id} video={item} isRow={true}/>)}
          <button onClick={() => setPage(page + 1)} className="bg-zinc-600 py-2 px-5 rounded-md my-10 hover:bg-zinc-900 transition">Daha Fazla ...</button>
        </div>
      </div>
    </div>
  );
};

export default Results;
