import Button from "./Button";
import React from "react";


export default {
    title: 'Button',
    component: Button,
    args: {
        children: 'Button'
    }
}

export const Primary = () => <Button variant='primary'>Primary</Button>
export const Secondary = () => <Button variant='secondary'>Secondary</Button>
export const Success = () => <Button variant='success'>Success</Button>
export const Danger = () => <Button variant='danger'>Danger</Button>

//args

const Template = args => <Button {...args}/>

export const PrimaryA = Template.bind({});
PrimaryA.args = {
    variant:'primary',
    children: 'Primary Args' // override the component level story args
}

export const LongPrimaryA = Template.bind({});
LongPrimaryA.args = {
    ...PrimaryA.args,
    children:'Long Primary A'
}

export const SecondaryA = Template.bind({});
SecondaryA.args = {
    variant:'secondary',
    children: 'Secondary Args'
}