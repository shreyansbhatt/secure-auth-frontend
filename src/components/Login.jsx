import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { login } from '../api/auth';
import { loginValidationSchema } from '../utils/validation';

const Login = () => {
  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const sanitizedValues = {
        email: values.email.trim(), // Trim whitespace to sanitize input
        password: values.password,
      };
      const response = await login(sanitizedValues);
      localStorage.setItem('token', response.access_token); // Store token securely in localStorage
      alert('Login successful!');
    } catch (error) {
      alert(error.response?.data?.message || 'Login failed');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={loginValidationSchema} // Input validation schema
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
              {isSubmitting ? 'Logging in...' : 'Login'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
