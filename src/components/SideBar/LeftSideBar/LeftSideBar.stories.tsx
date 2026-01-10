import type { Meta, StoryObj } from "@storybook/react";
import LeftSideBar from "./LeftSideBar";

const meta: Meta<typeof LeftSideBar> = {
  title: "Components/LeftSideBar",
  component: LeftSideBar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof LeftSideBar>;

export const Default: Story = {};
