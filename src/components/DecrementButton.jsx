import {useContext} from "react";
import {StateContext} from "../context/state";

export const DecrementButton = () => {
    const {dispatch} = useContext(StateContext);

    return (
        <button
            onClick={() => {
                dispatch({
                    type: "decrement",
                    value: 1,
                });
            }}
        >
            Decrement
        </button>
    );
};
