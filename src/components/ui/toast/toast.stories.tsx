import { Meta, StoryObj } from "@storybook/react";
import { Toast, ToastProvider, ToastViewport } from "./toast";
import React from "react";

// Meta configuration for Toast
const meta = {
  title: "Example/Toast",
  component: Toast,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Toast>;

export default meta;

const Template: StoryObj<typeof Toast> = {
  render: (args) => (
    <ToastProvider>
      <Toast {...args}>
        <div className="grid gap-1">
          {args.title && <div>{args.title}</div>}
        </div>
      </Toast>
      <ToastViewport />
    </ToastProvider>
  ),
};

// Default Toast
export const Default = {
  ...Template,
  args: {
    title: "Default Toast",
    variant: "default",
  },
};

// Destructive Toast
export const Destructive = {
  ...Template,
  args: {
    title: "Destructive Toast",
    variant: "destructive",
  },
};
