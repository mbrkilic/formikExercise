import * as yup from 'yup';
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/; // copy & paste.

export const basicSchema = yup.object().shape({
  email: yup
    .string()
    .email('enter a valid email address')
    .required('you must enter an email address'),
  age: yup
    .number()
    .positive('"age must be greater than zero')
    .integer('age must be an integer')
    .required('you must enter your age'),
  password: yup
    .string()
    .min(5, 'password must be at least five letters')
    .matches(passwordRules, {
      message: 'Please enter at least one uppercase letter, one lowercase letter and a number',
    })
    .required('you must enter a password'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], "passwords don't match")
    .required('you must confirm your password'),
});
