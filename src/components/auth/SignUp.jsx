import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { withApollo } from "react-apollo";
import GoogleLogin from "react-google-login";
import { Button, useToast } from "@chakra-ui/core";
import banner from "../../assets/banner.jpg";
import SignUpStyle from "../../styles/SignupStyles";
import { GOOGLE_AUTH_MUTATION, SIGNUP_MUTATION } from "../../graphql/mutations";
const { REACT_APP_GOOGLE_CLIENT_ID } = process.env;

function SignUp({ client, history }) {
  const firstname = useRef();
  const lastname = useRef();
  const password = useRef();
  const email = useRef();

  function onSubmit(e) {
    e.preventDefault();

    client
      .mutate({
        mutation: SIGNUP_MUTATION,
        variables: {
          firstname: firstname.current.value,
          lastname: lastname.current.value,
          password: password.current.value,
          rePassword: password.current.value,
          email: email.current.value
        }
      })
      .then(response => {
        console.log(response);
        toast({
          title: "Sign up Successful.",
          description: "Login with account details.",
          status: "success",
          duration: 9000,
          isClosable: true
        });
        history.push("/login");
      })
      .catch(error => {
        console.log(error.graphQLErrors[0].message);

        toast({
          title: "Error Sigin you up",
          description: error.graphQLErrors[0].message,
          status: "error",
          duration: 9000,
          isClosable: true
        });
      });
  }

  const toast = useToast();

  const responseFailureGoogle = error => {
    console.log(error);
    toast({
      title: "An error occurred.",
      description: "Unable to login to your account.",
      status: "error",
      duration: 9000,
      isClosable: true
    });
  };

  const responseGoogle = response => {
    console.log(response.accessToken);
    client
      .mutate({
        mutation: GOOGLE_AUTH_MUTATION,
        variables: {
          accessToken: response.accessToken
        }
      })
      .then(res => {
        console.log(res);
        const { token, isNewUser } = res.data.authGoogle;
        console.log(token);
        localStorage.setItem("userData", JSON.stringify({ token, isNewUser }));
        if (isNewUser === true) {
          history.push("/onboarding");
        } else {
          history.push("/");
        }

        toast({
          title: "Sign in Successful.",
          description: "We've created your account for you.",
          status: "success",
          duration: 9000,
          isClosable: true
        });
      })
      .catch(error => {
        console.log(error);

        toast({
          title: "An error occurred.",
          description: "Unable to login to your account.",
          status: "error",
          duration: 9000,
          isClosable: true
        });
      });
  };

  return (
    <SignUpStyle>
      <div className="signup-container">
        <div className="signup-banner">
          <img src={banner} alt="banner" />
        </div>
        <div className="signup-form">
          <form>
            <h2>Sign up</h2>
            <input
              ref={firstname}
              required
              placeholder="FIRST NAME"
              name="FIRST NAME"
              type="text"
            />
            <input
              ref={lastname}
              required
              placeholder="LAST NAME"
              name="LAST NAME"
              type="text"
            />
            <input
              ref={email}
              required
              placeholder="EMAIL"
              name="EMAIL"
              type="email"
            />
            <input
              ref={password}
              required
              placeholder="PASSWORD"
              name="PASSWORD"
              type="password"
            />
            <input
              ref={password}
              required
              placeholder="RE-ENTER PASSWORD"
              name=" PASSWORD"
              type="password"
            />

            <Button
              className="signup-form-button"
              variantColor="orange"
              rightIcon="arrow-forward"
              onClick={onSubmit}
            >
              Sign up
            </Button>
            <div className="signup-linked-profiles">
              <GoogleLogin
                clientId={REACT_APP_GOOGLE_CLIENT_ID}
                buttonText="Sign up with Google"
                onSuccess={responseGoogle}
                onFailure={responseFailureGoogle}
                cookiePolicy={"single_host_origin"}
              />

              <Button
                className="signup-linked-button"
                variantColor="orange"
                rightIcon="arrow-forward"
              >
                Facebook
              </Button>
            </div>
            <Link to="/login">Already have an account?</Link>
          </form>
        </div>
      </div>
    </SignUpStyle>
  );
}

export default withApollo(SignUp);