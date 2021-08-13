import {gql} from "@apollo/client"

// Sends local events state to backend
export const SET_EVENTS = gql`
  mutation ($events: [EventInput], $publishKey: String) {
    addEvents(input: { events: $events, publishKey: $publishKey }) {
      date
    }
  }
`

// Gets JWT Token from backend with code from Github OAuth server
export const LOGIN_WITH_GITHUB_CODE = gql`
  mutation ($code: String!) {
    login(input: { code: $code }) {
      jwt
    }
  }
`