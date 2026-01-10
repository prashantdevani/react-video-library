import {
  Play,
  Volume2,
  SkipBack,
  SkipForward,
  BadgePlus,
  Maximize,
  MoveVertical,
  CirclePlus,
  CircleMinus,
  Timer,
  Undo2,
  Save,
  ListFilterIcon,
  Clapperboard,
} from "lucide-react";

const VideoControl = () => {
  return (
    <div className="p-3 bg-[#2B0844] flex flex-col space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:scale-105 transition-transform">
            <Play size={20} fill="black" />
          </button>
          <Volume2
            size={18}
            className="text-gray-400 hover:text-white cursor-pointer"
          />
        </div>

        <div className="flex-1 mx-6 relative group">
          <div className="h-1 bg-gray-700 rounded-full w-full">
            <div className="h-1 bg-purple-500 w-1/3 relative">
              <div className="w-3 h-3 bg-white rounded-full absolute right-0 top-1/2 -translate-y-1/2 shadow opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-4 text-gray-400">
          <div className="flex space-x-2 items-center">
            <CircleMinus
              size={18}
              className="hover:text-white cursor-pointer"
            />
            <div className="w-16 h-1 bg-gray-700 rounded-full">
              <div className="w-1/2 bg-purple-500 h-full"></div>
            </div>
            <CirclePlus size={18} className="hover:text-white cursor-pointer" />
          </div>
          <span className="hover:text-white cursor-pointer">1x</span>
          <div>
            <BadgePlus size={18} className="hover:text-white cursor-pointer" />
          </div>
          <div>
            <Maximize size={18} className="hover:text-white cursor-pointer" />
          </div>
          <div>
            <MoveVertical
              size={18}
              className="hover:text-white cursor-pointer"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between text-[10px] text-gray-500 font-mono">
        <div className="flex space-x-4">
          <span className="hover:text-white cursor-pointer">
            <Timer size={16} />
          </span>
          <span>00:37</span>
          <span className="hover:text-white cursor-pointer">
            <SkipBack size={16} />
          </span>
          <span className="hover:text-white cursor-pointer">
            <Play size={16} />
          </span>
          <span className="hover:text-white cursor-pointer">
            <SkipForward size={16} />
          </span>
        </div>
        <div className="flex space-x-2">
          <span>&lt;5s</span>
          <span>&lt;1s</span>
          <span className="text-white border border-gray-600 px-2 rounded bg-black/20">
            00:00:17:04
          </span>
          <span>1s&gt;</span>
          <span>5s&gt;</span>
        </div>
        <div className="flex space-x-4">
          <span className="hover:text-white cursor-pointer">
            <Undo2 size={16} />
          </span>
          <span className="hover:text-white cursor-pointer">
            <Save size={16} />
          </span>
          <span className="hover:text-white cursor-pointer">
            <ListFilterIcon size={16} />
          </span>
          <span className="hover:text-white cursor-pointer">
            <Clapperboard size={16} />
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between text-[10px] text-gray-500 font-mono !mt-3">
        <div className="min-w-[20%]" />
        <div className="flex space-x-2">
          <span className="text-white border border-gray-600 p-2 rounded bg-[#301F3F] text-lg text-nowrap">
            00:00 / 00:37
          </span>
        </div>
        <div className="flex space-x-4">
          <div className="flex space-x-2 items-center">
            <CircleMinus
              size={18}
              className="hover:text-white cursor-pointer"
            />
            <div className="w-16 h-1 bg-gray-700 rounded-full">
              <div className="w-0 bg-purple-500 h-full"></div>
            </div>
            <CirclePlus size={18} className="hover:text-white cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoControl;
