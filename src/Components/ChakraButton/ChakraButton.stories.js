import {Button} from "@chakra-ui/core";
import React from "react";


export default {
    title:'Chakra/Button',
    component: Button,
    argTypes: {
        onClick: { action: 'clicked' }
        },
}

const Template = args => <Button {...args}/>


export const Success = Template.bind({});
Success.args = {
    variantColor:'green',
    children: 'Success',
}

// export const Success = () => <Button variantColor='green'>Success</Button>
// export const Danger = () => <Button variantColor='red'>Success</Button>