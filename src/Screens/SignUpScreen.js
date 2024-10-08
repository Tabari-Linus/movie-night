import React, { useRef } from 'react';
import './SignUpScreen.css';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'; // Import the correct functions

const SignUpScreen = () => {
    const emailRef = useRef(null);
    const passwordRef = useRef(null); 
    const auth = getAuth(); // Initialize auth

    // Register function for creating a new user
    const register = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(
            auth,
            emailRef.current.value,
            passwordRef.current.value
        )
        .then((authUser) => {
            console.log("User registered:", authUser);
        })
        .catch((error) => {
            alert(error.message);
        });
    };

    // Sign in function
    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(
            auth,
            emailRef.current.value,
            passwordRef.current.value
        )
        .then((authUser) => {
            console.log("Signed in user:", authUser);
        })
        .catch((error) => {
            alert(error.message);
        });
    };

    return (
        <div className='signUpScreen'>
            <form>
                <h1>Sign In</h1>
                <input ref={emailRef} type="email" placeholder='Email' />
                <input ref={passwordRef} type="password" placeholder="Password" />
                <button type='submit' onClick={signIn}>Sign In</button>
                <h4>
                    <span className="signUpScreen__gray">
                        New to Netflix?
                    </span>
                    <span className="signUpScreen__link" onClick={register}>Sign Up now.</span>
                </h4>
            </form>
        </div>
    );
};

export default SignUpScreen;
