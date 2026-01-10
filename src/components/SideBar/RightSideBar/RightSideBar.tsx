import { CloudUpload, Folder, Box, BookMarked, Menu } from "lucide-react";

const RightSideBar = () => {
  return (
    <div className="w-[50px] border-l border-[#3b2a55] flex flex-col items-center py-4 space-y-4 bg-[#1f162f] shrink-0">
      <button className="p-2 rounded-md bg-[#5a3da4] text-white shadow-lg shadow-purple-900/50">
        <Menu size={20} />
      </button>
       <button className="p-2 rounded-md bg-[#5a3da4] text-white shadow-lg shadow-purple-900/50">
        <CloudUpload size={20} />
      </button>
       <button className="p-2 rounded-md bg-gradient-to-r from-orange-400 to-pink-500 text-white shadow-lg shadow-purple-900/50">
        <BookMarked size={20} />
      </button>
       <button className="p-2 rounded-md bg-[#5a3da4] text-white shadow-lg shadow-purple-900/50">
        <Box size={20} />
      </button>
       <button className="p-2 rounded-md bg-[#5a3da4] text-white shadow-lg shadow-purple-900/50">
        <Folder size={20} />
      </button>
    </div>
  );
};

export default RightSideBar;
