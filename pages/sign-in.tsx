import type { NextPage } from "next";
import { SignIn } from "../components";

const Login: NextPage = () => {
    return (
        <div className="container">
            <SignIn />
        </div>
    );
};

export default Login;