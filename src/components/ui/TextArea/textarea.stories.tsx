import type {Meta, StoryObj} from "@storybook/react";
import { Textarea } from "./textarea";

const meta: Meta<typeof Textarea> = {
    title: "Components/ui/TextArea",
    component: Textarea, 
    parameters: {
        layout: "centered",
    }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        placeholder: "Enter your text here"
    }
}