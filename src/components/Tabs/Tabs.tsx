import {
  BookCopy,
  PanelRightOpen,
} from "lucide-react";

const Tabs = () => {
  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <div />
        <div className="flex space-x-2">
          <div className="flex space-x-2">
            <div className="w-8 h-8 bg-[#5a3da4] rounded flex items-center justify-center">
              <span className="text-xs">
                <BookCopy size={12} />
              </span>
            </div>
          </div>

          <div className="flex space-x-2">
            <div className="w-8 h-8 bg-[#3b2a55] rounded flex items-center justify-center">
              <span className="text-xs">
                <PanelRightOpen size={12} />
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex space-x-6 text-sm font-medium pb-2 text-gray-400">
        <span className="cursor-pointer hover:text-white">PROJECTS</span>
        <span className="text-white border-b-4 border-[#5a3da4] pb-2 -mb-2.5 cursor-pointer">
          CLIPS
        </span>
        <span className="cursor-pointer hover:text-white">COMP</span>
      </div>
    </>
  );
};

export default Tabs;
