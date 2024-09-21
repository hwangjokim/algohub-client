import type { Meta, StoryObj } from "@storybook/react";
import Textarea from ".";

const meta: Meta<typeof Textarea> = {
  title: "Common/Textarea",
  component: Textarea,
  parameters: {
    layout: "centered",
    design: {
      type: "figma",
      url: "https://www.figma.com/design/PBHmaVSKndAId6lY6G2qEb/AlgoHub?node-id=991-32459&t=XsvrHzrA7CWMznr8-1",
    },
  },
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: { type: "text" },
    },
    isError: {
      control: { type: "boolean" },
    },
    errorMsg: {
      control: { type: "text" },
    },
    errorPosition: {
      control: { type: "select" },
      options: ["top", "bottom"],
    },
    handleChange: {
      action: "handleChange",
    },
  },
} satisfies Meta<typeof Textarea>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "default",
  },
  render: (props) => <Textarea {...props} />,
};

export const ErrorTextarea: Story = {
  args: {
    isError: true,
    placeholder: "error",
    errorMsg: "error message",
  },
  render: (props) => <Textarea {...props} />,
};

export const ErrorTextareaWithTop: Story = {
  args: {
    isError: true,
    placeholder: "error",
    errorMsg: "error message at top",
    errorPosition: "top",
  },
  render: (props) => <Textarea {...props} />,
};
