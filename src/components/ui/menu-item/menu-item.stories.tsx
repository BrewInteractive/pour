import type { Meta, StoryObj } from "@storybook/react";

import MenuItem from "./menu-item";
import React from "react";

import { Mail, ArrowRight } from "lucide-react";

const meta = {
  title: "Atom/MenuItem",
  component: MenuItem,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
  tags: ["autodocs"],
} satisfies Meta<typeof MenuItem>;

export default meta;

const Template: StoryObj<typeof MenuItem> = {
  render: (args) => (
    <div className="w-[222px]">
      <MenuItem {...args}></MenuItem>
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

export const Disabled = {
  ...Template,
  args: {
    prefixItem: <Mail size={16} />,
    text: "Menu Item",
    suffixItem: <ArrowRight size={16} />,
    disabled: true,
  },
};
