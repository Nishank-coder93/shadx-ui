import type {Meta, StoryObj} from "@storybook/react";
import { 
    Popover,
    PopoverContent,
    PopoverTrigger 
} from "./popover";

const meta: Meta<typeof PopoverContent> = {
    title: "Components/ui/Popover",
    component: PopoverContent, 
    parameters: {
        layout: "centered",
    }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        align: "start",
        sideOffset: 10
    },
    render: (args) => (<Popover>
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent {...args}>Place content for the popover here.</PopoverContent>
    </Popover>)
}
