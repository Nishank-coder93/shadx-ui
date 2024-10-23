import type {Meta, StoryObj} from "@storybook/react";
import { Input } from "./input";
import { DatePicker } from "./datepicker";
import { DatePickerWithRange } from "./datepickerrange";


const meta: Meta<typeof Input> = {
    title: "Components/ui/Input",
    component: Input, 
    parameters: {
        layout: "centered",
    }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const TextInput: Story = {
    args: {
        type: "text",
        placeholder: "Type here"
    }
}

export const UploadFile: Story = {
    args: {
        type: "file"
    }
}

export const EmailInput: Story = {
    args: {
        disabled: false,
        type: "email",
        placeholder: "Email"
    }
}

export const PasswordInput: Story = {
    args: {
        type: "password",
        placeholder: "Type password here"
    }
}

export const DateInput: Story = {
    args: {},
    render: () => <DatePicker />
}

export const DateWithRangeInput: Story = {
    args: {},
    render: () => <DatePickerWithRange />
}