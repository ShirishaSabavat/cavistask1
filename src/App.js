import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.css";

const LoginSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(3, "Full Name must be 3 characters at minimum")
    .required("Full Name is required"),
  email: Yup.string()
    .email("Invalid email address format")
    .required("Email is required"),
    number: Yup.number()
     .typeError("That does't look like a contact number")
     .positive("A contact number can't start with a minus")
     .integer("A contact number can't include a decimal point")
     .required("Number is required"),
  permanentAddress: Yup.string()
    .min(10, "Permanent Address must be 10 characters at minimum")
    .required("Permanent Address is required"),
  currentAddress: Yup.string()
    .min(10, "Current Address must be 10 characters at minimum")
    .required("Current Address is required")
});

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <Formik
            initialValues={{ fullName: "", email: "", number: "", permanentAddress: "", currentAddress: "" }}
            validationSchema={LoginSchema}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ touched, errors, isSubmitting, values }) =>
              !isSubmitting ? (
                <div>
                  <div className="row mb-5">
                    <div className="col-12 text-center">
                      <h1 className="mt-5">Personal Details</h1>
                    </div>
                  </div>
                  <Form>
                    <div className="row">
                      <div className="col-12 col-lg-4 form-group mb-4">
                        <label htmlFor="fullName">Full Name</label>
                        <Field
                          type="text"
                          name="fullName"
                          placeholder="Enter FullName"
                          autoComplete="off"
                          className={`mt-2 form-control
						${touched.fullName && errors.fullName ? "is-invalid" : ""}`}
                        />

                        <ErrorMessage
                          component="div"
                          name="fullName"
                          className="invalid-feedback"
                        />
                      </div>

                      <div className="col-12 col-lg-4 form-group mb-4">
                        <label htmlFor="email">Email</label>
                        <Field
                          type="email"
                          name="email"
                          placeholder="Enter email"
                          autoComplete="off"
                          className={`mt-2 form-control
						${touched.email && errors.email ? "is-invalid" : ""}`}
                        />

                        <ErrorMessage
                          component="div"
                          name="email"
                          className="invalid-feedback"
                        />
                      </div>

                      <div className="col-12 col-lg-4 form-group mb-4">
                        <label htmlFor="number">Contact Number</label>
                        <Field
                          type="text"
                          name="number"
                          placeholder="Enter Contact Number"
                          autoComplete="off"
                          className={`mt-2 form-control
						${touched.number && errors.number ? "is-invalid" : ""}`}
                        />

                        <ErrorMessage
                          component="div"
                          name="number"
                          className="invalid-feedback"
                        />
                      </div>

                      <div className="col-12 col-lg-6 form-group mb-4">
                        <label htmlFor="textarea">Permanent Address</label>
                        <Field
                          as="textarea"
                          name="permanentAddress"
                          placeholder="Enter Permanent Address"
                          autoComplete="off"
                          className={`mt-2 form-control
						${touched.permanentAddress && errors.permanentAddress ? "is-invalid" : ""}`}
                        />

                        <ErrorMessage
                          component="div"
                          name="permanentAddress"
                          className="invalid-feedback"
                        />
                      </div>

                      <div className="col-12 col-lg-6 form-group mb-4">
                        <label htmlFor="textarea">Current Address</label>
                        <Field
                          as="textarea"
                          name="currentAddress"
                          placeholder="Enter Current Address"
                          autoComplete="off"
                          className={`mt-2 form-control
						${touched.currentAddress && errors.currentAddress ? "is-invalid" : ""}`}
                        />

                        <ErrorMessage
                          component="div"
                          name="currentAddress"
                          className="invalid-feedback"
                        />
                      </div>

                      <div className="col-12 text-center">
                        <button style={{marginRight: "10px"}}
                          type="button"
                          className="btn btn-info btn-block mt-4" onClick={(e) => {
                            console.log(values);
                          }}
                        >
                          Save to draft
                        </button>
                        <button
                          type="submit"
                          className="btn btn-secondary btn-block mt-4"
                        >
                          Next
                        </button>
                      </div>
                    </div>
                  </Form>
                </div>
              ) : (
                <div>
                  <h1 className="p-3 mt-5">Next Page</h1>
                </div>
              )
            }
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default App;
