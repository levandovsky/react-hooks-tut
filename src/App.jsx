import {useState} from "react";
import "./App.css";
import {Component1} from "./components/Component1";
import {CounterContext} from "./context/counter";

function App() {
    const [counter, setCounter] = useState(0);

    return (
        <div className="App">
            <CounterContext.Provider value={{counter, setCounter}}>
                <Component1 />
            </CounterContext.Provider>
        </div>
    );
}

export default App;
