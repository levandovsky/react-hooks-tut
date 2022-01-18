import {useContext} from "react";
import {StateContext} from "../context/state";

export const StepInput = () => {
    const {state, dispatch} = useContext(StateContext);

    const changeStep = (e) => {
        dispatch({type: "updateStep", value: e.target.value});
    };

    return (
        <div>
            <label htmlFor="step">Counter step: </label>
            <input name="step" value={state.step} onChange={changeStep} type="number" />
        </div>
    );
};
