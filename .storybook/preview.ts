import type { Preview } from "@storybook/react";
import DocsPage from "./DocsPage";
import decorators from "./decorators";
import customViewports from "./viewport";

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
    docs: {
      page: DocsPage,
    },
  },
  decorators: [decorators],
};

export default preview;
