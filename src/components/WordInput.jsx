import {useContext} from "react";
import {StateContext} from "../context/state";

export const WordInput = () => {
    const {state, dispatch} = useContext(StateContext);

    const changeWord = (e) => {
        dispatch({type: "updateWord", value: e.target.value});
    };

    return (
        <div style={{marginBottom: "1rem"}}>
            <label htmlFor="word">Word: </label>
            <input name="word" value={state.word} onChange={changeWord} type="text" />
        </div>
    );
};
