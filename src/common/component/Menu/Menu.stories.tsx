import { IcnAlarm, IcnBtnArrowDown } from "@/asset/svg";
import type { Meta, StoryObj } from "@storybook/react";
import Dropdown from "../Dropdown";
import Menu from "./Menu";

const meta: Meta<typeof Menu> = {
  title: "Common/Menu",
  component: Menu,
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
} satisfies Meta<typeof Menu>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        type: "dynamic", // auto | dynamic | code
      },
    },
  },
  render: () => {
    const TriggerButton = ({
      ...props
    }: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
      return (
        <button {...props}>
          <IcnAlarm width="2.5rem" height="2.5rem" />
        </button>
      );
    };
    return (
      <Menu
        label="default"
        renderTriggerButton={<TriggerButton />}
        renderList={
          <Dropdown>
            <li>a</li>
            <li>b</li>
            <li>c</li>
          </Dropdown>
        }
      />
    );
  },
};

export const Language: Story = {
  parameters: {
    docs: {
      source: {
        type: "dynamic", // auto | dynamic | code
      },
    },
  },
  render: () => {
    const TriggerButton = ({
      ...props
    }: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
      return (
        <button {...props} style={{width: "11.2rem", height: "3.6rem"}}>
          <span>모든 언어</span> <IcnBtnArrowDown width={"2rem"} height={"2rem"} />
        </button>
      );
    };
    return (
      <Menu
        label="language"
        renderTriggerButton={<TriggerButton />}
        renderList={
          <Dropdown>
            <li>C++</li>
            <li>Java</li>
            <li>Python</li>
            <li>C</li>
            <li>Rust</li>
          </Dropdown>
        }
      />
    );
  },
};

export default meta;
