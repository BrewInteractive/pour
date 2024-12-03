import { Meta, StoryObj } from "@storybook/react";
import { Toaster } from "./toaster";
import React from "react";
import { toast } from "../../../hooks/use-toast";

// Meta configuration for Toaster
const meta = {
  title: "Example/Toaster",
  component: Toaster,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Toaster>;

export default meta;

const Template: StoryObj<typeof Toaster> = {
  render: (args) => (
    <div>
      <button
        onClick={() =>
          toast({
            title: args.title,
            description: args.description,
            variant: args.variant,
          })
        }
      >
        Show Toast
      </button>
      <Toaster />
    </div>
  ),
};

// Default Toaster
export const Default = {
  ...Template,
  args: {
    title: "Default Toast",
    description: "This is a default toast",
    variant: "default",
  },
};

// Destructive Toaster
export const Destructive = {
  ...Template,
  args: {
    title: "Destructive Toast",
    description: "This is a destructive toast",
    variant: "destructive",
  },
};
