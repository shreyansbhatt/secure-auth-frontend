import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { register } from '../api/auth';
import { registerValidationSchema } from '../utils/validation';

const Register = () => {
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const sanitizedValues = {
        email: values.email.trim(), // Trim whitespace to sanitize input
        name: values.name.trim(),
        password: values.password,
      };
      await register(sanitizedValues);
      alert('Registration successful!');
      resetForm(); // Clear form after successful registration
    } catch (error) {
      alert(error.response?.data?.message || 'Registration failed');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Register</h2>
      <Formik
        initialValues={{ email: '', name: '', password: '' }}
        validationSchema={registerValidationSchema} // Input validation schema
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="mb-3">
              <label htmlFor="email">Email</label>
              <Field
                type="email"
                name="email"
                id="email"
                className="form-control"
              />
              <ErrorMessage name="email" component="div" className="text-danger" />
            </div>
            <div className="mb-3">
              <label htmlFor="name">Name</label>
              <Field
                type="text"
                name="name"
                id="name"
                className="form-control"
              />
              <ErrorMessage name="name" component="div" className="text-danger" />
            </div>
            <div className="mb-3">
              <label htmlFor="password">Password</label>
              <Field
                type="password"
                name="password"
                id="password"
                className="form-control"
              />
              <ErrorMessage name="password" component="div" className="text-danger" />
            </div>
            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Register'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Register;
