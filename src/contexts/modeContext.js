import { createContext, useContext } from "react";

export const modeContext = createContext({
    darkMode: false,
    setDarkMode: null,
});

export const  ModeProvider = modeContext.Provider

export function useMode(){
    return useContext(modeContext)
}