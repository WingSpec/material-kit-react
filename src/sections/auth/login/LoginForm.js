import * as Yup from 'yup';
import { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useFormik, Form, FormikProvider } from 'formik';
// material
import { Link, Stack, Checkbox, TextField, IconButton, InputAdornment, FormControlLabel, FormHelperText } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// component
import Iconify from '../../../components/Iconify';

// ----------------------------------------------------------------------

export default function LoginForm() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  async function handleLogin(values) {
    const uriLogin = `${process.env.REACT_APP_API_ENDPOINT}/account/login`;
    
    const formdata = new FormData();
    formdata.append('username', values.email);
    formdata.append('password', values.password);

    const requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };

    const fetchResponse = await fetch(uriLogin, requestOptions)
      .catch(error => {
        console.error(`Fetch response is:- ${error}`);
      }
    );
    
    const data = await fetchResponse.json()
      .catch(error => {
        console.error(`Fetch data Error is:- ${error}`);
      }
    );
    
    return data;    
  }

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      auth: false
    },
    mapPropsToTouched: {auth: false},
    validationSchema: LoginSchema,
    onSubmit: async (values) => {
      const result = await handleLogin(values);
      console.log(result.response);
      if (result.response === 'Error') {
        errors.auth = true;
      }
      else {
        values.auth = true; // unused for now
        sessionStorage.Token = result.token;
        sessionStorage.UserEmail = result.email;
        navigate('/dashboard/app', { replace: true });
      }
    }
  });

  const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } = formik;

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <TextField
            fullWidth
            autoComplete="username"
            type="email"
            label="Email address"
            {...getFieldProps('email')}
            error={Boolean(touched.email && errors.email || errors.auth)}
            helperText={touched.email && errors.email}
          />

          <TextField
            fullWidth
            autoComplete="current-password"
            type={showPassword ? 'text' : 'password'}
            label="Password"
            {...getFieldProps('password')}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleShowPassword} edge="end">
                    <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            error={Boolean(touched.password && errors.password || errors.auth)}
            helperText={touched.password && errors.password}
          />
        </Stack>

        {/*
        TODO: Implement functionality for the following
        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
          <FormControlLabel
            control={<Checkbox {...getFieldProps('remember')} checked={values.remember} />}
            label="Remember me"
          />

          <Link component={RouterLink} variant="subtitle2" to="#" underline="hover">
            Forgot password?
          </Link>
        </Stack> */}
        
        <FormHelperText error={Boolean(errors.auth)} sx={{ lineHeight: '18px', mt: '24px', mb: '3px', mx: '14px' }}> {errors.auth && 'Username or password is incorrect'}
        </FormHelperText>
        
        <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
          Login
        </LoadingButton>
      </Form>
    </FormikProvider>
  );
}
