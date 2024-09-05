import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "./avatar";
import React from "react";

const meta = {
  title: "Example/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
  tags: ["autodocs"],
} satisfies Meta<typeof Avatar>;

export default meta;

const Template: StoryObj<typeof Avatar> = {
  render: (args) => <Avatar {...args}>avatar Label</Avatar>,
};

export const Primary = {
  ...Template,
  args: {
    image: "https://github.com/shadcn.png",
    fallback: "ZT",
  },
};

export const Secondary = {
  ...Template,
  args: {
    fallback: "ZT",
  },
};
