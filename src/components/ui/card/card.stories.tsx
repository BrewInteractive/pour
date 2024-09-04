import type { Meta, StoryObj } from "@storybook/react";
import { CardView } from "./card";
import React from "react";

const meta = {
  title: "Example/Button",
  component: CardView,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CardView>;

export default meta;

const Template: StoryObj<typeof CardView> = {
  render: (args) => <CardView {...args}>Button Label</CardView>,
};

export const Default = {
  ...Template,
  args: {},
};
