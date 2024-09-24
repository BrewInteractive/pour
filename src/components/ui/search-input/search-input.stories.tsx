import type { Meta, StoryObj } from "@storybook/react";

import React from "react";

import { Mail, ArrowRight } from "lucide-react";
import SearchInput from "./search-input";

const meta = {
  title: "Atom/SearchInput",
  component: SearchInput,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      options: ["sm", "md"],
      control: { type: "select" },
    },
    disabled: {
      control: { type: "boolean" },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SearchInput>;

export default meta;

const Template: StoryObj<typeof SearchInput> = {
  render: (args) => (
    <div className="w-[150">
      <SearchInput {...args}></SearchInput>
    </div>
  ),
};

export const Primary = {
  ...Template,
  args: {
    prefixItem: <Mail size={16} />,
    text: "Menu Item",
    suffixItem: <ArrowRight size={16} />,
  },
};
