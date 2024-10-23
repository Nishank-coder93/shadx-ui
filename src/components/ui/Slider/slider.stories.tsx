import type {Meta, StoryObj} from "@storybook/react";
import { Slider } from "./slider";


const meta: Meta<typeof Slider> = {
    title: "Components/ui/Slider",
    component: Slider, 
    parameters: {
    }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const SliderInput: Story = {
    args: {
        defaultValue: [0.5],
        max: 1, 
        step: 0.01
    }
}