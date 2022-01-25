import React, { useState } from "react";
import "./Login.css";
import { SignUp, SignIn } from "./../../Firebase";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const SignIn_Submit = async (e) => {
    e.preventDefault();
    //Firebase
    await SignIn(email, password)
      .then((res) => {
        toast.success("Logged In Successfully");
        console.log(res);
        navigate("/");
      })
      .catch((error) => {
        toast.error("Email is not found Or Password is Wrong");
        console.log(error?.message);
      });
  };

  const SignUp_Submit = async () => {
    //Firebase
    await SignUp(email, password)
      .then((res) => {
        toast.success("Created Successfully");
        console.log(res);
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        toast.error("Email is not Valid Or Email already in use");
        console.log(error?.message);
      });
  };

  return (
    <>
      <div className="login">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQajKKxHfkQetheJh2jdvFeNpmaIJMy8dsqSnIVxuoqaAq3Q8fPVk48MaZqgw-fXK0sYQU&usqp=CAU"
          alt="Amazon Logo"
          className="login__logo"
        />
        <div className="login__container">
          <h1>Sign In</h1>
          <form action="post" onSubmit={SignIn_Submit}>
            <h5>Email</h5>
            <input
              type="text"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <h5>Password</h5>
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="login__signInBtn">
              Sign in
            </button>
          </form>
          <div>
            <button className="login__registerBtn" onClick={SignUp_Submit}>
              Create Your Amazon Account
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
