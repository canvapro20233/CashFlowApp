import * as yup from 'yup'

export const REGISTRATION_SCHEMA = yup.object({
    Name: yup.string().required('please enter your name'),
    email: yup.string().email('Invalid email address').required('please enter your email'),
    password: yup.string().min(8, 'Password must be at least 8 characters').required('please enter password'),
  })
