import type { Meta, StoryObj } from "@storybook/react";
import AppLayout from "./AppLayout";

const meta: Meta<typeof AppLayout> = {
  title: "Layout/AppLayout",
  component: AppLayout,
};

export default meta;
type Story = StoryObj<typeof AppLayout>;

const HeaderPlaceholder = () => (
  <div className="h-16 bg-blue-900 flex items-center justify-center border-b border-blue-700">
    Header
  </div>
);
const LeftSideBarPlaceholder = () => (
  <div className="w-[60px] bg-red-900 h-full flex items-center justify-center border-r border-red-700">
    Left
  </div>
);
const RightSideBarPlaceholder = () => (
  <div className="w-[50px] bg-green-900 h-full flex items-center justify-center border-l border-green-700">
    Right
  </div>
);
const TabsPlaceholder = () => (
  <div className="h-10 bg-yellow-900 flex items-center justify-center">
    Tabs
  </div>
);
const VideoPlayListPlaceholder = () => (
  <div className="flex-1 bg-yellow-800 flex items-center justify-center">
    Playlist
  </div>
);
const VideoPlayerPlaceholder = () => (
  <div className="flex-1 bg-purple-900 flex items-center justify-center border-b border-purple-700">
    Player
  </div>
);
const VideoControlPlaceholder = () => (
  <div className="h-20 bg-purple-800 flex items-center justify-center">
    Controls
  </div>
);
const VideoTimelinePlaceholder = () => (
  <div className="flex-1 bg-gray-800 flex items-center justify-center">
    Timeline
  </div>
);

export const Default: Story = {
  args: {
    header: <HeaderPlaceholder />,
    leftSideBar: <LeftSideBarPlaceholder />,
    rightSideBar: <RightSideBarPlaceholder />,
    tabs: <TabsPlaceholder />,
    videoPlayList: <VideoPlayListPlaceholder />,
    videoPlayer: <VideoPlayerPlaceholder />,
    videoControl: <VideoControlPlaceholder />,
    videoTimeline: <VideoTimelinePlaceholder />,
  },
};
