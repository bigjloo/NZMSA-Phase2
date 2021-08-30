import { gql } from "@apollo/client"

// Saves local events state to backend
export const SET_EVENTS = gql`
  mutation ($events: [EventInput], $publishKey: String) {
    addEvents(input: { events: $events, publishKey: $publishKey }) {
      date
    }
  }
`

// Fetches JWT Token from backend using code from Github
export const GET_JWT_WITH_GITHUB_CODE = gql`
  mutation ($code: String!) {
    login(input: { code: $code }) {
      jwt
    }
  }
`