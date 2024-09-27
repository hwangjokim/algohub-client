import type { Meta, StoryObj } from "@storybook/react";
import Dropdown from ".";

const meta: Meta<typeof Dropdown> = {
  title: "Common/Dropdown",
  component: Dropdown,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/PBHmaVSKndAId6lY6G2qEb/AlgoHub?node-id=661-24238&t=tbiDTxMfb2kXOkUW-4",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Dropdown>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        type: "dynamic", // auto | dynamic | code
      },
    },
  },
  render: () => (
    <Dropdown>
      <li>a</li>
      <li>b</li>
      <li>c</li>
    </Dropdown>
  ),
};

export default meta;
