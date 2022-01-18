import {useContext} from "react";
import {StateContext} from "../context/state";

export const Component2 = () => {
    const {state, dispatch} = useContext(StateContext);

    return (
        <div style={{border: "1px solid blue", padding: "1rem"}}>
            <h3>
                Component 2
            </h3>
            <div>counter is: {state.counter}</div>
            <div>word is: {state.word}</div>
            <button
                onClick={() => {
                    dispatch({type: "increment", value: 1});
                }}
            >
                Increment
            </button>
        </div>
    );
};
