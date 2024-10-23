import { useState } from "react";
import type {Meta, StoryObj} from "@storybook/react";
import { Checkbox } from "./checkbox";
import { Label } from "../Label/label";

const meta: Meta<typeof Checkbox> = {
    title: "Components/ui/Checkbox",
    component: Checkbox, 
    parameters: {
        layout: "centered",
    }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
    render: (args) => <div className="items-top flex space-x-2">
        <Checkbox id="terms1" />
        <div className="grid gap-1.5 leading-none">
            <Label
                htmlFor="terms1"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                Accept terms and conditions
            </Label>
        <p className="text-sm text-muted-foreground">
            You agree to our Terms of Service and Privacy Policy.
        </p>
        </div>
    </div>
}