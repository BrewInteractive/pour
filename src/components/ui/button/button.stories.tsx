import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";
import React from "react";
import { Loader2 } from "lucide-react";

const meta = {
  title: "Example/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      options: ["lg", "default", "sm"],
      control: { type: "select" },
    },
    disabled: {
      control: { type: "boolean" },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;

const Template: StoryObj<typeof Button> = {
  render: (args) => <Button {...args}>Button Label</Button>,
};

const TemplateWithIcon: StoryObj<typeof Button> = {
  render: (args) => (
    <Button {...args} className="bg-primary text-primary-foreground">
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      Loading
    </Button>
  ),
};

export const Primary = {
  ...Template,
  args: {
    size: "default",
    variant: "default",
    onClick: () => {
      console.log("on click");
    },
  },
};

export const Secondary = {
  ...Template,
  args: {
    size: "default",
    variant: "secondary",
    onClick: () => {
      console.log("on click");
    },
  },
};

export const Destructive = {
  ...Template,
  args: {
    size: "default",
    variant: "destructive",
    onClick: () => {
      console.log("on click");
    },
  },
};

export const Outline = {
  ...Template,
  args: {
    size: "default",
    variant: "outline",
    onClick: () => {
      console.log("on click");
    },
  },
};

export const Ghost = {
  ...Template,
  args: {
    size: "default",
    variant: "ghost",
    onClick: () => {
      console.log("on click");
    },
  },
};

export const Link = {
  ...Template,
  args: {
    size: "default",
    variant: "link",
    onClick: () => {
      console.log("on click");
    },
  },
};

export const WithIcon = {
  ...TemplateWithIcon,
  args: {
    size: "default",
    variant: "primary",
    onClick: () => {
      console.log("on click");
    },
  },
};
