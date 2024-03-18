import * as yup from 'yup'

export const REGISTRATION_SCHEMA = yup.object({
    Name: yup.string().required('please enter your name'),
    email: yup.string().email('Invalid email address').required('please enter your email'),
    password: yup.string().min(6, 'Password must be at least 6 characters').required('please enter password'),
    // confirmPassword: yup.string()
    //   .oneOf([yup.ref('password'), null], 'Passwords must match')
    //   .required('Required'),
  })
