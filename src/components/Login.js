import React from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";

const Login = () => {
  const navigate = useNavigate;

  const formik = useFormik({
    initialValues: {
      email: "sylvaincodeur@gmail.com",
      password: "sylvaincodes",
    },

    enableReinitialze: true,
    validationSchema: yup.object({
      email: yup
        .string()
        .min(2, "email should be more than 2 characters")
        .required("email is required"),

      password: yup
        .string()
        .min(2, "password should be more than 2 characters")
        .required("password is required"),
    }),

    onSubmit: (values) => {
    },
  });

  return (
    <div className="login-area">
      <div className="row">
        <div className="card">
          <div className="card-header">
            <h1>Login</h1>
          </div>
          <div className="card-body">
            <form
              aria-label="a login form"
              id="form"
              onSubmit={formik.handleSubmit}
            >
              <label htmlFor="email">email</label>
              <input
                type="text"
                name="email"
                id="email"
                onChange={formik.handleChange}
                invalid={
                  formik.touched.email && formik.errors.email ? "true" : "false"
                }
                value={formik.values.email}
              />
              <label htmlFor="password"> password</label>
              <input
                type="password"
                name="password"
                id="password"
                onChange={formik.handleChange}
                invalid={
                  formik.touched.password && formik.errors.password
                    ? "true"
                    : "false"
                }
                value={formik.values.password}
              />

              <button>Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
