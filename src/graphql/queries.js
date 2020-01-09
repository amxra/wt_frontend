import { gql } from "apollo-boost";

export const GET_POKEMON_INFO = gql`
  {
    pokemons(first: 150) {
      id
      number
      name
      image
      evolutions {
        id
        number
        name
        image
      }
    }
  }
`;

export const LOGIN_QUERY = gql`
  query authForm($email: String!, $password: String!, $remember: Boolean!) {
    authForm(
      input: { email: $email, password: $password, remember: $remember }
    ) {
      id
      token
      isNewUser
    }
  }
`;

export const GET_UNITS = gql`
  query {
    units {
      id
      name
      type
    }
  }
`;

export const GET_COMPLETED_WORKOUTS = gql`
  query {
    completedWorkouts {
      userId
      workoutId {
        id
        name
        intensity
        avgTime
        session {
          startDate
          endDate
        }
      }
      startDate
      endDate
      pause
    }
  }
`;
