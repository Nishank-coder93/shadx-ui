import type {Meta, StoryObj} from "@storybook/react";
import { Menu } from "./menu";
import { TopNavBar } from "../TopNavBar/topnavbar";


const meta: Meta<typeof Menu> = {
    title: "Components/functional/Menu",
    component: Menu, 
    parameters: {
        // layout: "centered",
    }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
    render: (args) => (<div className="grid min-h-screen w-full grid-cols-[0px_1fr] sm:grid-cols-[60px_1fr] md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
                            <Menu {...args} />
                            <TopNavBar />
                        </div>)}