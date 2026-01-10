import type { Meta, StoryObj } from "@storybook/react";
import VideoPlayer from "./VideoPlayer";

const meta: Meta<typeof VideoPlayer> = {
  title: "Components/VideoPlayer",
  component: VideoPlayer,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-[800px] h-[450px]">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof VideoPlayer>;

export const Default: Story = {};
