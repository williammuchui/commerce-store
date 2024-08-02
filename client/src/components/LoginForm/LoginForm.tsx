import "./LoginForm.css";
import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";

export default function LoginForm() {
    type User = {
        username: string;
        password: string;
    };

    const [data, setData] = useState<User>({
        username: "",
        password: "",
    });

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
    }
        if(data.username !== "")console.log(data);
    return (
        <Fragment>
            <form onSubmit={HandleFormSubmit}>
                <fieldset>
                    <legend>Log In</legend>
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