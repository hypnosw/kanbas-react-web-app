import React from 'react';
import JavaScript from "./JavaScript";
import PathParameters from "./PathParameters";
import DynamicStyling from "./DynamicStyling";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import TodoItem from "./todo/TodoItem";

function Assignment3() {
    return (
        <div>
            <h1>Assignment 3</h1>
            <ConditionalOutput/>
            <Classes/>
            <Styles/>
            <JavaScript/>
            <PathParameters/>
            <DynamicStyling/>
            <TodoItem/>
        </div>
    );
}
export default Assignment3;