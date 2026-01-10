import type { Meta, StoryObj } from "@storybook/react";
import VideoLibrary from "./VideoLibrary";

const meta: Meta<typeof VideoLibrary> = {
  title: "Pages/VideoLibrary",
  component: VideoLibrary,
};

export default meta;
type Story = StoryObj<typeof VideoLibrary>;

export const Default: Story = {};
