import React, { useState } from "react";
import { registerUser } from "../../api/UserApi";
import styles from "./styles.module.css";
import Button from "../../components/buttons/Buttons";
import PreviewHeader from "../../components/PreviewPage/PreviewHeader";
import PreviewFooter from "../../components/PreviewPage/PreviewFooter";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
    const [user, setUser] = React.useState({});
    const [error, setError] = useState("");
    const [picMessage, setPicMessage] = useState(null);
    const navigate = useNavigate();
    const [proPic, setProPic] = useState(
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
    
        );
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const userObj = {
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                contactNo: user.contactNo,
                password: user.password,
                pic: proPic
            };
            if (user.password !== user.confirmpassword) {
                setError(
                  "Passowrds do not match! Try again"
                );
            }
            const userReg = registerUser(userObj);
			const { data: res } = await userReg;
            if(res.data) {
                navigate("/login");
			    console.log(res.message);
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
            case 'firstName': {
                setUser({ ...user, firstName: value });
                break;
            }
            case 'lastName': {
                setUser({ ...user, lastName: value });
                break;
            }
            case 'email': {
                setUser({ ...user, email: value });
                break;
            }
            case 'contactNo': {
                setUser({ ...user, contactNo: value });
                break;
            }
            case 'password': {
                setUser({ ...user, password: value });
                break;
            }
            case 'pic': {
                setUser({ ...user, pic: value });
                break;
            }
            case 'confirmPassword': {
                setUser({ ...user, confirmPassword: value });
                break;
            }
            default: { }
        }
    }

    const onUploadImgToCloudinary = (pics) => {
        if (!pics) {
          return setPicMessage("Please select an Image");
        }
        setPicMessage(null);
        if (pics.type === "image/jpeg" || pics.type === "image/png") {
          const data = new FormData();
          data.append("file", pics);
          data.append("upload_preset", "trainerfg");
          data.append("cloud_name", "automobile-spare-parts");
          fetch("https://api.cloudinary.com/v1_1/automobile-spare-parts/image/upload", {
            method: "post",
            body: data,
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              setProPic(data.url.toString());
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          return setPicMessage("Please Select an Image");
        }
      };

    return (
        <div className="container mx-auto md:px-20">
            <PreviewHeader />
            <div className={styles.signup_container}>
                <div className={styles.signup_form_container}>
                    <div className={styles.left}>
                            <div className="">
                                <h1 className="font-sans subpixel-antialiased font-bold text-center text-slate-600">One of Us?</h1>
                                <br />
                                <h4 className="font-mono font-thin text-white px-10 text-center">If you already has an account, just log in. We've missed you!</h4>
                            </div>
                            <br />
                        <Link to="/login">
                            <Button type="button" variant="alternative">
                                Login Now!
                            </Button>
                        </Link>
                    </div>
                    <div className={styles.right}>
                        <form className={styles.form_container} onSubmit={handleSubmit}>
                            <div className="">
                                <h1 className="font-sans subpixel-antialiased font-bold text-center text-slate-600">New Here?</h1>
                                <br />
                                <h4 className="font-mono font-thin px-10 text-center">Register and discover great amount of new opportunities!</h4>
                            </div>
                            <br />
                            <div className="grid grid-cols-1 md:grid-cols-2 space-x-3">
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    name="firstName"
                                    onChange={handleChange}
                                    value={user.firstName}
                                    required
                                    className={styles.input}
                                    style={{marginLeft: "10px"}}
                                />
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    name="lastName"
                                    onChange={handleChange}
                                    value={user.lastName}
                                    required
                                    className={styles.input}
                                />
                                <input
                                    type="email"
                                    placeholder="Email"
                                    name="email"
                                    onChange={handleChange}
                                    value={user.email}
                                    required
                                    className={styles.input}
                                />
                                <input
                                    type="text"
                                    placeholder="Contact No"
                                    name="contactNo"
                                    onChange={handleChange}
                                    value={user.contactNo}
                                    required
                                    className={styles.input}
                                />
                                <input
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    onChange={handleChange}
                                    value={user.password}
                                    required
                                    className={styles.input}
                                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                    title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                                />
                                <input
                                    type="password"
                                    placeholder="Confirm Password"
                                    name="confirmpassword"
                                    onChange={handleChange}
                                    value={user.confirmpassword}
                                    required
                                    className={styles.input}
                                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                    title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                                />
                            </div>
                            <h4 className="font-mono font-thin px-10 text-center">Optional - Choose profile picture</h4>
                            <div className="grid grid-cols-1 md:grid-cols-1 space-x-2">
                                <input
                                    className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                    id="file_input"
                                    type="file"
                                    size="80"
                                    onChange={(e) => onUploadImgToCloudinary(e.target.files[0])}
                                />
                            </div>
                            {error && <div className={styles.error_msg}>{error}</div>}
                            <Button variant="red">
                                Register
                            </Button>
                        </form>
                    </div>
                </div>
		    </div>
            <PreviewFooter />
        </div>
    )
}