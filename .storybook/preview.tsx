import React from "react";
import "../src/index.css";

import type { Preview } from "@storybook/react";
const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export const decorators = [
  (Story) => (
    <div style={{ padding: "1rem" }}>
      <Story />
    </div>
  ),
];

export default preview;
