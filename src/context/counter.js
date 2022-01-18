import { createContext } from "react";

export const CounterContext = createContext({
    counter: "no counter set",
    setCounter: () => console.error("can't set counter")
})