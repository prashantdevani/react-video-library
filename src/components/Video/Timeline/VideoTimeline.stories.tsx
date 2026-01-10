import type { Meta, StoryObj } from "@storybook/react";
import VideoTimeline from "./VideoTimeline";

const meta: Meta<typeof VideoTimeline> = {
  title: "Components/VideoTimeline",
  component: VideoTimeline,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-full h-[300px] bg-[#160d23] flex flex-col">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof VideoTimeline>;

export const Default: Story = {};
