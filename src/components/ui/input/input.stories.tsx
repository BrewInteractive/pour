import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./input";
import React from "react";

const meta = {
  title: "Example/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    disabled: {
      control: { type: "boolean" },
    },
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div
        style={{
          width: "500px",
        }}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Input>;

export default meta;

const Template: StoryObj<typeof Input> = {
  render: (args) => <Input {...args} />,
};

export const Default = {
  ...Template,
  args: {
    label: "Label",
    placeholder: "Placeholder",
  },
};

export const Disabled = {
  ...Template,
  args: {
    disabled: true,
    label: "Label",
    placeholder: "Placeholder",
  },
};

export const WithSuffixItem = {
  ...Template,
  args: {
    label: "Label",
    placeholder: "Placeholder",
    suffixItem: <div>suffix item</div>,
    prefixItemPadding: "pr-24",
  },
};

export const WithPrefixItem = {
  ...Template,
  args: {
    label: "Label",
    placeholder: "Placeholder",
    prefixItem: <div className="h-5">prefix item</div>,
    prefixItemPadding: "pl-24",
  },
};
