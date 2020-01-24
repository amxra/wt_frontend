import React from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";

import { Heading, ButtonGroup, Button } from "@chakra-ui/core";
import { WorkoutStyle } from "./WorkoutStyle";

function Workout({ data, history, cardQuery }) {
  const { name, intensity, types, id, picture } = data;

  const deleteCustomWorkoutOnClick = () => {
    console.log(`DELETE ${id}`);
  };
  const editCustomWorkoutOnClick = id => e => {
    history.push(`/my/workout/${id}`);
  };

  if (cardQuery === "CUSTOM_WORKOUTS") {
    return (
      <WorkoutStyle>
        <Link to={`/workout/${id}`}>
          <img src={picture} alt={name} />
        </Link>
        <div className="workout-details">
          <Link to={`/workout/${id}`}>
            <Heading size="sm" textAlign="left">
              {name}
            </Heading>
            <div className="workout-type">
              <p>Intensity: {intensity}</p>
              <p>Type: {types}</p>
            </div>
          </Link>
          <ButtonGroup className="cw-buttons">
            <Button
              onClick={editCustomWorkoutOnClick(id)}
              leftIcon="edit"
              variant="outline"
              variantColor="yellow"
            >
              Edit
            </Button>
            <Button
              onClick={deleteCustomWorkoutOnClick}
              leftIcon="delete"
              variant="outline"
              variantColor="red"
            >
              Delete
            </Button>
          </ButtonGroup>
        </div>
      </WorkoutStyle>
    );
  }

  return (
    <WorkoutStyle>
      <Link to={`/workout/${id}`}>
        <img src={picture} alt={name} />

        <div className="workout-details">
          <Heading size="sm" textAlign="left">
            {name}
          </Heading>

          <div className="workout-type">
            <p>Intensity: {intensity}</p>
            <p>Type: {types}</p>
          </div>
        </div>
      </Link>
    </WorkoutStyle>
  );
}

//adding proptypes
Workout.propTypes = {
  data: PropTypes.object.isRequired
};

export default withRouter(Workout);
