import {createContext} from "react";

export const defaultState = {
    counter: 0,
    word: "",
    step: 1
}

export const StateContext = createContext({
    state: defaultState,
    dispatch: () => console.error("No dispatch fn set!")
});
