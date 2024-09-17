import type { Meta, StoryObj } from '@storybook/react';
import OnboardingPage from './page';

const meta: Meta<typeof OnboardingPage> = {
	title: "page/onboarding",
  component: OnboardingPage,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
    design: {
      type: "figma",
      url: "https://www.figma.com/design/PBHmaVSKndAId6lY6G2qEb/AlgoHub?node-id=491-26604&t=BZcUqksImvGD8cnl-4",
    },
  },
};

type Story = StoryObj<typeof OnboardingPage>;
 
// If you have the actions addon,
// you can interact with the links and see the route change events there
export const Onboarding: Story = {
  parameters: {
    nextjs: {
      navigation: {
        pathname: '/',
      },
    },
  },
};

export default meta;