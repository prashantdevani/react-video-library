const VideoPlayer = () => {
  return (
    <div
      className="flex-1 from-[#5A1039] to-[#3b2a55] size-18
  bg-[radial-gradient(at_25%_30%,#5A1039,#1b1128_50%)] overflow-hidden relative group shadow-2xl"
    >
      <div className="absolute m-auto inset-0 flex items-center justify-center pointer-events-none max-w-[500px] max-h-[300px] rounded-xl overflow-hidden">
        <img
          src="https://picsum.photos/seed/editor/800/450"
          className="w-full h-full object-cover opacity-60"
          alt="Video Preview"
        />
        <div className="absolute bottom-4 right-4 bg-black/60 px-2 py-1 rounded text-xs font-mono">
          00:00:17:04 • 00:02:10:04
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
