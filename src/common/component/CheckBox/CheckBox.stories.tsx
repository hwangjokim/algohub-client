import type { Meta } from "@storybook/react";
import CheckBox from ".";

const meta: Meta<typeof CheckBox> = {
  title: "Common/CheckBox",
  component: CheckBox,
  tags: ["autodocs"],
} satisfies Meta<typeof CheckBox>;
export default meta;

export const Default = {
  args: {
    checked: false,
  },
};

export const Checked = {
  args: {
    checked: true,
  },
};
