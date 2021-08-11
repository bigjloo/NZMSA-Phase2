import { gql } from "@apollo/client"

// Gets Shared Access Storage token and github
// name from backend
// export const GET_SAS_TOKEN_AND_GITHUB = gql`
//   query {
//     accountSaSToken {
//       token
//       github
//     }
//   }
// `
// TODO //
// export const VERIFY_USER_WITH_TOKEN = gql`
//   query {
//     self {

//     }
//   }
// `

// Gets todays events that belong to User
// export const GET_EVENTS_BY_USER_TODAY = gql`
//   query {
//     todaysEvents: eventsForToday {
//       name
//       description
//       photoURI
//     }
//   }
// `

// When User page loads
// Gets users github name + imageURI and
// events for today
export const GET_USER_DATA = gql`
  query {
    userData: self {
      github
      imageURI
    }

    sasToken: accountSaSToken {
      token
    }

    todaysEvents: eventsForToday {
      name
      description
      photoURI
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
        photoURI
      }
    }
  }
`

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
