import type {Meta, StoryObj} from "@storybook/react";
import { ChevronRight } from "lucide-react"
import { Badge } from "./badge";


const meta: Meta<typeof Badge> = {
    title: "Components/ui/Badge",
    component: Badge, 
    parameters: {
        layout: "centered",
    }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: "badge", 
        variant: "default"
    }
}

export const Secondary: Story = {
    args: {
        children: "badge", 
        variant: "secondary"
    }
}

export const Destructive: Story = {
    args: {
        children: "badge", 
        variant: "destructive"
    }
}

export const Outline: Story = {
    args: {
        children: "badge", 
        variant: "outline"
    }
}