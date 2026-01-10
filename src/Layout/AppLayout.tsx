import type React from "react";

export interface AppLayoutProps {
  leftSideBar?: React.ReactElement;
  rightSideBar?: React.ReactElement;
  tabs?: React.ReactElement;
  videoPlayList?: React.ReactElement;
  videoPlayer?: React.ReactElement;
  videoControl?: React.ReactElement;
  videoTimeline?: React.ReactElement;
  header?: React.ReactElement;
}

const AppLayout = (props: AppLayoutProps) => {
  const {
    leftSideBar,
    rightSideBar,
    tabs,
    videoPlayList,
    videoPlayer,
    videoControl,
    videoTimeline,
    header,
  } = props;

  return (
    <div className="flex flex-col h-screen w-full bg-[#1a1128] text-white overflow-hidden font-sans">
      {header}

      <div className="flex flex-1 overflow-hidden">
        {leftSideBar}

        <div className="w-80 border-r border-[#3b2a55] flex flex-col bg-[#1f162f] shrink-0">
          <div className="p-4 border-b border-[#3b2a55]">{tabs}</div>
          {videoPlayList}
        </div>

        <div className="flex-1 flex flex-col min-w-0 bg-[#160d23]">
          <div className="h-[60%] flex flex-col p-4 border-b border-[#3b2a55]">
            <div className="flex items-center space-x-2 text-xs text-gray-400 mb-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Untitled Project</span>
            </div>

            {videoPlayer}
            {videoControl}
          </div>

          {videoTimeline}
        </div>

        {rightSideBar}
      </div>
    </div>
  );
};

export default AppLayout;
