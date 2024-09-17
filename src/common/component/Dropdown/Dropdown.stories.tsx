import { IcnAlarm } from "@/asset/svg";
import Menu from "@/shared/component/Header/Menu";
import type { Meta } from "@storybook/react";
import Dropdown from ".";

const meta: Meta<typeof Dropdown> = {
  title: "Shared/Dropdown",
  component: Dropdown,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/PBHmaVSKndAId6lY6G2qEb/AlgoHub?node-id=661-24238&t=tbiDTxMfb2kXOkUW-4",
    },
  },
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
  },
} satisfies Meta<typeof Dropdown>;

export default meta;

export const Default = () => (
  <Menu
    label="test"
    renderTriggerIcon={<IcnAlarm width={"2.5rem"} height={"2.5rem"} />}
    renderList={
      <Dropdown label="test">
        <li>a</li>
        <li>b</li>
        <li>c</li>
      </Dropdown>
    }
  />
);

Default.parameters = {
  docs: {
    source: {
      type: "dynamic",
    },
  },
};