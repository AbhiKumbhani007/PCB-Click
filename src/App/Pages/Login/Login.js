import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { useAuth } from "../../Context/AuthContext";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import FormControlLabel from "@mui/material/FormControlLabel";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("You must enter a valid email")
    .required("You must enter a email"),
  password: yup
    .string()
    .required("Please enter your password.")
    .min(4, "Password is too short - must be at least 4 chars."),
});

const defaultValues = {
  email: "",
  password: "",
  remember: true,
};

const SignIn = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const { login } = useAuth();
  const navigate = useNavigate();

  const { control, formState, handleSubmit, setError, setValue } = useForm({
    mode: "onChange",
    defaultValues,
    resolver: yupResolver(schema),
  });
  const { isValid, dirtyFields, errors } = formState;

  useEffect(() => {
    setValue("email", "admin@fusetheme.com", {
      shouldDirty: true,
      shouldValidate: true,
    });
    setValue("password", "admin", { shouldDirty: true, shouldValidate: true });
  }, [setValue]);

  function onSubmit({ email, password }) {
    // const data = {
    //   email: email,
    //   password: password,
    // };
    localStorage.setItem("email", email);
    localStorage.setItem("isAuthed", true);
    login().then(() => {
      navigate("/dashboard");
    });
  }
  return (
    <div className="flex flex-col sm:flex-row items-center justify-end md:items-start sm:justify-center md:justify-start flex-1 min-w-0">
      <Paper className="h-full justify-end items-center sm:h-auto md:flex md:items-center md:justify-end sm:w-auto md:h-screen md:w-1/2 sm:px-48 sm:py-20 md:px-56 sm:rounded-2xl md:rounded-2xl sm:shadow w-full md:shadow ltr:border-r-2 rtl:border-l-1">
        <div className="w-full items-end justify-end ">
          <img className="w-10" src="assets/images/logo/logo.svg" alt="logo" />

          <p className="text-4xl font-extrabold tracking-tight leading-tight">
            Sign in
          </p>
          <form
            name="loginForm"
            noValidate
            className="flex flex-col justify-center w-full mt-6"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="pt-6 pb-5">
              <InputLabel
                htmlFor="outlined-adornment-password"
                sx={{
                  paddingBottom: "10px",
                }}
              >
                Email Address*
              </InputLabel>
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <OutlinedInput
                    {...field}
                    autoFocus
                    type="email"
                    error={!!errors.email}
                    helpertext={errors?.email?.message}
                    variant="outlined"
                    required
                    fullWidth
                  />
                )}
              />
            </div>
            <div className="pt-3 pb-5">
              <InputLabel
                htmlFor="outlined-adornment-password"
                sx={{
                  paddingBottom: "10px",
                }}
              >
                Password*
              </InputLabel>
              <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <OutlinedInput
                    {...field}
                    type={showPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    error={!!errors.password}
                    helpertext={errors?.password?.message}
                    variant="outlined"
                    required
                    fullWidth
                  />
                )}
              />
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between my-5">
              <Controller
                name="remember"
                control={control}
                render={({ field }) => (
                  <FormControl>
                    <FormControlLabel
                      label="Remember me"
                      control={<Checkbox size="small" {...field} />}
                    />
                  </FormControl>
                )}
              />
            </div>

            <Button
              variant="contained"
              color="primary"
              sx={{ borderRadius: "18px", height: "45px", width: "100%" }}
              className=" w-full mt-20 rounded-3xl"
              aria-label="Sign in"
              // disabled={_.isEmpty(dirtyFields) || !isValid}
              type="submit"
              size="large"
            >
              Sign in
            </Button>
          </form>
        </div>
      </Paper>

      <Box
        className="relative md:w-1/2 hidden md:flex flex-auto items-center justify-center md:h-screen py-60 px-28 overflow-hidden"
        sx={{ backgroundColor: "#1e293d" }}
      >
        <svg
          className="absolute inset-0 pointer-events-none"
          viewBox="0 0 960 540"
          width="100%"
          height="100%"
          preserveAspectRatio="xMidYMax slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Box
            component="g"
            sx={{ color: "#252f5f" }}
            className="opacity-20"
            fill="none"
            stroke="currentColor"
            strokeWidth="100"
          >
            <circle r="234" cx="196" cy="23" />
            <circle r="234" cx="790" cy="491" />
          </Box>
        </svg>
        <Box
          component="svg"
          className="absolute top-3 right-3"
          sx={{ color: "#324055", padding: "10px" }}
          // stroke="currentColor"
          viewBox="0 0 220 192"
          width="220px"
          height="192px"
          fill="none"
        >
          <defs>
            <pattern
              id="837c3e70-6c3a-44e6-8854-cc48c737b659"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect x="0" y="0" width="4" height="4" fill="currentColor" />
            </pattern>
          </defs>
          <rect
            width="220"
            height="192"
            fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"
          />
        </Box>

        <div className="z-10 relative w-full">
          <div className="text-5xl font-bold leading-none text-gray-100">
            <div>Welcome to</div>
            <div>our community</div>
          </div>
          <div className="mt-12 text-lg tracking-tight leading-6 text-[#8694a7]">
            Fuse helps developers to build organized and well coded dashboards
            full of beautiful and rich modules. Join us and start building your
            application today.
          </div>
        </div>
      </Box>
    </div>
  );
};

export default SignIn;
