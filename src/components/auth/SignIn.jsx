import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import AuthDetails from "../AuthDetails";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const SignIn = () => {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [truth, settruth] = useState();
  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const gettruth = (ar) => {
    console.log(ar);
    settruth(ar);
  };

  const getLogin = () => {
    console.log(truth);
    if (truth) {
      navigate("/home");
    } else {
      navigate("/");
    }
  };
  return (
    <div className="sign-in-container">
      <form onSubmit={signIn}>
        <h1>Sign In</h1>
        <input
          type="text"
          placeholder="enter email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
        <input
          type="password"
          placeholder="enter password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
        <button type="Submit" onClick={getLogin}>
          Submit
        </button>
      </form>

      <AuthDetails gettruth={gettruth} />
      <Link to="/signup">Register here</Link>
    </div>
  );
};

export default SignIn;
