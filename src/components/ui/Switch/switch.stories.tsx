import type {Meta, StoryObj} from "@storybook/react";
import { Switch } from "./switch";


const meta: Meta<typeof Switch> = {
    title: "Components/ui/Switch",
    component: Switch, 
    parameters: {
        layout: "centered",
    }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const SwitchInput: Story = {
    args: {
    }
}