import type {Meta, StoryObj} from "@storybook/react";
import { ChevronRight } from "lucide-react"
import { Button } from "./button";


const meta: Meta<typeof Button> = {
    title: "Components/ui/Button",
    component: Button, 
    parameters: {
        layout: "centered",
    }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: "Click Me", 
        variant: "default", 
        size: "default"
    }
}

export const Outline: Story = {
    args: {
        children: "Click Me", 
        variant: "outline", 
        size: "default"
    }
}

export const Destructive: Story = {
    args: {
        children: "Click Me", 
        variant: "destructive", 
        size: "default"
    }
}

export const Secondary: Story = {
    args: {
        children: "Click Me", 
        variant: "secondary", 
        size: "default"
    }
}

export const Ghost: Story = {
    args: {
        children: "Click Me", 
        variant: "ghost", 
        size: "default"
    }
}

export const Link: Story = {
    args: {
        children: "Click Me", 
        variant: "link", 
        size: "default"
    }
}

export const SizeSmall: Story = {
    args: {
        children: "Click Me", 
        variant: "default", 
        size: "sm"
    }
}

export const SizeLarge: Story = {
    args: {
        children: "Click Me", 
        variant: "default", 
        size: "lg"
    }
}

export const SizeIcon: Story = {
    args: {
        children: <ChevronRight className="h-4 w-4" />, 
        variant: "default", 
        size: "icon"
    }
}