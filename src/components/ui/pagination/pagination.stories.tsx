import type { Meta, StoryObj } from "@storybook/react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationInnerItem,
  PaginationNext,
  PaginationPrevious,
} from "./pagination";
import React from "react";

const meta = {
  title: "Atom/Pagination",
  component: Pagination,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
  tags: ["autodocs"],
} satisfies Meta<typeof Pagination>;

export default meta;

const Template: StoryObj<typeof Pagination> = {
  render: (args) => (
    <Pagination {...args}>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            size="default"
            onClick={() => console.log("prev")}
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationInnerItem
            isActive
            size="default"
            onClick={() => console.log("prev")}
          >
            1
          </PaginationInnerItem>
        </PaginationItem>

        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext size="default" onClick={() => console.log("prev")} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  ),
};

export const Primary = {
  ...Template,
  args: {},
};
