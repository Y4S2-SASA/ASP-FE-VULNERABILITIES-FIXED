import React, { useState } from "react";
import { loginUser } from "../../api/UserApi"
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import Button from "../../components/buttons/Buttons";

export default function Login() {
    const [credentials, setCredentials] = React.useState({});
    const [error, setError] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const url = loginUser(credentials);
			const { data: res } = await url;
            if(res.data) {
                localStorage.setItem("token", res.data);
                localStorage.setItem("userRole", res.userData.role);
                console.log(res.userData)
                window.location = "/items";
            }
        } catch (error) {
            if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        switch (name) {
            case 'email': {
                setCredentials({ ...credentials, email: value });
                break;
            }
            case 'password': {
                setCredentials({ ...credentials, password: value });
                break;
            }
            default: { }
        }
    }
    return (
        <div className={styles.login_container}>
			<div className={styles.login_form_container}>
				<div className={styles.left}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
                        <div className="">
                            <h1 className="font-sans italic subpixel-antialiased font-bold text-center text-slate-600 underline underline-offset-8">One of us?</h1>
                            <h4 className="font-mono">If you already has an account, just log in. We've missed you!</h4>
						</div>
                        <input
							type="email"
							placeholder="Email"
							name="email"
							onChange={handleChange}
							required
                            value={credentials.email}
							className={styles.input}
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange}
							required
                            value={credentials.password}
							className={styles.input}
						/>
						{error && <div className={styles.error_msg}>{error}</div>}
						<Button type="submit" variant="red">
							Login
						</Button>
					</form>
				</div>
				<div className={styles.right}>
					<h1>New Here ?</h1>
                    <h5>Register and discover great amount of new opportunities!</h5>
					<Link to="/register">
						<Button type="button" variant="alternative">
							Register Now!
						</Button>
					</Link>
				</div>
			</div>
		</div>
    )
}