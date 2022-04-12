import Input from "./Input";
import React from "react";


export default {
    title:'Input',
    component: Input
}

export const Small = () => <Input size='small' placeholder="small"/>
export const Medium = () => <Input size='medium' placeholder="medium"/>
export const Large = () => <Input size='large' placeholder="large"/>