import type {Meta, StoryObj} from "@storybook/react";
import { Label } from "./label";


const meta: Meta<typeof Label> = {
    title: "Components/ui/Label",
    component: Label, 
    parameters: {
        layout: "centered",
    }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const LabelInput: Story = {
    args: {
        children: "First Name:", 
        htmlFor: "name"
    }
}