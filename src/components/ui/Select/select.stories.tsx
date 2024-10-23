import type {Meta, StoryObj} from "@storybook/react";
import { Select } from "./select";


const meta: Meta<typeof Select> = {
    title: "Components/ui/Select",
    component: Select, 
    parameters: {
        layout: "centered",
    }
};

export default meta;

type Story = StoryObj<typeof meta>;
