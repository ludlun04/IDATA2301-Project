import {createContext, useContext, useEffect, useState} from "react";
import {Authentication} from "../api/Authentication";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isSignedIn, setIsSignedIn] = useState(false);

    useEffect(() => {
        setIsSignedIn(Authentication.isSignedIn());
    }, []);

    const signIn = () => {
        setIsSignedIn(true);
    };

    const signOut = () => {
        setIsSignedIn(false);
        Authentication.logout();
    };

    return (
        <AuthContext.Provider value={{ isSignedIn, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    return useContext(AuthContext);
};