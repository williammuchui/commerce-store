import { Fragment } from "react/jsx-runtime";
import Nav from "../../components/Nav/Nav";
import { Outlet } from "react-router-dom";

export default function LayoutPage() {
    return (
        <Fragment>
            <Nav />
            <Outlet/>
        </Fragment>
    )
}