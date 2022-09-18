import React, { useRef } from 'react';
import styles from './login.module.css'
import instagramlogo from '../../imgs/instagram logo.png';
import Navbar from '../Navbar/Navbar';
import { useState } from "react";
import { useAuth } from '../../contexts/AuthContext';


const Login = props => {
    const [form, setForm] = useState({
        email: "",
        password: "",
    });


    function closeForm() {
        document.getElementById("popupForm").style.display = "none";
    }
    

    const onUpdateField = e => {
        const nextFormState = {
            ...form,
            [e.target.name]: e.target.value,
        };
        setForm(nextFormState);
    };

    const onSubmitForm = e => {
        e.preventDefault();
        alert(JSON.stringify(form, null, 2));
        login(emailRef.current.value,passwordRef.current.value);
    };

    const emailRef = useRef();
    const passwordRef = useRef();
    const { login } = useAuth();
    return (
        <>
            <Navbar />
            <div className={styles.loginPopup}>
                <div className={styles.formPopup} id="popupForm">
                    <form action="/action_page.php" class={styles.formContainer} onSubmit={onSubmitForm}>
                        <img className={styles.logo} src={instagramlogo} alt={instagramlogo}></img>
                        <label htmlFor="email"></label>
                        <input type="text" ref={emailRef} value={form.email} onChange={onUpdateField} className={styles.phoneBox} placeholder="Phone number, username, or email" name='email' required />
                        <label htmlFor="psw"></label>
                        <input ref={passwordRef} onChange={onUpdateField} type="password" className={styles.passwordBox} placeholder="Password" name="psw" required />
                        <button type="submit" class={styles.btn}>Log in</button>
                        <button className={styles.forgotPwdBtn}>Forgot Password?</button>
                        <button type="submit" class={styles.closeBtn} onClick={closeForm}>Close</button>
                    </form>
                </div>
            </div>
        </>
    );

}

export default Login;