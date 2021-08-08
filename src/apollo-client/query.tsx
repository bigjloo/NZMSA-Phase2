import { gql } from "@apollo/client"

console.log("inside query.tsx")
// Gets Shared Access Storage token and Github from backend
export const GET_TOKEN_AND_GITHUB = gql`
  query {
    accountSaSToken {
      token
      github
    }
  }
`

// Gets todays events that belong to User
export const GET_EVENTS_BY_USER_TODAY = gql`
  query {
    todaysEvents: eventsForToday {
      name
      description
      order
    }
  }
`

// Gets events from backend with publish key
export const GET_EVENTS_BY_PUBLISH_KEY = gql`
  query ($publishKey: String!) {
    day(publishKey: $publishKey) {
      date
      user {
        name
      }
      events {
        name
        description
      }
    }
  }
`

// Sends events state to backend
export const SET_EVENTS = gql`
  mutation ($events: [EventInput], $publishKey: String) {
    addEvents(input: { events: $events, publishKey: $publishKey })
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
