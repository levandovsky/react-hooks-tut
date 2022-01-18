import { createContext } from "react";

export const StateContext = createContext({
    counter: "no counter set",
    setCounter: () => console.error("can't set counter")
})