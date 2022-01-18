import {useContext} from "react";
import {StateContext} from "../state";

export const Component2 = () => {
    const {counter, setCounter} = useContext(StateContext);

    return (
        <div>
            <div>
                counter is: {counter}
            </div>
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
