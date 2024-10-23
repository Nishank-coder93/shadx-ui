import type {Meta, StoryObj} from "@storybook/react";
import { Sidebar } from "./sidebar";


const meta: Meta<typeof Sidebar> = {
    title: "Components/functional/TopNavBar",
    component: Sidebar, 
    parameters: {
        // layout: "centered",
    }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
    render: (args) => <Sidebar {...args} />,
}