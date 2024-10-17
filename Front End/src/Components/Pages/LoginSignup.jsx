import React, { useState } from "react";
import "./Css/LoginSignup.css";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const LoginSignup = () => {
  const [Continue, setContinue] = useState("Sign Up");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigator = useNavigate();
  const [accept, setAccept] = useState(false);

  const login = async () => {
    setAccept(true);
    if (email && password) {
      const data = {
        email,
        password,
      };
      await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.status === "success") {
            localStorage.setItem("token", data.data.token);

            // navigator("/");

            toast("Success Login", {
              style: {
                background: "#28a745",
                color: "#fff",
              },
            });
            setTimeout(() => {
              window.location.replace("/");
            }, 500);
          } else {
            console.log(data);

            // alert(data.data);
            toast(data.data, {
              style: {
                background: "#dc3545",
                color: "#fff",
              },
            });
          }
        });
    }
  };

  const signup = async () => {
    setAccept(true);
    if (email && password.length >= 6 && name) {
      const data = {
        email,
        password,
        userName: name,
      };
      await fetch("http://localhost:5000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.status === "success") {
            localStorage.setItem("token", data.data.token);
            // navigator("/");
            toast("Success Signup", {
              style: {
                backgroundColor: "#28a745",
                color: "#fff",
              },
            });
            setTimeout(() => {
              window.location.replace("/");
            }, 500);
          } else {
            // alert(data.data);
            toast(data.data, {
              style: {
                backgroundColor: "#dc3545",
                color: "#fff",
              },
            });
          }
        });
    }
  };
  return (
    <div className="login-signup">
      <div className="page-container">
        <h2>{Continue}</h2>
        <div className="login-signup-fields">
          {Continue === "Sign Up" ? (
            <input
              className={accept && !name && "invalid"}
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Enter your name"
            />
          ) : null}
          <input
            className={accept && !email && "invalid"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter your Email"
          />
          <input
            className={accept && !password && "invalid"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter your Password"
          />
          {password && password.length < 6 && name && (
            <p className="invalid-password">
              The password must be greater than 6 characters
            </p>
          )}
        </div>
        <button onClick={() => (Continue === "Sign Up" ? signup() : login())}>
          Continue
        </button>
        {Continue === "Sign Up" ? (
          <p className="loginsignup-login">
            Already have an account?{" "}
            <span onClick={() => setContinue("Login")}>Login here</span>
          </p>
        ) : (
          <p className="loginsignup-login">
            Create an Account?{" "}
            <span onClick={() => setContinue("Sign Up")}>click here</span>
          </p>
        )}
        <div className="loginsinup-agree">
          <input type="checkbox" />
          <p>By Containuing ,i agree to the terms of use & privacy police.</p>
        </div>
      </div>
    </div>
  );
};
