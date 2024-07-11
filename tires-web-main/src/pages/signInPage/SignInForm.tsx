import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { signIn } from '../../dbRequests/userRequests';
import { IUser } from '../../interfaces/IUser';
import style from './SignInForm.module.css'

export function SignInForm() {
    const { login, setUser } = useContext(AuthContext);
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const navigate = useNavigate();

    async function handleSignIn(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            const user: IUser = await signIn(email, password);
            login(user, "user");
            setUser(user);
            localStorage.setItem('user', JSON.stringify(user));
            navigate(`/all`);  
        } catch (error) {
            if (error instanceof Error) {
                setErrorMessage(error.message || "Failed to sign in");
            } else {
                setErrorMessage("An unknown error occurred");
            }
        }
    }

    return (
        <div className={style.form_container}>
            <h2 className={style.title}>Sign In</h2>
            {errorMessage && <p>{errorMessage}</p>}
            <form onSubmit={handleSignIn} className={style.form}>
                <label className={style.label}>
                    Email:
                    <input
                        className={style.input}
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <label className={style.label}>
                    Password:
                    <input
                        className={style.input}
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <button className={style.button} type="submit">
                    Sign In
                </button>
            </form>
        </div>
    );
}