import type { Preview } from "@storybook/react";
import customViewports from "./viewport";
import { withAppRouterContext } from "./withAppRouterContext";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      viewports: {
        ...customViewports,
      },
    },
    nextjs: {
      appDirectory: true,
    },
  },
  decorators: [withAppRouterContext],
};

export default preview;
