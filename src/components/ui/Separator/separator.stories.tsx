import type {Meta, StoryObj} from "@storybook/react";
import { Separator } from "./separator";

const meta: Meta<typeof Separator> = {
    title: "Components/ui/Separator",
    component: Separator, 
    parameters: {
        // layout: "centered",
    }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        orientation: "horizontal",
        decorative: true,
        className: "my-4"
    }
}