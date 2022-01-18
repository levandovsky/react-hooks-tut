import {StateContext} from "../state";
import {Component2} from "./Component2";

export const Component1 = (props) => {
    return (
        // <StateContext.Provider value={"hello world"}>
            <Component2 />
        // </StateContext.Provider>
    );
};
