import { arrow, exitGroup, requireLogin } from "@/asset/lottie";
import Animation from "@/common/component/Animation";
import type { Meta } from "@storybook/react";

const meta: Meta<typeof Animation> = {
  title: "Shared/Animation",
  component: Animation,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: { control: "text" },
    loop: { control: "boolean" },
  },
} satisfies Meta<typeof Animation>;

export default meta;

export const Default = () => (
  <Animation size="100px" animationJson={arrow} />
);

export const NoLoop = () => (
  <Animation size="100px" animationJson={arrow} loop={false} />
);

export const ExitGroup = () => (
  <Animation size="100px" animationJson={exitGroup} />
);

export const RequireLogin = () => (
  <Animation size="100px" animationJson={requireLogin} />
);
