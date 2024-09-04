import type { Meta, StoryObj } from "@storybook/react";
import { CardView } from "./card";
import React from "react";

const meta = {
  title: "Example/Card",
  component: CardView,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CardView>;

export default meta;

const Template: StoryObj<typeof CardView> = {
  render: (args) => <CardView {...args}> content</CardView>,
};

export const Default = {
  ...Template,
  args: {},
};
