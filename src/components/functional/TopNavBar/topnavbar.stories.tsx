import type {Meta, StoryObj} from "@storybook/react";
import { TopNavBar } from "./topnavbar";


const meta: Meta<typeof TopNavBar> = {
    title: "Components/functional/TopNavBar",
    component: TopNavBar, 
    parameters: {
        // layout: "centered",
    }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
    render: (args) => <TopNavBar {...args} />,
}