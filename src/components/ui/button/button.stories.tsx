import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";

const meta = {
  title: "Example/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;

const Template: StoryObj<typeof Button> = {
  render: (args) => <Button {...args}>Button Label</Button>,
};

export const Primary = {
  ...Template,
  args: {
    size: "lg",
    variant: "default",
    onClick: () => {
      console.log("on click");
    },
  },
};

export const Secondary = {
  ...Template,
  args: {
    size: "lg",
    variant: "secondary",
    onClick: () => {
      console.log("on click");
    },
  },
};

export const Link = {
  ...Template,
  args: {
    size: "lg",
    variant: "link",
    onClick: () => {
      console.log("on click");
    },
  },
};
