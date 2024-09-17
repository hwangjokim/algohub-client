import { Controls, Primary, Stories, Subtitle, Title } from '@storybook/blocks';
import type { Preview } from "@storybook/react";
import React from "react";
import ModifiedDescription from './Description';
import { withAppRouterContext } from "./WithAppRouterContext";
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
      page: () => (
        <>
          <Title />
          <Subtitle />
          <ModifiedDescription />
          <Primary />
          <Controls />
          <Stories />
        </>
      ),
    }
  },
  decorators: [withAppRouterContext],
};

export default preview;
