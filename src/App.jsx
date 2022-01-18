import "./App.css";

import {useReducer} from "react";
import {Component1} from "./components/Component1";
import {StateContext} from "./context/state";
import {WordInput} from "./components/WordInput";
import {StepInput} from "./components/StepInput";

const reducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return {
                ...state,
                counter: state.counter + state.step,
            };

        case "decrement":
            return {
                ...state,
                counter: state.counter - state.step,
            };

        case "reset": {
            return {
                ...state,
                counter: 0,
            };
        }

        case "updateWord":
            return {
                ...state,
                word: action.value,
            };

        case "updateStep":
            return {
                ...state,
                step: Number(action.value),
            };

        default:
            throw new Error("Unknown action: ", action.type);
    }
};

function App() {
    const [state, dispatch] = useReducer(reducer, {
        counter: 0,
        word: "",
        step: 1,
    });

    return (
        <div style={{border: "1px solid purple", padding: "1rem"}}>
            <h3>
                App component
            </h3>
            <StateContext.Provider value={{state, dispatch}}>
                <Component1 />
                <WordInput />
                <StepInput />
            </StateContext.Provider>
        </div>
    );
}

export default App;
