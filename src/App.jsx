import {useState} from "react";
import "./App.css";
import {Component1} from "./components/Component1";
import {CounterContext} from "./context/counter";
import {WordContext} from "./context/word";

function App() {
    const [counter, setCounter] = useState(0);
    const [word, setWord] = useState("");
    const handleChange = (e) => {
        setWord(e.target.value);
    };

    return (
        <div className="App">
            <CounterContext.Provider value={{counter, setCounter}}>
                <WordContext.Provider value={word}>
                    <Component1 />
                </WordContext.Provider>
            </CounterContext.Provider>

            <div>
                <label htmlFor="word">Word: </label>
                <input name="word" value={word} onChange={handleChange} />
            </div>
        </div>
    );
}

export default App;
