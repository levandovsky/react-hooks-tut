import {useState} from "react";
import "./App.css";
import {Component1} from "./components/Component1";
import {StateContext} from "./state";

function App() {
    const [counter, setCounter] = useState(0);

    return (
        <div className="App">
            <StateContext.Provider value={{counter, setCounter}}>
                <Component1 />
            </StateContext.Provider>
        </div>
    );
}

export default App;
