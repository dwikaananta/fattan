import { useForm, usePage } from "@inertiajs/inertia-react";
import React, { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import AppHead from "../Components/Layouts/AppHead";
import { titleState } from "../Storages/page";

const Login = (props) => {
    const { title } = props;
    const { appName } = usePage().props;

    const setTitle = useSetRecoilState(titleState);
    useEffect(() => setTitle(title), [title]);

    const { data, setData, post, processing, errors } = useForm({});

    const handleChange = (e) => {
        setData((data) => ({
            ...data,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/auth");
    };

    return (
        <div className="container">
            <AppHead title={`${appName} - ${title}`}></AppHead>
            {/* Outer Row */}
            <div className="row d-flex justify-content-center align-items-center vh-100">
                <div className="col-xl-10 col-lg-12 col-md-9">
                    <div className="card o-hidden border-0 shadow-lg my-5">
                        <div className="card-body p-0">
                            {/* Nested Row within Card Body */}
                            <div className="row">
                                <div className="col-lg-6 d-none d-lg-block text-center py-5 bg-light">
                                    <img src="/images/logo.png" alt="" className="img-fluid w-50" />
                                </div>
                                <div className="col-lg-6 d-flex align-items-center">
                                    <div className="p-5 w-100">
                                        <div className="text-center">
                                            <h1 className="h4 text-gray-900 mb-4">
                                                {title}
                                            </h1>
                                        </div>
                                        <form
                                            className="user"
                                            onSubmit={handleSubmit}
                                        >
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className="form-control form-control-user"
                                                    id="exampleInputEmail"
                                                    aria-describedby="emailHelp"
                                                    name="username"
                                                    placeholder="User ID..."
                                                    onChange={handleChange}
                                                />
                                                {errors.username && (
                                                    <span className="text-danger">
                                                        {errors.username}
                                                    </span>
                                                )}
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    type="password"
                                                    className="form-control form-control-user"
                                                    id="exampleInputPassword"
                                                    name="password"
                                                    placeholder="Password"
                                                    onChange={handleChange}
                                                />
                                                {errors.password && (
                                                    <span className="text-danger">
                                                        {errors.password}
                                                    </span>
                                                )}
                                            </div>
                                            {/* <div className="form-group">
                                                <div className="custom-control custom-checkbox small">
                                                    <input
                                                        type="checkbox"
                                                        className="custom-control-input"
                                                        id="customCheck"
                                                    />
                                                    <label
                                                        className="custom-control-label"
                                                        htmlFor="customCheck"
                                                    >
                                                        Remember Me
                                                    </label>
                                                </div>
                                            </div> */}
                                            <button
                                                type="submit"
                                                className="btn btn-primary btn-user btn-block"
                                                disabled={processing}
                                            >
                                                Login
                                            </button>
                                            {/* <hr />
                                            <a
                                                href="index.html"
                                                className="btn btn-google btn-user btn-block"
                                            >
                                                <i className="fab fa-google fa-fw" />{" "}
                                                Login with Google
                                            </a>
                                            <a
                                                href="index.html"
                                                className="btn btn-facebook btn-user btn-block"
                                            >
                                                <i className="fab fa-facebook-f fa-fw" />{" "}
                                                Login with Facebook
                                            </a> */}
                                        </form>
                                        {/* <hr />
                                        <div className="text-center">
                                            <a
                                                className="small"
                                                href="forgot-password.html"
                                            >
                                                Forgot Password?
                                            </a>
                                        </div>
                                        <div className="text-center">
                                            <a
                                                className="small"
                                                href="register.html"
                                            >
                                                Create an Account!
                                            </a>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
