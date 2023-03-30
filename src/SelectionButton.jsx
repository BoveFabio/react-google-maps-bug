import {InfoBox} from "@react-google-maps/api";
import React from "react";

export const SelectionButton = (props) => {
    const handleClick = (event) => {
        console.log("selection button onClick");
        event.stopPropagation(); // comment out to see that both polygon and button receive click
    };

    return (
        <InfoBox
            position={props.position}
            options={{
                disableAutoPan: true,
                boxStyle: {width: "auto !important", transform: "translate(-50%, 50%) !important"},
            }}>
            <button
                onClick={handleClick}
                disabled={props.disabled}
                style={{width: 200, height: 100}}
            >
                Click me and check the console :)
            </button>
        </InfoBox>
    );
};
