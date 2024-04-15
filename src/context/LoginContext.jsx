"use client"

import UserReducer from "@/reducers/UserReducer";
import { createContext, useContext, useReducer } from "react";

export const LoginContext = createContext();

const inititalState = {
    name: 'Robson',
    token: ''
}

const LoginProvider = ({ children }) => {
    const [user, dispath] = useReducer(UserReducer, inititalState);

    return (
        <LoginContext.Provider value={{ user, dispath }}>
            {children}
        </LoginContext.Provider>
    );
};
export default LoginProvider;

export const useLoginContext = () => useContext(LoginContext);
