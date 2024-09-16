import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "./textarea";
import React from "react";

const meta = {
  title: "Example/Textarea",
  component: Textarea,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Textarea>;

export default meta;

const Template: StoryObj<typeof Textarea> = {
  render: (args) => (
    <div className="w-[350px]">
      <Textarea {...args}></Textarea>
    </div>
  ),
};

export const Default = {
  ...Template,
  args: {
    placeholder: "Type your message here",
  },
};

export const Disabled = {
  ...Template,
  args: {
    placeholder: "Type your message here",
    disabled: true,
  },
};
