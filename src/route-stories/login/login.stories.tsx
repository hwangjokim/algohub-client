import LoginPage from "@/app/login/page";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof LoginPage> = {
  title: "page/login",
  component: LoginPage,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/PBHmaVSKndAId6lY6G2qEb/AlgoHub?node-id=491-26813&t=v3cWaUsqKFumfCGL-4",
    },
  },
};

type Story = StoryObj<typeof LoginPage>;

export const Login: Story = {
  parameters: {
    nextjs: {
      navigation: {
        pathname: "/login",
      },
    },
  },
};

export default meta;
