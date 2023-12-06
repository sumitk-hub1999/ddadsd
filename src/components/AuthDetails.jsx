import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { useState } from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
const AuthDetails = (props) => {
  console.log(props);
  const navigate = useNavigate();
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listitem = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
        props.gettruth(user);
      } else {
        setAuthUser(null);
        props.gettruth(null);
      }
    });
    // return () => {
    //   listen();
    // };
  }, []);
  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out successful");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      {authUser ? (
        <>
          {" "}
          <p>{`Signed In as ${authUser.email}`} </p>
          <button onClick={userSignOut}>Sign Out</button>
        </>
      ) : (
        <p>Signed Out</p>
      )}
    </div>
  );
};

export default AuthDetails;
