import React from "react";
import {
  Container,
  Form,
  FormButton,
  FormContent,
  FormH1,
  FormLabel,
  FormWrapper,
  FromInput,
  Text,
  Icon,
} from "./SigninElements";

const Signin = () => {
  return (
    <>
      <Container>
        <FormWrapper>
          <Icon to="/">dolla</Icon>
          <FormContent>
            <Form>
              <FormH1>Sign in to your account</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FromInput type="email" required />

              <FormLabel htmlFor="for">Password</FormLabel>
              <FromInput type="password" required />

              <FormButton type="submit">Continue</FormButton>

              <Text>Forgot password</Text>
            </Form>
          </FormContent>
        </FormWrapper>
      </Container>
    </>
  );
};

export default Signin;
