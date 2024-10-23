import type {Meta, StoryObj} from "@storybook/react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./card";
import { Button } from "../Button/button";


const meta: Meta<typeof Card> = {
    title: "Components/ui/Card",
    component: Card, 
    parameters: {
        layout: "centered",
    }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const CardSample: Story = {
    args: {
    },
    render: () => (
        <Card className="max-w-md mx-auto">
            <CardHeader>
                <CardTitle>This is a Card Title</CardTitle>
                <CardDescription>Short description goes here.</CardDescription>
            </CardHeader>
            <CardContent>
                <p>This is some card content. It can be anything like text or other components.</p>
            </CardContent>
            <CardFooter>
                <Button variant="outline" size="sm">Action</Button>
            </CardFooter>
        </Card> 
    )
}