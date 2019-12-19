import React, { useState } from "react";
import {
  Flex,
  Heading,
  Button,
  Select,
  RadioButtonGroup
} from "@chakra-ui/core";
import styled from "styled-components";
import image from "../images/login_image.png";
import { ONBOARDING } from "../graphql/mutations";
console.log(ONBOARDING);
const emptyAnswers = {
  heightUnit: "",
  weightUnit: "",
  goal: "",
  experience: "",
  equipment: ""
};

function Onboarding(props) {
  const [answers, setAnswers] = useState(emptyAnswers);

  const handleChange = e => {
    setAnswers({
      ...answers,
      [e.target.name]:
        !e.target.value == "" ? e.target.value : e.target.innerText
    });
  };
  console.log(answers);

  const CustomRadio = React.forwardRef((props, ref) => {
    const { isChecked, isDisabled, value, onSubmit, ...rest } = props;
    return (
      <Button
        ref={ref}
        color={isChecked ? "#ff8744" : "#CCC5B9"}
        borderColor={isChecked ? "#ff8744" : "#CCC5B9"}
        aria-checked={isChecked}
        role="radio"
        isDisabled={isDisabled}
        {...rest}
      />
    );
  });

  return (
    <OnboardingStyled>
      <Flex justify="center">
        <div className="section-left">
          <img src={image} />
        </div>
        <Flex className="section-right" flexDirection="column">
          <div>
            <Heading className="heading" size="lg">
              Preferences
            </Heading>
            <div>
              <p>Which weight measurement unit do you prefer?</p>
              <RadioButtonGroup
                name="heightUnit"
                className="btnGroup"
                defaultValue="kilogram"
                onClick={handleChange}
                isInline
              >
                <CustomRadio className="unitButton" value="kilogram">
                  kilogram
                </CustomRadio>
                <CustomRadio className="unitButton" value="pounds">
                  pounds
                </CustomRadio>
              </RadioButtonGroup>
              <p>Which height measurement unit do you prefer?</p>
              <RadioButtonGroup
                name="weightUnit"
                className="btnGroup"
                defaultValue="rad2"
                onClick={handleChange}
                isInline
              >
                <CustomRadio className="unitButton" value="meters">
                  meters
                </CustomRadio>
                <CustomRadio className="unitButton" value="inches">
                  inches
                </CustomRadio>
              </RadioButtonGroup>
            </div>
            <p>What is your fitness goal?</p>
            <Select
              name="goal"
              onChange={handleChange}
              className="dropdown"
              placeholder="Select a goal"
            >
              <option value="option1">Weight Loss</option>
              <option value="option2">Muscle Gain</option>
              <option value="option3">Athletic</option>
              <option value="option3">Healthy</option>
            </Select>
            <p>How experienced are you working out</p>
            <Select className="dropdown" placeholder="Select a level">
              <option value="option1">Beginner</option>
              <option value="option3">Intermediate</option>
              <option value="option3">Expert</option>
            </Select>
            <p>What workout equipment do you have?</p>
            <Select className="dropdown" placeholder="Select equipment">
              <option value="option1">None</option>
              <option value="option3">Some / Home</option>
              <option value="option3">Gym</option>
            </Select>
            <div>
              <Button
                className="submit"
                variantColor="orange"
                rightIcon="arrow-forward"
              >
                Submit
              </Button>
            </div>
          </div>
        </Flex>
      </Flex>
    </OnboardingStyled>
  );
}

const OnboardingStyled = styled.div`
  .section-right {
    margin: auto;
    width: 50vw;
    @media only screen and (max-width: 650px) {
      width: 90%;
    }
    div {
      margin: auto;
      .btnGroup {
        .unitButton {
          border: 2px solid;
          background-color: transparent;
        }
        margin-top: 10px;
        margin-bottom: 15px;
        .unitButton:not(:last-child) {
          margin-right: 20px;
        }
      }
      .heading {
        margin-bottom: 25px;
      }
      p {
        margin-bottom: 10px;
        font-family: Roboto;
      }
      .dropdown,
      .submit {
        width: 100%;
        justify-content: space-between;
        margin-bottom: 15px;
      }
      .submit {
        background-color: #ff8744;
      }
      .dropdown {
        background: #fffcf2;
        border: 1px solid #252422;
        box-sizing: border-box;
      }
      .dropdownOptions {
        width: 30%;
      }
    }
  }
  .section-left {
    @media only screen and (max-width: 650px) {
      display: none;
    }
    width: 50vw;
    img {
      width: 100%;
      height: 100vh;
      object-fit: cover;
    }
  }
`;

export default Onboarding;
