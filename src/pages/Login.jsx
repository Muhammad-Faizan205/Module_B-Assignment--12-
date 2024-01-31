import { Stack, Paper, Typography, Button } from "@mui/material";
import { Input_Component } from "../components/Input_Component";
// import { credentials_data } from "../utils/credentials_data";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  // let userdata = {}
  const [userData, setUserData] = useState({});

  const navigate = useNavigate();

  const onChangeHandle = (e) => {
    const { value, id } = e.target;
    // console.log(userData);
    // console.log(value, id);

    setUserData({ ...userData, [id]: value });
    // ...
  };

  const submitHandle = () => {
    const { email, password } = userData;
    if (
      email,
      password
    ) {
      navigate("/");
    }
  };
  return (
    <Stack className="min-h-[100dvh] justify-center items-center ">
      <div className="max-w-md login">
        <Paper
          component="form"
          onSubmit={submitHandle}
          elevation={10}
          sx={{ px: 2, py: 3 }}
        >
          <Typography align="center" fontWeight="bold" variant="h5">
            Login
          </Typography>
          {/* <Stack spacing={3}> */}
          <Input_Component
            placeholder="Enter Email"
            type="email"
            id="username"
            onChange={onChangeHandle}
            required={true}
          />
          <Input_Component
            placeholder="Enter Password"
            type="password"
            id="password"
            onChange={onChangeHandle}
            required={true}
          />

          <Button
            // onClick={submitHandle}
            type="submit"
            sx={{ width: "100%", mt: 2 }}
            variant="contained"
            color="info"
          >
            Submit
          </Button>
          <Stack className="flex  mt-5">
            Don't have an account? <Link to="/signup" className="text-blue-500 hover:underline text-1xl">Sign up here</Link>
          </Stack>
          {/* </Stack> */}
        </Paper>
      </div>
    </Stack>
  );
};

export { Login };
