import type { Meta, StoryObj } from "@storybook/react";
import Card from "./card";
import React from "react";

const meta = {
  title: "Example/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Card>;

export default meta;

const Template: StoryObj<typeof Card> = {
  render: (args) => <Card {...args}> content</Card>,
};

export const Default = {
  ...Template,
  args: {},
};

export const Disabled = {
  ...Template,
  args: {
    disabled: true,
  },
};

export const Selected = {
  ...Template,
  args: {
    selected: true,
  },
};

export const WithoutShadow = {
  ...Template,
  args: {
    isShadowActive: false,
  },
};
