import {useReducer} from "react";

const reducer = (state, action) => {
    if (action.type === "increment") return {
        counter: state.counter + action.value
    };

    if (action.type === "decrement") return {
        counter: state.counter - action.value
    };

    if (action.type === "reset") return {
        counter: 0
    };

    throw new Error("Unknown action: ", action);
};

export const Reduce = () => {
    const [state, dispatch] = useReducer(reducer, {
        counter: 0
    });

    return (
        <div>
            <div>count is: {state.counter}</div>

            <div>
                <button onClick={() => dispatch({type: "increment", value: 1})}>Increment</button>
            </div>
            <div>
                <button onClick={() => dispatch({type: "decrement", value: 1})}>Decrement</button>
            </div>
            <div>
                <button onClick={() => dispatch({type: "reset"})}>Reset</button>
            </div>
        </div>
    );
};
