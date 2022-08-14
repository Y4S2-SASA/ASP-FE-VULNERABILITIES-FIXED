import React, { useState } from "react";
import { loginUser } from "../../api/UserApi"
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

export default function Login() {
    const [credentials, setCredentials] = React.useState({});
    const [error, setError] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            loginUser(credentials)
            .then(res => {
                console.log(res)
                if (res.data) {
                    localStorage.setItem("token", res.data);
                    // window.location.href = '/items';
                } else {
                    alert('Login failed!');
                }
            }).catch((error) => {
                if (
                    error.response &&
                    error.response.status >= 400 &&
                    error.response.status <= 500
                ) {
                    setError(error.response.data.message);
                }
            });
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
						<h1>Login to Your Account</h1>
						<input
							type="email"
							placeholder="Email"
							name="email"
							onChange={handleChange}
							required
							className={styles.input}
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange}
							required
							className={styles.input}
						/>
						{error && <div className={styles.error_msg}>{error}</div>}
						<button type="submit" className={styles.green_btn}>
							Signin
						</button>
					</form>
				</div>
				<div className={styles.right}>
					<h1>New Here ?</h1>
					<Link to="/signup">
						<button type="button" className={styles.white_btn}>
							Sing Up
						</button>
					</Link>
				</div>
			</div>
		</div>
    )
}