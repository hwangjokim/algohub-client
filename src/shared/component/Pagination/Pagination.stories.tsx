import type { Meta } from "@storybook/react";
import { type ComponentProps, useState } from "react";
import Pagination from ".";

// 기본 Storybook 설정 (CSF3)
const meta: Meta<typeof Pagination> = {
  title: "Shared/Pagination",
  component: Pagination,
  tags: ["autodocs"], // Storybook에서 자동으로 문서화되는 기능 활용
  argTypes: {
    count: {
      description: "총 페이지 수",
      control: { type: "number" },
      defaultValue: 10,
    },
    currentPage: {
      description: "현재 페이지 번호",
      control: { type: "number" },
      defaultValue: 1,
    },
    onPageChange: {
      description: "페이지가 변경될 때 호출되는 함수",
      action: "페이지 변경됨",
    },
  },
} satisfies Meta<typeof Pagination>;
export default meta;

// 템플릿 함수 생성
const Template = (args: ComponentProps<typeof Pagination>) => {
  const [page, setPage] = useState(args.currentPage);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    args.onPageChange(newPage); // Storybook action 호출
  };

  return <Pagination {...args} currentPage={page} onPageChange={handlePageChange} />;
};

export const Default = {
  args: {
    count: 10,
    currentPage: 1,
  },
  render: Template,
};

export const Small = {
  args: {
    count: 5,
    currentPage: 1,
  },
  render: Template,
};

export const Large = {
  args: {
    count: 20,
    currentPage: 1,
  },
  render: Template,
};

export const MidPageStart = {
  args: {
    count: 10,
    currentPage: 5,
  },
  render: Template,
};

export const LastPageStart = {
  args: {
    count: 10,
    currentPage: 10,
  },
  render: Template,
};
