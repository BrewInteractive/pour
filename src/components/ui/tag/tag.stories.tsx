import type { Meta, StoryObj } from "@storybook/react";
import Tag from "./tag";
import React from "react";

const meta = {
  title: "Example/Tag",
  component: Tag,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Tag>;

export default meta;

const Template: StoryObj<typeof Tag> = {
  render: (args) => <Tag {...args}> content</Tag>,
};

export const Default = {
  ...Template,
  args: {
    label: (
      <div className="font-semibold flex flex-row">
        Title: <div className="font-normal">Tag Example</div>
      </div>
    ),
  },
};

export const Secondary = {
  ...Template,
  args: {
    variant: "secondary",
    label: (
      <div className="font-semibold flex flex-row">
        Title: <div className="font-normal">Tag Example</div>
      </div>
    ),
  },
};

export const Outlined = {
  ...Template,
  args: {
    variant: "outlined",
    label: (
      <div className="font-semibold flex flex-row">
        Title: <div className="font-normal">Tag Example</div>
      </div>
    ),
  },
};

export const Small = {
  ...Template,
  args: {
    size: "sm",
    label: (
      <div className="font-semibold flex flex-row">
        Title: <div className="font-normal">Tag Example</div>
      </div>
    ),
  },
};

export const Large = {
  ...Template,
  args: {
    size: "lg",
    label: (
      <div className="font-semibold flex flex-row">
        Title: <div className="font-normal">Tag Example</div>
      </div>
    ),
  },
};

export const WithSuffix = {
  ...Template,
  args: {
    suffixItem: <div>suffix Item</div>,
    label: "Title",
  },
};

export const WithPrefix = {
  ...Template,
  args: {
    prefixItem: <div>prefix Item</div>,
    label: "Title",
  },
};

export const WithSuffixPrefix = {
  ...Template,
  args: {
    prefixItem: <div>prefix Item</div>,
    label: "Title",
    suffixItem: <div>suffix Item</div>,
  },
};

export const WithDifferentBG = {
  ...Template,
  args: {
    prefixItem: <div>prefix Item</div>,
    label: "Title",
    suffixItem: <div>suffix Item</div>,
    backgroundColor: "bg-destructive",
  },
};
