import type { Meta, StoryObj } from "@storybook/react";
import VideoControl from "./VideoControl";

const meta: Meta<typeof VideoControl> = {
  title: "Components/VideoControl",
  component: VideoControl,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-[800px] bg-[#160d23] p-4">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof VideoControl>;

export const Default: Story = {};
