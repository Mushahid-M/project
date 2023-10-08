import React, { useState } from "react";
import { Box, TextField, Button, styled, Typography } from "@mui/material";

const Component = styled(Box)`
  margin-top: 40vh;
  width: 400px;
  margin: auto;
  box-shadow: 5px 2px 5px 5px rgba(0, 0, 0, 0.6);
`;

const Image = styled("img")({
  width: 100,
  display: "flex",
  margin: "auto",
  padding: "50px 0 0",
});

const Wrapper = styled(Box)`
  padding: 25px 35px;
  display: flex;
  flex-direction: column;
  flex: 1;
  & > div,
  & > button,
  & > p {
    margin-top: 20px;
  }
`;

const LoginButton = styled(Button)`
  text-transform: none;
  letter-spacing: 2px;
  background-color: #fb641b;
  height: 48px;
  border-radius: 2px;
`;

const SignupButton = styled(Button)`
  text-transform: none;
  letter-spacing: 2px;
  color: #2874f0;
  height: 48px;
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 20%);
`;

const Text = styled(Typography)`
  color: #878787;
  font-size: 14px;
`;

const imageURL =
  "https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png";

function Login() {
  const [account, setAccount] = useState("login");

  const toggleSignup = () => {
    setAccount("signup");
  };

  return (
    <Component>
      <Box>
        <Image src={imageURL} alt="image" />
        {account === "login" ? (
          <Wrapper>
            <TextField variant="standard" label="Enter user name" />
            <TextField variant="standard" label="Enter password" />
            <LoginButton variant="contained">Login</LoginButton>
            <Text>OR</Text>
            <SignupButton onClick={() => toggleSignup()}>Create an account</SignupButton>
          </Wrapper>
        ) : (
          <Wrapper>
            <TextField variant="standard" label="Name" />
            <TextField variant="standard" label="User name" />
            <TextField variant="standard" label="Password" />
            <SignupButton>Create an account</SignupButton>
            <Text>OR</Text>
            <LoginButton variant="contained">Already have an account ?</LoginButton>
          </Wrapper>
        )}
      </Box>
    </Component>
  );
}

export default Login;
