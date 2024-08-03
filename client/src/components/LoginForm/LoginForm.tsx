import axios from "axios";
import "./LoginForm.css";
import { FormEvent, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import bcrypt from "bcrypt";

export default function LoginForm() {
    type User = {
        username: string;
        password: string;
    };

    const [data, setData] = useState<User>({
        username: "",
        password: "",
    });
    const [error, setError] = useState<string>("");

    const [passwordHash, setPasswordHash] = useState<string>("");

    const [token, setToken] = useState<string>("");

    const HandleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const username = form.username.value;
        const password = form.password.value;
        
        setData(p => ({
            ...p,
            username,
            password
        }));

        axios.get("/user/password", {
            params: {
                username: data.username,
            }
        }).then(
            response => setPasswordHash(response.data)
        ).catch(err => console.log(err))

        const passwordIsValid: boolean = passwordHash === bcrypt.hashSync(data.password, 10);
        if (passwordIsValid) {
            <Navigate to="/home" />
            axios.post("/user/generate-token", {
                username: data.username,
            },{
                headers: {
                    "Content-Type": "application/json",
                }
            }).then(
                response => {
                    setToken(response.data);
                    localStorage.set("token", token);
                }
            ).catch(err => console.log(err))

        } else {
            setError("Invalid username or Password!")            
        }
    }

    return (
        <Fragment>
            <form onSubmit={HandleFormSubmit}>
                <fieldset>
                    <legend>Log In</legend>
                    <span>{error}</span><br/>
                    <label htmlFor="username" >Username: </label>
                    <input name="username" autoComplete="true" id="username" defaultValue={data.username} type="text" maxLength={50} /><br/>
                    <label htmlFor="password">Password: </label>
                    <input name="password" id="password" type="password" defaultValue={data.password} maxLength={255} /><br/>
                    <input type="submit" value="Submit" /><br/>
                    <span>Don't have an Account? <Link to="/signup">Sign Up</Link></span><br/>
                    <span>Forgot Password? <Link to="/recover-password">Recover Password</Link></span><br/>
                </fieldset>
            </form>
        </Fragment>
    )
}