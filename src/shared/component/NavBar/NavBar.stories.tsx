import NavBarItem from "@/shared/component/NavBar/Item";
import type { Meta, StoryObj } from "@storybook/react";
import NavBar from ".";

const meta: Meta<typeof NavBar> = {
  title: "Shared/NavBar",
  component: NavBar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof NavBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return (
      <NavBar>
        <NavBarItem href="/">대시보드</NavBarItem>
        <NavBarItem href="/group">문제 리스트</NavBarItem>
        <NavBarItem href="/study">스터디 관리</NavBarItem>
      </NavBar>
    );
  },
};
