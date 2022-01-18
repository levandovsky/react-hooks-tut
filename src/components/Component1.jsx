import {Component2} from "./Component2";
import {DecrementButton} from "./DecrementButton";

export const Component1 = () => {
    return (
        <div style={{border: "1px solid red", padding: "1rem", marginBottom: "1rem"}}>
            <h3>Component 1</h3>

            <div style={{marginBottom: "1rem"}}>
                <DecrementButton />
            </div>

            <Component2 />
        </div>
    );
};
