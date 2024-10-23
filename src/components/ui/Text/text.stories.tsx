import type {Meta, StoryObj} from "@storybook/react";
import { Text } from "./Text";

const meta: Meta<typeof Text> = {
    title: "Components/ui/Text",
    component: Text, 
    parameters: {
        // layout: "centered",
    }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: "Hello World", 
        weight: "normal",
        size: "base",
        align: "center"
    }
}