import { FormEvent, useState } from "react";
import { Fragment } from "react/jsx-runtime";
import "./SignupForm.css";
import { Link } from "react-router-dom";

export default function SignupForm() {
    type NewUser = {
        username: string;
        password: string;
        email: string;
        repeatPassword: string;
    }
    const [data, setData] = useState<NewUser>({
        username: "",
        email: "",
        password: "",
        repeatPassword: "",
    })

    const HandleFormSubmit = (e: FormEvent<HTMLFormElement>)=> {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);
        const username = formData.get("username") as string;
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;
        const repeatPassword = formData.get("repeatPassword") as string;

        setData(p => ({
            ...p,
            username,
            email,
            password,
            repeatPassword,
        }));

    }
    if(data.username !== ""){console.log(data)}
    return (
        <Fragment>
            <form onSubmit={HandleFormSubmit}>
                <fieldset>
                    <legend>Sign Up</legend>
                    <label htmlFor="email">Email: </label>
                    <input name="email" id="email"autoComplete="true" type="text" defaultValue={data.email } maxLength={50} minLength={5} /><br/>
                    <label htmlFor="username">Username: </label>
                    <input name="username" id="username" type="text" autoComplete="true" defaultValue={data.username } maxLength={30} minLength={3} /><br/>
                    <label htmlFor="password">Password: </label>
                    <input name="password" type="password" id="password" defaultValue={data.password } minLength={8} maxLength={255} /><br/>
                    <label htmlFor="repeatPassword">Repeat Password: </label>
                    <input name="repeatPassword" type="password" id="repeatPassword" defaultValue={data.repeatPassword } minLength={8} maxLength={255}/><br/>
                    <input type="submit" value="Submit" /><br />
                    <span>Already have an Account? <Link to="/login">Log in</Link></span>
                </fieldset>
            </form>
        </Fragment>
    )
}