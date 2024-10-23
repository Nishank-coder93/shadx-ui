import type {Meta, StoryObj} from "@storybook/react";
import { Progress } from "./progress";

const meta: Meta<typeof Progress> = {
    title: "Components/ui/Progress",
    component: Progress, 
    parameters: {
        // layout: "centered",
    }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        value: 50,
    }
}