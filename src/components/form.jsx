import React, { useState } from "react";
import { VscError } from "react-icons/vsc";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineLock } from "react-icons/ai";
import { AiFillCheckCircle } from "react-icons/ai";
import { FaArrowCircleDown } from "react-icons/fa";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import { Formik, Form, Field, ErrorMessage, FastField } from "formik";
import * as Yup from "yup";
//import { BiLogOut } from "react-icons/bi";

function FormComponent() {
  const [open, setopen] = useState(false);
  const [eye, seteye] = useState(false);

  const handleEye = () => {
    if (!eye) {
      seteye(true);
    } else {
      seteye(false);
    }
  };
  const handleopen = () => {
    if (!open) {
      setopen(true);
    } else {
      setopen(false);
    }
  };
  const notOne = ["password"];
  //const notOne = ["admin", "moderator"];

  const validationSchema = Yup.object({
    email: Yup.string().required("Required").email("Invalid email format"),
    password: Yup.string()
      .required("Required")
      .min(4, "Min: 4")
      .notOneOf(notOne, `Password can't be ${notOne}`),
    Rpassword: Yup.string()
      .required("Required")
      .oneOf([Yup.ref("password"), null], "Paswords not match"),
  });

  const initialValues = {
    email: "",
    password: "",
    Rpassword: "",
  };

  const onSubmit = (values, submitProps) => {
    console.log(values);
    //console.log(submitProps);
    submitProps.setSubmitting(false);
    submitProps.resetForm();
  };

  return (
    <>
      <header>
        <h1>Logo</h1>
        <ul>
          <li>
            <a href="#" text="Home">
              Home
              <span></span>
              <span></span>
            </a>
          </li>
          <li>
            <a href="#" text="header">
              Header
              <span></span>
              <span></span>
            </a>
          </li>
          <li>
            <a href="#" text="Body">
              Body
              <span></span>
              <span></span>
            </a>
          </li>
          <li>
            <a href="#" text="footer">
              footer
              <span></span>
              <span></span>
            </a>
          </li>
          <li>
            <a href="#" text="navbar">
              navbar
              <span></span>
              <span></span>
            </a>
          </li>
        </ul>
      </header>
      <div className="div-form" style={{ height: open && "500px" }}>
        <div className="header">
          <FaArrowCircleDown
            className={open ? "arrowactive" : "arrow"}
            onClick={handleopen}
          />
          <h1 className="register" style={{ top: open && "0px" }}>
            Register
          </h1>
          <p
            className="header-p"
            style={{ opacity: open && "1", cursor: !open && "default" }}
          >
            Please fill in this form to create an account.
          </p>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
          validateOnMount
        >
          {(formik) => {
            return (
              <Form className="form" autoComplete="off" noValidate>
                {eye ? (
                  <AiFillEye className="eye" onClick={handleEye} />
                ) : (
                  <AiFillEyeInvisible className="eye" onClick={handleEye} />
                )}

                <div className="form-group">
                  {/* <VscError className="erroricon" /> */}
                  <HiOutlineMail className="icons" />

                  <FastField
                    type="text"
                    id="Email"
                    required
                    name="email"
                    style={{
                      borderBottom:
                        formik.touched.email &&
                        formik.errors.email &&
                        "2px solid red",
                      zIndex:
                        formik.touched.email && formik.errors.email && "10",
                    }}
                  />

                  <label htmlFor="Email">Email</label>
                  <span></span>

                  {formik.touched.email && formik.errors.email && (
                    <VscError className="error-icon" />
                  )}
                  {!formik.errors.email && formik.dirty && (
                    <AiFillCheckCircle className="checked-icon" />
                  )}
                </div>
                <ErrorMessage name="email" className="error" component="p" />
                <div className="form-group">
                  {/* <VscError className="erroricon" /> */}
                  <AiOutlineLock className="icons" />

                  <Field
                    type={!eye ? "password" : "text"}
                    id="Password"
                    required
                    name="password"
                    style={{
                      borderBottom:
                        formik.touched.password &&
                        formik.errors.password &&
                        "2px solid red",
                      zIndex:
                        formik.touched.password &&
                        formik.errors.password &&
                        "10",
                    }}
                  />

                  <label htmlFor="Password">Password</label>
                  <span></span>
                  {formik.touched.password && formik.errors.password && (
                    <VscError className="error-icon" />
                  )}
                  {!formik.errors.password && formik.dirty && (
                    <AiFillCheckCircle className="checked-icon" />
                  )}
                </div>
                <ErrorMessage name="password" className="error" component="p" />

                <div className="form-group">
                  {/* <VscError className="erroricon" /> */}
                  <AiOutlineLock className="icons" />

                  <Field
                    type={!eye ? "password" : "text"}
                    id="repeatPassword"
                    required
                    name="Rpassword"
                    style={{
                      borderBottom:
                        formik.touched.Rpassword &&
                        formik.errors.Rpassword &&
                        "2px solid red",
                      zIndex:
                        formik.touched.Rpassword &&
                        formik.errors.Rpassword &&
                        "10",
                    }}
                  />

                  <label htmlFor="repeatPassword">Repeat Password</label>
                  <span></span>
                  {formik.touched.Rpassword && formik.errors.Rpassword && (
                    <VscError className="error-icon" />
                  )}
                  {!formik.errors.Rpassword && formik.dirty && (
                    <AiFillCheckCircle className="checked-icon" />
                  )}
                </div>
                <ErrorMessage
                  name="Rpassword"
                  className="error"
                  component="p"
                />

                <span>By creating your account you agree with </span>
                <a href="/">Terms & Privacy</a>
                <div className="button">
                  <button
                    type="submit"
                    className={
                      !(formik.isValid && !formik.isSubmitting)
                        ? "disable-button"
                        : "enable-button"
                    }
                    disabled={!(formik.isValid && !formik.isSubmitting)}
                  >
                    Register
                  </button>
                </div>
              </Form>
            );
          }}
        </Formik>
        <footer>
          Already have an account? <a href="/"> Sing in</a>
        </footer>
      </div>
    </>
  );
}

export default FormComponent;
