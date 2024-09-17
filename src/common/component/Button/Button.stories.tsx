import type { Meta } from "@storybook/react";
import Button from ".";

const meta: Meta<typeof Button> = {
  title: "Common/Button",
  component: Button,
  parameters: {
    layout: "centered",
    design: {
      type: "figma",
      url: "https://www.figma.com/design/PBHmaVSKndAId6lY6G2qEb/AlgoHub?node-id=500-25826&t=BZcUqksImvGD8cnl-4",
    },
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    color: {
      control: { type: "select" },
      options: ["purple", "gray", "lg"],
    },
    onClick: { action: "clicked" },
  },
} satisfies Meta<typeof Button>;

export default meta;

export const Default = () => (
  <Button size="small" color="purple">
    Default Button
  </Button>
);

export const MediumGrayButton = () => (
  <Button size="medium" color="gray">
    Medium Gray Button
  </Button>
);

export const LargeLgButton = () => (
  <Button size="large" color="lg">
    Large LG Button
  </Button>
);
