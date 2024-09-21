import { AiFillLike, AiFillDislike } from "react-icons/ai";

const ChannelInfo = ({ video }) => {
  return (
    <div className="flex justify-between">
      {/* sol */}
      <div className="flex items-center gap-4">
        <img
          src={video.channelThumbnail[0].url}
          className="rounded-full w-12 h-12"
          alt=""
        />
        <div>
          <h4 className="font-bold">{video.channelTitle}</h4>
          <p className="text-gray-400">{video.subscriberCountText}</p>
        </div>
        <button className="bg-white text-black py-2 px-5 rounded-full hover:bg-gray-400 transition duration-[400ms]">
          Abone Ol
        </button>
      </div>
      {/* sağ */}
      <div className="flex items-center bg-[#272727] rounded-full ">
        <div className="py-2 px-6 border-r">
          <AiFillLike className="cursor-pointer hover:text-gray-400" />
        </div>
        <div className="py-2 px-6">
          <AiFillDislike className="cursor-pointer hover:text-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default ChannelInfo;
