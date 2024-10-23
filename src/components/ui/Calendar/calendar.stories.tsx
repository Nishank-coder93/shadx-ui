import { useState } from "react";
import type {Meta, StoryObj} from "@storybook/react";
import { Calendar } from "./calendar";

const [date, setDate] = useState<Date | undefined>(new Date())

const meta: Meta<typeof Calendar> = {
    title: "Components/ui/Calendar",
    component: Calendar, 
    parameters: {
        layout: "centered",
    }, 
    // render: () => <Calendar
    //     mode="single"
    //     selected={date}
    //     onSelect={setDate}
    //     className="rounded-md border"
    // />
};

export default meta;

type Story = StoryObj<typeof meta>;
