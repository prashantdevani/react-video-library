import type { Meta, StoryObj } from "@storybook/react";
import VideoPlayList from "./VideoPlayList";

const meta: Meta<typeof VideoPlayList> = {
  title: "Components/VideoPlayList",
  component: VideoPlayList,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-80 h-[500px] bg-[#1f162f] flex flex-col text-white">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof VideoPlayList>;

export const Default: Story = {};
