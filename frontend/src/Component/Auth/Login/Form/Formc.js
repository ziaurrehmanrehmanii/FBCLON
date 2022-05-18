import { useFormik } from "formik";
import * as Yup from "yup";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Formc.module.css";

export default function Formc() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email("Must be a valid email address")
        .required("Email is required"),
      // .max(15, "email cannot be less than 15 characters"),
      password: Yup.string()
        .required("Password is required")
        .max(15, "Password cannot be more  than 15 characters")
        .min(8, "Password Must be at least 8 characters")
        .matches(/.*\d/, "Should contain a digit")
        .matches(/[A-Z]/, " at least one Capital letter")
        .matches(/[a-z]/, " at least one small letter ")
        .matches(
          /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>]/,
          " at least one Special characters "
        ),
    }),

    onSubmit: (values) => {
      let from = {
        form: values,
      };
      fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(from),
      })
        .then((res) => res.json())
        .then((data) => console.log(data.Data))
        .catch((error) => {
          console.log("Error:", error);
        });
    },
  });

  return (
    <Form className={`${styles.formh}`} onSubmit={formik.handleSubmit}>
      <Form.Control
        onBlur={formik.handleBlur}
        name="email"
        onChange={formik.handleChange}
        value={formik.values.email}
        type="email"
        placeholder="Enter email"
      />
      {formik.touched.email ? <p> {formik.errors.email}</p> : null}

      <div className={`${styles.seperator}`}></div>

      <Form.Control
        onBlur={formik.handleBlur}
        name="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        type="password"
        placeholder="Password"
      />
      {formik.touched.password ? <p> {formik.errors.password}</p> : null}

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <div className="d-grid gap-2 ">
        <Button className={`${styles.subz}`} variant="primary" type="submit">
          Log in
        </Button>
      </div>

      <div className={`${styles.dgrid}`}>
        <button className={`btn btn-primary ${styles.custombsbtn}`}>
          Create a new Account
        </button>
      </div>
    </Form>
  );
}
