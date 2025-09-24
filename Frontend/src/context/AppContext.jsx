import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
export const AppContext = createContext();
import axios from "axios";
axios.defaults.baseURL=import.meta.env.VITE_BASEURL;
axios.defaults.withCredentials = true;

const AppContextProvider = ({children}) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const value = { navigate, user, setUser,axios, };
    return (
        <AppContext.Provider value={value}>{children}</AppContext.Provider>
    )
}

export default AppContextProvider;