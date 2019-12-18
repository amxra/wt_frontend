import React from "react";
import styled from "styled-components";
import { Button } from "@chakra-ui/core";
import banner from "./assets/banner.jpg";

const SignUpStyle = styled.div`

    border: 1px solid red;
    width: 100%;
    height: 100vh;
    color: black;

    .signup-container{
        border: 1px solid yellow;
        width: 100%;
        height: 100%;
        display: flex;
    }

   .signup-banner{
       border: 1px solid blue;
       width: 50%;
       opacity: 0.5;

       img{
           width: 100%;
           height:100%;
       }
    }

    .signup-form{
        border: 1px solid green;
        width: 50%;
        display: flex;
        align-items: center;

        form{
            border: 1px solid white;
            height: auto;
            width: 100%;
            text-align: left;
            padding: 2rem;

            a{
                font-size: 16px;
                margin-left: 4.5rem;
                margin-top: 1rem;
                color: orange;
            }

            a:hover{
                color: grey;
            }

            input{
                display: block
                margin: 1rem auto;
                width: 80%;
                background-color: cream;
            }

            input[type=text], input[type=email], input[type=password]{
                background-color: #fffdd0;
            }

            h3{
                margin-left: 4.5rem;
                margin-bottom:2rem;
            }

           

            .signup-form-button{
                width: 80%;
                margin-left: 4.5rem;
            }


            .signup-linked-button{
                width: 45%;
                margin: 1rem 1rem 0 0;
            }
            
        .signup-linked-profiles{
            width: 80%;
            margin: 0 auto;
        }

    }


`;

function SignUp() {
  return (
    <SignUpStyle>
      <div className="signup-container">
        <div className="signup-banner">
          <img src={banner} alt="banner" />
        </div>
        <div className="signup-form">
          <form>
            <h3>Sign up</h3>
            <input name="FIRST NAME" type="text" />
            <input name="LAST NAME" type="text" />
            <input name="EMAIL" type="email" />
            <input name="PASSWORD" type="password" />
            <Button
              className="signup-form-button"
              variantColor="orange"
              rightIcon="arrow-forward"
            >
              Sign up
            </Button>
            <div className="signup-linked-profiles">
              <Button
                className="signup-linked-button"
                variantColor="orange"
                rightIcon="arrow-forward"
              >
                Google
              </Button>
              <Button
                className="signup-linked-button"
                variantColor="orange"
                rightIcon="arrow-forward"
              >
                Facebook
              </Button>
            </div>
            <a href="#">Already have an account?</a>
          </form>
        </div>
      </div>
    </SignUpStyle>
  );
}

export default SignUp;
