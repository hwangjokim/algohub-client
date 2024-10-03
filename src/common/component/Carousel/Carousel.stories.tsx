import type { Meta, StoryObj } from "@storybook/react";
import { type default as Button, default as Carousel } from ".";

const meta: Meta<typeof Carousel> = {
  title: "Common/Carousel",
  component: Carousel,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  decorators: [
    (Story) => (
      <div style={{ width: "1377px" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

const Card = ({ color }: { color: string }) => {
  return (
    <div
      style={{
        width: "230px",
        height: "290px",
        borderRadius: "8px",
        fontSize: "40px",
        backgroundColor: "black",
        color: "white",
      }}
    >
      {color}
    </div>
  );
};

export const Default: Story = {
  args: {
    children: "Default Carousel",
  },
  render: () => (
    <Carousel length={15}>
      <Carousel.Item index={0}>
        <Card color="1" />
      </Carousel.Item>
      <Carousel.Item index={1}>
        <Card color="2" />
      </Carousel.Item>
      <Carousel.Item index={2}>
        <Card color="3" />
      </Carousel.Item>
      <Carousel.Item index={3}>
        <Card color="4" />
      </Carousel.Item>
      <Carousel.Item index={4}>
        <Card color="5" />
      </Carousel.Item>
      <Carousel.Item index={5}>
        <Card color="6" />
      </Carousel.Item>
      <Carousel.Item index={6}>
        <Card color="7" />
      </Carousel.Item>
      <Carousel.Item index={7}>
        <Card color="8" />
      </Carousel.Item>
      <Carousel.Item index={8}>
        <Card color="9" />
      </Carousel.Item>
      <Carousel.Item index={9}>
        <Card color="10" />
      </Carousel.Item>
      <Carousel.Item index={10}>
        <Card color="11" />
      </Carousel.Item>
      <Carousel.Item index={11}>
        <Card color="12" />
      </Carousel.Item>
      <Carousel.Item index={12}>
        <Card color="13" />
      </Carousel.Item>
      <Carousel.Item index={13}>
        <Card color="14" />
      </Carousel.Item>
      <Carousel.Item index={14}>
        <Card color="15" />
      </Carousel.Item>
      <Carousel.Item index={15}>
        <Card color="16" />
      </Carousel.Item>
    </Carousel>
  ),
};
