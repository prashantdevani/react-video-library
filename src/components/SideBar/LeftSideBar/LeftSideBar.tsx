import { Home, Film, Menu } from "lucide-react";

const LeftSideBar = () => {
  return (
    <aside className="w-[60px] border-r border-[#3b2a55] flex flex-col items-center py-4 space-y-4 bg-[#1f162f] shrink-0">
      <div className="border-b-2 border-[#3b2a55]">
        <button className="p-3 rounded-md hover:bg-[#3b2a55] text-gray-400 hover:text-white transition-all">
          <Home size={22} />
        </button>
      </div>
      <div>
        <button className="p-3 rounded-md bg-[#5a3da4] text-white shadow-lg shadow-purple-900/50">
          <Film size={22} />
        </button>
      </div>
      <div className="flex-1"></div>
      <div className="mt-auto mb-4">
        <Menu size={22} />
      </div>
    </aside>
  );
};

export default LeftSideBar;
