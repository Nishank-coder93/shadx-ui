import type {Meta, StoryObj} from "@storybook/react";
import { Toggle } from "./toggle";

const meta: Meta<typeof Toggle> = {
    title: "Components/ui/Toggle",
    component: Toggle,
    parameters: {
        layout: "centered"
    }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultToggle: Story = {
    args: {
        children: "B",
        variant: "default",
        size: "default"
        }
}

export const OutlineToggle: Story = {
    args: {
        children: "B",
        variant: "outline",
        size: "default"
        }
}

export const SmallToggle: Story = {
    args: {
        children: "B",
        variant: "outline",
        size: "sm"
        }
}

export const LargeToggle: Story = {
    args: {
        children: "B",
        variant: "outline",
        size: "lg"
        }
}