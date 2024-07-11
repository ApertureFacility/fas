import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../dbRequests/userRequests';
import { IUser } from '../../interfaces/IUser';
import style from './RegistrationForm.module.css'

export function RegistrationForm() {
    const [name, setName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const navigate = useNavigate();

    function validateForm() {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const errors = {
            name: name.trim().length < 3 ? "Enter a name of more than 3 characters" : "",
            lastName: lastName.trim().length < 3 ? "Enter a last name of more than 3 characters" : "",
            password: password.trim().length < 8 ? "Enter a password of more than 8 characters" : "",
            email: !emailPattern.test(email.trim()) ? "Please enter a valid email" : "",
            phone: phone.trim() === "" ? "Please enter your phone number" : "",
        };

        return errors;
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(null);

        const errors = validateForm();
        const hasErrors = Object.values(errors).some(error => error !== "");

        if (hasErrors) {
            setError("Please fix the errors before submitting.");
            return;
        }

        setLoading(true);
        try {
            const user: IUser = await registerUser(email, password);
            console.log("User successfully registered:", user);
            navigate(`/all`);
        } catch (error: any) {
            setError(error.message || "Registration failed. Please try again.");
            console.error("Error registering user:", error);
        }
        setLoading(false);
    };

    return (
        <div className={style.form_container}>
            <h2 className={style.title}>Registration</h2>
            {error && <p>{error}</p>}
            {loading ? <p>Loading...</p> : (
                <form onSubmit={handleSubmit} className={style.form}>
                    <label className={style.label}>
                        Name:
                        <input
                            placeholder="Name"
                            className={style.input}
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </label>

                    <label className={style.label}>
                        Surname:
                        <input
                            placeholder="Surname"
                            className={style.input}
                            type="text"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </label>

                    <label className={style.label}>
                        Password:
                        <input
                            placeholder="Password"
                            className={style.input}
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>

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
                        Telephone:
                        <input
                            placeholder="Telephone"
                            className={style.input}
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </label>

                    <button className={style.button} type="submit">
                        Register
                    </button>
                </form>
            )}
        </div>
    );
}
