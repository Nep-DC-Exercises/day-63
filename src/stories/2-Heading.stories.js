import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, object } from "@storybook/addon-knobs";
import Heading from "../components/Heading";

storiesOf("Heading", module)
    .addDecorator(withKnobs)
    .add("with string", () => {
        const style = {
            fontSize: "128px"
        };
        return (
            <Heading
                style={object("Style", style)}
                text={text("heading text", "Hello World")}
            />
        );
    });
