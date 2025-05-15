import {createContext, useContext, useEffect, useRef, useState} from "react";
import {Authentication} from "../api/Authentication";
import {jwtDecode} from "jwt-decode";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isSignedIn, setIsSignedIn] = useState(false);
    const logOutTimerRef = useRef(null);

    useEffect(() => {
        setIsSignedIn(Authentication.hasToken());

        const token = Authentication.getToken();
        console.log("Token: ", token);
        if (token) {
            const decoded = jwtDecode(token);
            if (decoded.exp * 1000 > Date.now()) {
                signIn()
            } else {
                signOut();
            }
        }
    }, []);

    const setLogOutTimer = (token) => {
        const decoded = jwtDecode(token);
        const expirationTime = decoded.exp * 1000 - Date.now();
        console.log("Expiration time: ", expirationTime);
        logOutTimerRef.current = setTimeout(() => {
            signOut();
        }, expirationTime);
    }

    const signIn = () => {
        setIsSignedIn(true);
        setLogOutTimer(Authentication.getToken());
    };

    const signOut = () => {
        setIsSignedIn(false);
        clearTimeout(logOutTimerRef.current);
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