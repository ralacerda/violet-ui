import type { Meta, StoryObj } from "@storybook/vue";
import { userEvent, within } from "@storybook/testing-library";
import VButton from "@/components/VButton.vue";
import { expect } from "@storybook/jest";

const meta: Meta<typeof VButton> = {
  component: VButton,
  title: "Button",
  render: (_args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { VButton },
    template: '<VButton v-bind="$props" @click="click" />',
  }),
  args: {
    label: "Button",
    fill: false,
    disabled: false,
  },
  argTypes: {
    click: {
      action: "the button was clicked",
      control: false,
    },
    variant: {
      control: { type: "select" },
    },
    icon: {
      control: { type: "select" },
      options: ["account-circle", "done", "open-in-new"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Primary: Story = {
  args: {
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
};

export const FullWidth: Story = {
  args: {
    fill: true,
  },
};

export const Interaction: Story = {
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button");
    await userEvent.click(button);
    await expect(args.click).toHaveBeenCalled();
  },
};

export const WithIcon: Story = {
  args: {
    icon: "account-circle",
  },
};
