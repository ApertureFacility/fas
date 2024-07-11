import { createContext, useContext, useState, useEffect } from 'react';
import { IUser } from '../interfaces/IUser';


interface AuthContextType {
    isAuthenticated: boolean;
    setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
    user: IUser | null;
    setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
    login: (emai: IUser, token: string) => void;
    logout: () => void;
    loading: boolean;
}

export const AuthContext = createContext<AuthContextType>({
    isAuthenticated: false,
    setIsAuthenticated: () => { },
    user: null,
    setUser: () => { },
    login: () => { },
    logout: () => { },
    loading: false,
});


export const useAuth = () => useContext(AuthContext);

interface AuthProviderProps {
    children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [user, setUser] = useState<IUser | null>(null);
    const [loading, ] = useState<boolean>(false);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setIsAuthenticated(true);
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const login = (userData: IUser) => {
        setIsAuthenticated(true);
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
    };

    const logout = () => {
        setIsAuthenticated(false);
        setUser(null);
        localStorage.removeItem('user');
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, user, setUser, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};
