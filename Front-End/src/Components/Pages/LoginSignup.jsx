import React, { useState } from "react";
import "./Css/LoginSignup.css";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const LoginSignup = () => {
  const [Continue, setContinue] = useState("Sign Up");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isEmpty, setIsEmpty] = useState({
    name: false,
    email: false,
    password: false,
  });
  const navigator = useNavigate();

  const login = async () => {
    if (!email || !password) {
      setIsEmpty({
        email: !email,
        password: !password,
      });
      toast("Please fill all fields", {
        style: {
          backgroundColor: "#dc3545",
          color: "#fff",
        },
      });
      return;
    }

    const data = {
      email,
      password,
    };

    await fetch(`${process.env.REACT_APP_SERVER_URL}/login`, {
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
          toast(data.data, {
            style: {
              background: "#dc3545",
              color: "#fff",
            },
          });
        }
      });
  };

  const signup = async () => {
    if (!name || !email || !password) {
      setIsEmpty({
        name: !name,
        email: !email,
        password: !password,
      });
      toast("Please fill all fields", {
        style: {
          backgroundColor: "#dc3545",
          color: "#fff",
        },
      });
      return;
    }

    const data = {
      email,
      password,
      userName: name,
    };

    await fetch(`${process.env.REACT_APP_SERVER_URL}/signup`, {
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
          toast(data.data, {
            style: {
              backgroundColor: "#dc3545",
              color: "#fff",
            },
          });
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="login-signup">
      <div className="page-container">
        <h2>{Continue}</h2>
        <div className={`login-signup-fields`}>
          {Continue === "Sign Up" ? (
            <input
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setIsEmpty((prev) => ({ ...prev, name: false }));
              }}
              type="text"
              placeholder="Enter your name"
              className={isEmpty.name ? "fail-input" : ""}
            />
          ) : null}
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setIsEmpty((prev) => ({ ...prev, email: false }));
            }}
            type="email"
            placeholder="Enter your Email"
            className={isEmpty.email ? "fail-input" : ""}
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setIsEmpty((prev) => ({ ...prev, password: false }));
            }}
            type="password"
            placeholder="Enter your Password"
            className={isEmpty.password ? "fail-input" : ""}
          />
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
          <p>By Continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
};
