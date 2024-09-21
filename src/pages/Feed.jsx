import { useContext } from "react";
import Sidebar from "../components/Sidebar";
import { VideoContext } from "../context/VideoContext";
import VideoCard from "../components/VideoCard";
import Loader from "../components/Loader";

const Feed = () => {
  const { videos, isLoading, error } = useContext(VideoContext);
  return (
    <div className="flex gap-3 h-screen overflow-auto">
      <Sidebar />
      <div className="videos">
        {isLoading ? (
          <Loader />
        ) : error ? (
          <p>error</p>
        ) : (
          videos?.map(
            (item, i) =>
              item.type === "video" && <VideoCard video={item} key={i} isRow={false} />
          )
        )}
      </div>
    </div>
  );
};

export default Feed;
