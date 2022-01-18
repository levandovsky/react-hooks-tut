import {useContext} from "react";
import {CounterContext} from "../context/counter";
import {WordContext} from "../context/word";

export const Component2 = () => {
    const {counter, setCounter} = useContext(CounterContext);
    const word = useContext(WordContext);
    return (
        <div>
            <div>counter is: {counter}</div>
            <div>word is: {word}</div>
            <button
                onClick={() => {
                    setCounter((prev) => prev + 1);
                }}
            >
                Increment
            </button>
        </div>
    );
    // return <StateContext.Consumer>{(state) => <div>state is: {state}</div>}</StateContext.Consumer>;
};
