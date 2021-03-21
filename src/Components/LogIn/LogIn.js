import { Container } from '@material-ui/core';
import React, { useContext } from 'react';
import "../CreateAccount/CreateAccount.css"
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { UserContext } from '../../App';
import { Link } from 'react-router-dom';


//  firebase app not repeat

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}

const LogIn = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    // Handle Blue or Get Input data
    const handleBlur = (e) => {
        let isValidFields = true;
        if (e.target.name === 'email') {
            isValidFields = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e.target.value);
        }
        if (e.target.name === 'password') {
            isValidFields = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{15,})").test(e.target.value);
        }

        if (isValidFields) {
            const newLoggedInUserInfo = { ...loggedInUser };
            newLoggedInUserInfo[e.target.name] = e.target.value;
            setLoggedInUser(newLoggedInUserInfo);
        }



    }
    console.log('name',loggedInUser.name);
    //    submit form
    const handleSubmit = (e) => {
        
        if (loggedInUser.email && loggedInUser.password) {
            firebase.auth().signInWithEmailAndPassword(loggedInUser.email, loggedInUser.password)
                .then((res) => {
                    console.log(res.user);
                    
                })
                .catch((error) => {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    console.log(errorMessage, errorCode)
                });
        }
        e.preventDefault();
    }




    //          handle Google sign in start
    const handleGoogleSignIn = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(googleProvider)
            .then((result) => {
                const { displayName, email } = result.user;
                const signedInUser = {
                    name: displayName,
                    email: email,
                    isSignedIn: true,
                }
                setLoggedInUser(signedInUser);
            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
                console.log(errorMessage, errorCode, email, credential);
            });
    }
    //          handle Google sign in end

    return (
        <Container>
            <div align="center" className="formContainer">
                <div className='formPage' >
                    <h1>Login</h1>
                    <form onSubmit={handleSubmit} className="form-filed"  >
                        <input name="email" onBlur={handleBlur} required placeholder="Enter Your Email" />
                        <br />

                        <input name="password" onBlur={handleBlur} required type="password" placeholder="Enter Your Password" />

                        <br />

                        <input type="submit" onBlur={handleBlur} value='Login' className="btnColor" />

                    </form>
                    <p>Don't have an account? <Link to="/createAccount"> Create an Account </Link></p>
                   

                </div>
            </div>

            <div className="center">
                <div className="line">
                    <hr className="lineOne" />
                    <small className="or">Or</small>
                    <hr className="lineTwo" />
                </div>
                <button onClick={handleGoogleSignIn} className="googleBtn"> <span className="iconBox">
                    <FontAwesomeIcon className="icon" icon={faGoogle} />
                </span> <span className="btnText">Continue With Google</span> </button>
            </div>

        </Container>
    );
};

export default LogIn;