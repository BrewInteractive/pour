import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./checkbox";
import React from "react";

const meta = {
  title: "Example/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    disabled: {
      control: { type: "boolean" },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Checkbox>;

export default meta;

const Template: StoryObj<typeof Checkbox> = {
  render: (args) => <Checkbox {...args}>Button Label</Checkbox>,
};

export const Primary = {
  ...Template,
  args: {
    label: "Label",
    id: "id",
  },
};

export const Disabled = {
  ...Template,
  args: {
    label: "Label",
    id: "id",
    disabled: true,
  },
};
