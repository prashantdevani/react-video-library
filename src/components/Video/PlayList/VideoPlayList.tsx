import { ChevronDown } from "lucide-react";

const VideoPlayList = () => {
  return (
    <div className="flex-1 overflow-y-auto p-2 space-y-2 custom-scrollbar">
      <div className="bg-[#2d2042] rounded p-2 mb-4 flex items-center justify-between text-sm text-gray-300">
        <span>Translation_F...</span>
        <span className="text-xs">
          <ChevronDown size={12} />
        </span>
      </div>

      {[1, 2, 3, 4, 5, 6].map((item) => (
        <div
          key={item}
          className="group relative flex items-start space-x-3 p-2 rounded hover:bg-[#2d2042] cursor-pointer transition-colors border border-transparent hover:border-[#3b2a55]"
        >
          <div className="w-24 h-16 bg-black rounded overflow-hidden relative shrink-0">
            <img
              src={`https://picsum.photos/seed/${item}/200/150`}
              alt="thumb"
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100"
            />
            <div className="absolute bottom-1 left-1 bg-black/60 rounded text-[8px] px-1">
              00:15
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="text-sm text-gray-200 truncate font-normal">
              Video Clip {item}
            </h4>
            <div className="text-[10px] text-gray-500 mt-1">
              <p>Duration: 00:00:15</p>
              <p>12 sec</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoPlayList;
