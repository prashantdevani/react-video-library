import type { Meta, StoryObj } from "@storybook/react";
import RightSideBar from "./RightSideBar";

const meta: Meta<typeof RightSideBar> = {
  title: "Components/RightSideBar",
  component: RightSideBar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof RightSideBar>;

export const Default: Story = {};
