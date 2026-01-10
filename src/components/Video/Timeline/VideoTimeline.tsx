import { Film } from "lucide-react";

const EVENT_COLORS: Record<
  string,
  { bg: string; border: string; glow: string }
> = {
  red: {
    bg: "bg-rose-500/20",
    border: "border-rose-500",
    glow: "shadow-rose-500/50",
  },
  pink: {
    bg: "bg-fuchsia-500/20",
    border: "border-fuchsia-500",
    glow: "shadow-fuchsia-500/50",
  },
  yellow: {
    bg: "bg-amber-400/20",
    border: "border-amber-400",
    glow: "shadow-amber-500/50",
  },
  green: {
    bg: "bg-emerald-500/20",
    border: "border-emerald-500",
    glow: "shadow-emerald-500/50",
  },
  blue: {
    bg: "bg-indigo-500/20",
    border: "border-indigo-500",
    glow: "shadow-indigo-500/50",
  },
  grey: {
    bg: "bg-slate-500/20",
    border: "border-slate-500",
    glow: "shadow-slate-500/50",
  },
  cyan: {
    bg: "bg-cyan-500/20",
    border: "border-cyan-500",
    glow: "shadow-cyan-500/50",
  },
};

const VideoTimeline = () => {
  return (
    <div className="flex-1 bg-[#160d23] overflow-hidden flex flex-col">
      <div className="flex-1 relative overflow-x-auto overflow-y-hidden p-4">
        <div className="relative">
          <div className="absolute top-0 left-[45px] bottom-0 w-[2px] bg-blue-500 z-10">
            <div className="absolute -top-1 -left-1.5 w-4 h-3 bg-blue-500 rounded-sm"></div>
          </div>
          {[
            {
              name: "Layer 1",
              layerItemInfo: [
                { left: 0, images: [1, 2, 3], color: "red", selected: true },
                { left: 50, images: [4, 5], color: "pink" },
                { left: 150, images: [6, 7, 8, 9], color: "yellow" },
              ],
            },
            {
              name: "Layer 2",
              layerItemInfo: [
                { left: 75, images: [10, 11], color: "green" },
                { left: 80, images: [12, 13, 14], color: "blue" },
                { left: 90, images: [15], color: "grey" },
              ],
            },
            {
              name: "Layer 3",
              layerItemInfo: [
                { left: 80, images: [16], color: "cyan" },
                { left: 120, images: [17, 18, 19, 20], color: "red" },
                { left: 145, images: [21], color: "pink" },
              ],
            },
          ].map((item, index) => {
            return (
              <div
                key={index}
                className="flex space-x-1 h-16 ml-10 mt-4 relative bg-[#251838]/50 rounded-lg py-2 px-1 border border-[#3b2a55]"
              >
                <div className="absolute -left-8 top-1/2 -translate-y-1/2 text-gray-500">
                  <Film size={16} />
                </div>

                {item.layerItemInfo.map((layerItem, layerIndex) => {
                  const theme =
                    EVENT_COLORS[layerItem.color] || EVENT_COLORS.grey;
                  return (
                    <div
                      className={`flex flex-nowrap border-b-2 rounded-[8px] transition-all duration-200 overflow-hidden cursor-pointer ${theme.bg} ${theme.border} ${theme.glow} hover:bg-[#FFFFFF]`}
                      key={layerIndex}
                      style={{
                        marginLeft: layerItem.left,
                        outline: layerItem.selected
                          ? "2px solid rgba(255,255,255,0.5)"
                          : "none",
                        outlineOffset: "2px",
                      }}
                    >
                      {layerItem.images.map((i) => (
                        <div
                          key={i}
                          className="h-full w-20 border-r border-white/10 relative group"
                        >
                          <img
                            src={`https://picsum.photos/seed/${i + 10}/100/60`}
                            className="w-full h-full object-cover opacity-80 transition-opacity"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                        </div>
                      ))}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default VideoTimeline;
