import React from "react";

import {Large} from "../Input/Input.stories";
import {Primary} from "../Button/Button.stories";


// story within story
export default {
    title: 'Subscription'
}

export const PrimarySubscription = () => (
    <>
        <Large/>
        <Primary/>
    </>
)