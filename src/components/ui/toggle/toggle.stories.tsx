import type { Meta, StoryObj } from "@storybook/react";
import { Toggle } from "./toggle";
import { X } from "lucide-react";
import React from "react";
const meta = {
  title: "Atom/Toggle",
  component: Toggle,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    pressed: {
      control: { type: "boolean" },
    },
    size: {
      options: ["lg", "default", "sm"],
      control: { type: "select" },
      defaultValue: "default",
    },
    variant: {
      options: ["default", "outline"],
      control: { type: "select" },
      defaultValue: "default",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Toggle>;
export default meta;
const Template: StoryObj<typeof Toggle> = {
  render: (args) => (
    <Toggle {...args}>
      <X className="h-4 w-4" />
    </Toggle>
  ),
};
export const Primary = {
  ...Template,
  args: {},
};
