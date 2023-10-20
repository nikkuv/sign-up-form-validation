"use client";
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { signUp } from "./SignUpService";
import styles from "./signup.module.css";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  occupation: Yup.string().required("Required"),
  website: Yup.string().url("Invalid URL").required("Required"), 
  referedfrom: Yup.string().required("Required"),
  comment: Yup.string().required("Required"), 
});

const SignUpForm = () => {
  const [selectedOccupation, setSelectedOccupation] = useState("Individual");

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        occupation: "Individual",
        website: "",
        referedfrom: "",
        comment: "",
      }}
      validationSchema={SignupSchema}
      onSubmit={(values, actions) => {
        signUp(values)
          .then((data) => {
            actions.setSubmitting(false);
          })
          .catch((error) => {
            actions.setSubmitting(false);
          });
      }}
    >
      {({ isSubmitting, setFieldValue }) => (
        <Form className={styles.form}>
          <h1 className={styles.formHeading} >Get Started with Dubpro.ai</h1>
          <div className={styles.row}>
            <div className={styles.formField}>
              <label className={styles.inputLabel} htmlFor="firstName">
                First Name
                <span className={styles.required} >*</span>
              </label>
              <Field
                className={styles.inputField}
                type="text"
                name="firstName"
                placeholder="First Name"
              />
              <ErrorMessage
                className={styles.errorMsg}
                name="firstName"
                component="div"
              />
            </div>
            <div className={styles.formField}>
              <label className={styles.inputLabel} htmlFor="lastName">
                Last Name
                <span className={styles.required} >*</span>
              </label>
              <Field
                className={styles.inputField}
                type="text"
                name="lastName"
                placeholder="Last Name"
              />
              <ErrorMessage
                className={styles.errorMsg}
                name="lastName"
                component="div"
              />
            </div>
          </div>

          <div className={styles.buttonGroup}>
            <button
              type="button"
              className={`${styles.customButton} ${
                selectedOccupation === "Individual" ? styles.selected : ""
              }`}
              onClick={() => {
                setFieldValue("occupation", "Individual");
                setSelectedOccupation("Individual");
              }}
            >
              Individual
            </button>

            <span className={styles.orSpan}>OR</span>

            <button
              type="button"
              className={`${styles.customButton} ${
                selectedOccupation === "Business" ? styles.selected : ""
              }`}
              onClick={() => {
                setFieldValue("occupation", "Business");
                setSelectedOccupation("Business");
              }}
            >
              Business
            </button>
          </div>
          <Field type="hidden" name="occupation" />

          <div>
            <label className={styles.inputLabel} htmlFor="email">
              Email
              <span className={styles.required} >*</span>
            </label>
            <Field
              className={styles.inputField}
              type="email"
              name="email"
              placeholder="Email"
            />
            <ErrorMessage
              className={styles.errorMsg}
              name="email"
              component="div"
            />
          </div>

          <div>
            <label className={styles.inputLabel} htmlFor="website">
              Website
              <span className={styles.required} >*</span>
            </label>
            <Field
              type="text"
              name="website"
              className={styles.inputField}
              placeholder="Website/Youtube Channel Link"
            />
            <ErrorMessage
              className={styles.errorMsg}
              name="website"
              component="div"
            />
          </div>

          <div>
            <label className={styles.inputLabel} htmlFor="comment">
              How do you intent to use dubpro.ai?
              <span className={styles.required} >*</span>
            </label>
            <Field
              as="textarea"
              className={styles.textArea}
              type="text"
              name="comment"
            />
            <ErrorMessage
              className={styles.errorMsg}
              name="comment"
              component="div"
            />
          </div>

          <div>
            <label className={styles.inputLabel} htmlFor="referedfrom">
              How did you hear about us?
              <span className={styles.required} >*</span>
            </label>

            <Field as="select" name="referedfrom" className={styles.inputField}>
              <option value="" disabled hidden></option>
              <option value="friends">Friends</option>
              <option value="searchEngine">Search Engine</option>
              <option value="socialMedia">Social Media</option>
              <option value="advertisement">Advertisement</option>
            </Field>
            <ErrorMessage
              className={styles.errorMsg}
              name="referedfrom"
              component="div"
            />
          </div>

          <button
            className={`${styles.formButton} ${
              isSubmitting ? styles.formButtonDisabled : ""
            }`}
            type="submit"
            disabled={isSubmitting}
          >
            Secure Signup
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default SignUpForm;
