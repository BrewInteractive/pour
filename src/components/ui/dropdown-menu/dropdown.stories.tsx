import type { Meta, StoryObj } from "@storybook/react";

import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./dropdown-menu";

const meta = {
  title: "Atom/DropdownMenu",
  component: DropdownMenu,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DropdownMenu>;

export default meta;

const Template: StoryObj<typeof DropdownMenu> = {
  render: (args) => (
    <DropdownMenu>
      <DropdownMenuTrigger>Open</DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem inset>Source</DropdownMenuItem>
        <DropdownMenuItem>Upload PDF File</DropdownMenuItem>
        <DropdownMenuItem>Upload Word File (.docx)</DropdownMenuItem>
        <DropdownMenuItem>Import BibTeX</DropdownMenuItem>
        <DropdownMenuItem>Add reference manually</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem inset>Collection</DropdownMenuItem>
        <DropdownMenuItem>Create a new collection</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};

export const Default = {
  ...Template,
  args: {},
};
