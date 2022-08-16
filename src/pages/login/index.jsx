import React, { useState } from "react";
import { loginUser } from "../../api/UserApi"
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import Button from "../../components/buttons/Buttons";
import PreviewHeader from "../../components/PreviewPage/PreviewHeader";
import PreviewFooter from "../../components/PreviewPage/PreviewFooter";

export default function Login() {
    const [credentials, setCredentials] = React.useState({});
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const userLog = loginUser(credentials);
			const { data: res } = await userLog;
            if(res.data) {
                localStorage.setItem("token", res.data);
                localStorage.setItem("userRole", res.userData.role);
                localStorage.setItem("profilePic", res.userData.pic);
                console.log(res.userData)
                navigate("/items");
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
        <div className="container">
            <PreviewHeader />
            <div className={styles.login_container}>
                <div className={styles.login_form_container}>
                    <div className={styles.left}>
                        <form className={styles.form_container} onSubmit={handleSubmit}>
                            <div className="">
                                <h1 className="font-sans subpixel-antialiased font-bold text-center text-slate-600">One of Us?</h1>
                                <br />
                                <h4 className="font-mono font-thin">If you already has an account, just log in. We've missed you!</h4>
                            </div>
                            <br /><br />
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
                            <Button variant="red">
                                Login
                            </Button>
                        </form>
                    </div>
                    <div className={styles.right}>
                        <div className="">
                            <h1 className="font-sans subpixel-antialiased font-bold text-center text-white">New Here?</h1>
                            <br />
                            <h4 className="font-mono font-thin text-white px-10 text-center">Register and discover great amount of new opportunities!</h4>
                        </div>
                        <br />
                        <Link to="/register">
                            <Button type="button" variant="alternative" className="pt-10">
                                Register Now!
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
            {/* <PreviewFooter /> */}
        </div>
    )
}