import { gql } from "@apollo/client"

// USED
export const LOGIN_WITH_GITHUB_CODE = gql`
  mutation ($code: String!) {
    login(input: { code: $code }) {
      jwt
    }
  }
`

// USED
export const GET_EVENTS_BY_USER_TODAY = gql`
  query {
    todaysEvents: eventsForToday {
      name
      description
      order
    }
  }
`

// USED
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

// USED
export const SET_EVENTS = gql`
  mutation ($events: [EventInput], $publishKey: String) {
    addEvents(input: { events: $events, publishKey: $publishKey })
  }
`

export const GET_TOKEN_AND_GITHUB = gql`
  query {
    accountSaSToken {
      token
      github
    }
  }
`
