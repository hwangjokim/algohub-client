import type { Meta, StoryObj } from "@storybook/react";
import Input from ".";
import ErrorInfo from ".";

const meta: Meta<typeof Input> = {
  title: "Common/ErrorInfo",
  component: Input,
  parameters: {
    layout: "centered",
    design: {
      type: "figma",
      url: "https://www.figma.com/design/PBHmaVSKndAId6lY6G2qEb/AlgoHub?node-id=991-32459&t=XsvrHzrA7CWMznr8-1",
    },
  },
  tags: ["autodocs"],
  argTypes: {
    isError: {
      control: { type: "boolean" },
    },
    errorMsg: {
      control: { type: "text" },
    },
  },
} satisfies Meta<typeof ErrorInfo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isError: true,
    errorMsg: "An error occurred",
  },
  render: (props) => <ErrorInfo {...props} />,
};
