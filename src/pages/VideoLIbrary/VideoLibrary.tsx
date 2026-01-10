import Header from "../../components/Header/Header";
import LeftSideBar from "../../components/SideBar/LeftSideBar/LeftSideBar";
import RightSideBar from "../../components/SideBar/RightSideBar/RightSideBar";
import Tabs from "../../components/Tabs/Tabs";
import VideoPlayList from "../../components/Video/PlayList/VideoPlayList";
import AppLayout from "../../Layout/AppLayout";
import VideoPlayer from "../../components/Video/Player/VideoPlayer";
import VideoControl from "../../components/Video/Controls/VideoControl";
import VideoTimeline from "../../components/Video/Timeline/VideoTimeline";

const VideoLibrary = () => {
  return (
    <AppLayout
      header={<Header />}
      leftSideBar={<LeftSideBar />}
      rightSideBar={<RightSideBar />}
      tabs={<Tabs />}
      videoPlayList={<VideoPlayList />}
      videoPlayer={<VideoPlayer />}
      videoControl={<VideoControl />}
      videoTimeline={<VideoTimeline />}
    />
  );
};

export default VideoLibrary;
